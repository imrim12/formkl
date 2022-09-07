module.exports = [
  [
    `Formkl {
      // Your info
    "Personal Information"includes {
     "Fullname" text;
     VN phone;
    }
    "Personal Information"includes {
      "Fullname" text;
      require zip;
      require zip;
      "Bio" paragraph;
    }
    "Personal Information"includes {
      "Fullname" text;
      require zip;
      require zip;
      "Bio" paragraph;
    }
  }`,
    {
      sections: [
        {
          title: "Personal Information",
          key: "personal-information",
          fields: [
            {
              type: "text",
              label: "Fullname",
              require: false,
              key: "fullname",
            },
            {
              type: "VN phone",
              require: false,
              key: "vn-phone",
            },
          ],
        },
        {
          title: "Personal Information",
          key: "personal-information1",
          fields: [
            {
              type: "text",
              label: "Fullname",
              require: false,
              key: "fullname1",
            },
            {
              type: "zip",
              require: true,
              key: "zip",
            },
            {
              type: "zip",
              require: true,
              key: "zip1",
            },
            {
              type: "paragraph",
              label: "Bio",
              require: false,
              key: "bio",
            },
          ],
        },
        {
          title: "Personal Information",
          key: "personal-information2",
          fields: [
            {
              type: "text",
              label: "Fullname",
              require: false,
              key: "fullname2",
            },
            {
              type: "zip",
              require: true,
              key: "zip2",
            },
            {
              type: "zip",
              require: true,
              key: "zip3",
            },
            {
              type: "paragraph",
              label: "Bio",
              require: false,
              key: "bio1",
            },
          ],
        },
      ],
    },
  ],
  [
    'formkl "A random survey" { "Personal Information" includes {email as "email";}}',
    {
      title: "A random survey",
      sections: [
        {
          title: "Personal Information",
          key: "personal-information",
          fields: [
            {
              type: "email",
              require: false,
              key: "email",
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
          key: "personal-information",
          fields: [
            {
              type: "email",
              require: true,
              key: "email",
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
          key: "personal-information",
          fields: [
            {
              type: "text",
              label: "Fullname",
              require: true,
              key: "fullname",
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
          key: "personal-information",
          fields: [
            {
              type: "text",
              label: "Fullname",
              require: false,
              key: "fullname",
            },
            {
              type: "US phone",
              require: false,
              key: "us-phone",
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
          key: "personal-information",
          fields: [
            {
              type: "text",
              label: "Fullname",
              require: false,
              key: "fullname",
            },
            {
              type: "paragraph",
              label: "Bio",
              require: true,
              key: "bio",
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
              key: "custom-regex",
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
          key: "personal-information",
          multiple: true,
          fields: [
            {
              type: "text",
              label: "Fullname",
              require: false,
              key: "fullname",
            },
            {
              type: "radio",
              options: ["Male", "Female", "Other"],
              label: "Gender",
              require: false,
              key: "gender",
            },
            {
              type: "select",
              options: [],
              fetchUrl: "/api/company",
              label: "Current Company",
              require: true,
              key: "current-company",
            },
            {
              type: "US phone",
              require: false,
              key: "us-phone",
            },
          ],
        },
        {
          title: "Other Information",
          key: "other-information",
          multiple: true,
          fields: [
            {
              type: "zip",
              require: true,
              key: "zip",
              multiple: true,
            },
            {
              type: "text",
              label: "Some field",
              require: false,
              key: "some-field",
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
          key: "personal-information",
          fields: [
            {
              type: "US phone",
              require: false,
              key: "us-phone",
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
          key: "personal-information",
          fields: [
            {
              type: "US phone",
              require: true,
              key: "us-phone",
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
          key: "personal-information",
          fields: [
            {
              type: "time",
              require: true,
              key: "time",
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
          key: "personal-information",
          fields: [
            {
              type: "birthday",
              label: "Date of birth",
              require: true,
              key: "date-of-birth",
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
          key: "re-index-user",
          fields: [
            {
              type: "email",
              label: "User email",
              require: true,
              key: "user-email",
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
          key: "reverting-location-keywords",
          fields: [
            {
              type: "select",
              options: [],
              fetchUrl: "/api/company",
              label: "Target Company",
              require: true,
              key: "target-company",
            },
            {
              type: "text",
              label: "From keyword",
              require: true,
              key: "from-keyword",
            },
            {
              type: "text",
              label: "To keyword",
              require: true,
              key: "to-keyword",
            },
            {
              type: "switch",
              label: "Force update",
              require: false,
              key: "force-update",
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
          key: "target",
          multiple: true,
          fields: [
            {
              type: "select",
              options: [],
              fetchUrl: "/api/company",
              label: "Target Company",
              require: true,
              key: "target-company",
            },
            {
              type: "select",
              options: [],
              fetchUrl: "https://someapi.com/api/group",
              label: "Group",
              require: true,
              key: "group",
            },
            {
              type: "switch",
              label: "From unassign location",
              require: false,
              key: "from-unassign-location",
            },
          ],
        },
        {
          title: "Date",
          key: "date",
          fields: [
            {
              type: "date",
              label: "From date",
              require: true,
              key: "from-date",
            },
            {
              type: "date",
              label: "To date",
              require: true,
              key: "to-date",
            },
          ],
        },
      ],
    },
  ],
];
