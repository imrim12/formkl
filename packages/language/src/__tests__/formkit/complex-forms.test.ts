import { FormKitParser } from '../../parser-formkit'

describe('formKit parser - complex forms', () => {
  let parser: FormKitParser

  beforeEach(() => {
    parser = new FormKitParser()
  })

  it('should parse a complete contact form', () => {
    const formklSyntax = `formkl post("https://api.example.com/contact") "Contact Form" "Please fill out this contact form" {
      "Personal Information" has {
        require "Full Name" text;
        require "Email" email regex("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
        "Phone Number" text;
      }
      
      "Message Details" has {
        require "Subject" text;
        require "Message" paragraph valid(> 10);
        "Priority" select("Low", "Medium", "High");
        "Newsletter" checkbox("Subscribe to newsletter");
      }
    }`

    const result = parser.parseToFormKit(formklSyntax)

    expect(result).toStrictEqual({
      $formkit: 'form',
      method: 'post',
      action: 'https://api.example.com/contact',
      children: [
        {
          $el: 'h1',
          children: 'Contact Form',
        },
        {
          $el: 'p',
          children: 'Please fill out this contact form',
        },
        {
          $el: 'div',
          attrs: {
            'class': 'formkl-section',
            'data-section-key': 'personal-information',
          },
          children: [
            {
              $el: 'h2',
              children: 'Personal Information',
            },
            {
              $formkit: 'text',
              name: 'full-name',
              label: 'Full Name',
              validation: 'required',
            },
            {
              $formkit: 'email',
              name: 'email',
              label: 'Email',
              validation: 'required|matches:/^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/',
            },
            {
              $formkit: 'text',
              name: 'phone-number',
              label: 'Phone Number',
            },
          ],
        },
        {
          $el: 'div',
          attrs: {
            'class': 'formkl-section',
            'data-section-key': 'message-details',
          },
          children: [
            {
              $el: 'h2',
              children: 'Message Details',
            },
            {
              $formkit: 'text',
              name: 'subject',
              label: 'Subject',
              validation: 'required',
            },
            {
              $formkit: 'textarea',
              name: 'message',
              label: 'Message',
              validation: 'required|min:11',
            },
            {
              $formkit: 'select',
              name: 'priority',
              label: 'Priority',
              options: [
                { label: 'Low', value: 'Low' },
                { label: 'Medium', value: 'Medium' },
                { label: 'High', value: 'High' },
              ],
            },
            {
              $formkit: 'checkbox',
              name: 'newsletter',
              label: 'Newsletter',
              options: [
                { label: 'Subscribe to newsletter', value: 'Subscribe to newsletter' },
              ],
            },
          ],
        },
      ],
    })
  })

  it('should handle flat model forms', () => {
    const formklSyntax = `formkl flat "Simple Form" {
      has {
        "Name" text;
        "Email" email;
      }
    }`

    const result = parser.parseToFormKit(formklSyntax)

    expect(result).toStrictEqual({
      $formkit: 'form',
      children: [
        {
          $el: 'h1',
          children: 'Simple Form',
        },
        {
          $formkit: 'text',
          name: 'name',
          label: 'Name',
        },
        {
          $formkit: 'email',
          name: 'email',
          label: 'Email',
        },
      ],
    })
  })

  it('should handle multiple response fields', () => {
    const formklSyntax = `formkl {
      has {
        multiple "Skills" checkbox("JavaScript", "TypeScript", "Vue", "React");
        5 "Top Languages" select("English", "Spanish", "French", "German");
      }
    }`

    const result = parser.parseToFormKit(formklSyntax)

    expect(result).toStrictEqual({
      $formkit: 'form',
      children: [
        {
          $formkit: 'checkbox',
          name: 'skills',
          label: 'Skills',
          multiple: true,
          options: [
            { label: 'JavaScript', value: 'JavaScript' },
            { label: 'TypeScript', value: 'TypeScript' },
            { label: 'Vue', value: 'Vue' },
            { label: 'React', value: 'React' },
          ],
        },
        {
          $formkit: 'select',
          name: 'top-languages',
          label: 'Top Languages',
          multiple: true,
          attrs: {
            'max-selections': 5,
          },
          options: [
            { label: 'English', value: 'English' },
            { label: 'Spanish', value: 'Spanish' },
            { label: 'French', value: 'French' },
            { label: 'German', value: 'German' },
          ],
        },
      ],
    })
  })
})
