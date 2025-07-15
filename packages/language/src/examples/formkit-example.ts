import { FormKitParser } from '../parser-formkit'

// Example FormKL syntax
const formklSyntax = `
FORMKL BASE POST("https://api.example.com/submit")
"Contact Form"
"Please fill out this contact form"
{
  "Contact Information" HAS {
    REQUIRE "Full Name" $TEXT;
    REQUIRE "Email" $EMAIL VALID(HAS "@");
    "Phone Number" $TEL;
  }
  
  "Message" HAS {
    REQUIRE "Subject" $TEXT;
    REQUIRE "Message" $PARAGRAPH VALID(> 10);
    "Priority" $SELECT("Low", "Medium", "High");
  }
}
`

// Create parser instance
const parser = new FormKitParser()

try {
  // Parse FormKL to FormKit schema
  const formKitSchema = parser.parseToFormKit(formklSyntax)

  // eslint-disable-next-line no-console
  console.log('FormKit Schema:')
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(formKitSchema, null, 2))
}
catch (error) {
  console.error('Parse error:', (error as Error).message)
}
