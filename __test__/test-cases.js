module.exports = [
  [
    `Formkl {
      // Your info
    "Personal Information"includes {
     "Fullname" text;
     VN phone;
    }
    "Other Information"includes {
      require zip;
      "Bio" paragraph;
    }
  }`,
    {
      sections: [
        {
          title: "Personal Information",
          fields: [
            {
              type: "text",
              label: "Fullname",
              require: false,
            },
            {
              type: "VN phone",
              require: false,
            },
          ],
        },
        {
          title: "Other Information",
          fields: [
            {
              type: "zip",
              require: true,
            },
            {
              type: "paragraph",
              label: "Bio",
              require: false,
            },
          ],
        },
      ],
    },
  ],
  [
    'formkl "A random survey" { "Personal Information" includes {email;}}',
    {
      title: "A random survey",
      sections: [
        {
          title: "Personal Information",
          fields: [
            {
              type: "email",
              require: false,
            },
          ],
        },
      ],
    },
  ],
  [
    'formkl {"Personal Information"  includes   {require email;}}',
    {
      sections: [
        {
          title: "Personal Information",
          fields: [
            {
              type: "email",
              require: true,
            },
          ],
        },
      ],
    },
  ],
  [
    'formkl { "Personal Information"    includes {require "Fullname" text;}}',
    {
      sections: [
        {
          title: "Personal Information",
          fields: [
            {
              type: "text",
              label: "Fullname",
              require: true,
            },
          ],
        },
      ],
    },
  ],
  [
    `formkl {
    "Personal Information" includes{
      /* Some
       comment */
  "Fullname" text;
  US phone;
  }
}`,
    {
      sections: [
        {
          title: "Personal Information",
          fields: [
            {
              type: "text",
              label: "Fullname",
              require: false,
            },
            {
              type: "US phone",
              require: false,
            },
          ],
        },
      ],
    },
  ],
  [
    `formkl "Some random survey" "This form is to survey and stuff " {
    "Personal Information" includes{
      "Fullname" text;
      require "Bio" paragraph regex("^[a-zA-Z]$") valid(> 100 and < 300);
      multiple "Custom regex" text regex("^[a-zA-Z]$");
    }
  }`,
    {
      title: "Some random survey",
      description: "This form is to survey and stuff ",
      sections: [
        {
          title: "Personal Information",
          fields: [
            {
              type: "text",
              label: "Fullname",
              require: false,
            },
            {
              type: "paragraph",
              label: "Bio",
              require: true,
              validation: {
                regex: "^[a-zA-Z]$",
                $and: [
                  {
                    $gt: 100,
                  },
                  {
                    $lt: 300,
                  },
                ],
              },
            },
            {
              type: "text",
              label: "Custom regex",
              require: false,
              validation: {
                regex: "^[a-zA-Z]$",
              },
              multiple: true,
            },
          ],
        },
      ],
    },
  ],
  [
    `formkl {
    multiple "Personal Information"includes {
     "Fullname" text;
      "Gender" radio ("Male","Female","Other");
      require "Current Company" select url("/api/company");

     US phone;

    }
    multiple "Other Information"includes {
      multiple require zip;
      
      
      "Some field" text valid(< 512);

    }
  }`,
    {
      sections: [
        {
          title: "Personal Information",
          multiple: true,
          fields: [
            {
              type: "text",
              label: "Fullname",
              require: false,
            },
            {
              type: "radio",
              options: ["Male", "Female", "Other"],
              label: "Gender",
              require: false,
            },
            {
              type: "select",
              options: [],
              fetchUrl: "/api/company",
              label: "Current Company",
              require: true,
            },
            {
              type: "US phone",
              require: false,
            },
          ],
        },
        {
          title: "Other Information",
          multiple: true,
          fields: [
            {
              type: "zip",
              require: true,
              multiple: true,
            },
            {
              type: "text",
              label: "Some field",
              require: false,
              validation: {
                $lt: 512,
              },
            },
          ],
        },
      ],
    },
  ],
  [
    'formkl {"Personal Information" includes {   US phone;}}',
    {
      sections: [
        {
          title: "Personal Information",
          fields: [
            {
              type: "US phone",
              require: false,
            },
          ],
        },
      ],
    },
  ],
  [
    'Formkl {   "Personal Information" includes  {require US phone;   }}',
    {
      sections: [
        {
          title: "Personal Information",
          fields: [
            {
              type: "US phone",
              require: true,
            },
          ],
        },
      ],
    },
  ],
  [
    'formkl {"Personal Information" includes  {require time;}}',
    {
      sections: [
        {
          title: "Personal Information",
          fields: [
            {
              type: "time",
              require: true,
            },
          ],
        },
      ],
    },
  ],
  [
    'formkl {"Personal Information" includes {require "Date of birth" birthday;}}',
    {
      sections: [
        {
          title: "Personal Information",
          fields: [
            {
              type: "birthday",
              label: "Date of birth",
              require: true,
            },
          ],
        },
      ],
    },
  ],
  [
    `formkl {
    "Re-Index User" includes {
      require "User email" email;
    }
  }
  `,
    {
      sections: [
        {
          title: "Re-Index User",
          fields: [
            {
              type: "email",
              label: "User email",
              require: true,
            },
          ],
        },
      ],
    },
  ],
  [
    `formkl {
    "Reverting location keywords" includes {
      require "Target Company" select url("/api/company");
      require "From keyword" text;
      require "To keyword" text;
      "Force update" switch;
    }
  }
  `,
    {
      sections: [
        {
          title: "Reverting location keywords",
          fields: [
            {
              type: "select",
              options: [],
              fetchUrl: "/api/company",
              label: "Target Company",
              require: true,
            },
            {
              type: "text",
              label: "From keyword",
              require: true,
            },
            {
              type: "text",
              label: "To keyword",
              require: true,
            },
            {
              type: "switch",
              label: "Force update",
              require: false,
            },
          ],
        },
      ],
    },
  ],
  [
    `formkl {
    multiple "Target" includes {
      require "Target Company" select url("/api/company");
      require "Group" select url("https://someapi.com/api/group");
      "From unassign location" switch;
    }
    "Date" includes {
      require "From date" date;
      require "To date" date;
    }
  }
  `,
    {
      sections: [
        {
          title: "Target",
          multiple: true,
          fields: [
            {
              type: "select",
              options: [],
              fetchUrl: "/api/company",
              label: "Target Company",
              require: true,
            },
            {
              type: "select",
              options: [],
              fetchUrl: "https://someapi.com/api/group",
              label: "Group",
              require: true,
            },
            {
              type: "switch",
              label: "From unassign location",
              require: false,
            },
          ],
        },
        {
          title: "Date",
          fields: [
            {
              type: "date",
              label: "From date",
              require: true,
            },
            {
              type: "date",
              label: "To date",
              require: true,
            },
          ],
        },
      ],
    },
  ],
];
