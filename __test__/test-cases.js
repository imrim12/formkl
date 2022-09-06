module.exports = [
  // Most happy case
  `Formkl {
    "Personal Information"includes {
     "Fullname" text;
     VN phone;
    }
    "Other Information"includes {
      require zip;
      "Bio" paragraph;
    }
  }`,
  'formkl "A random survey" { "Personal Information" includes {email;}}',
  'formkl {"Personal Information"  includes   {require email;}}',
  'formkl { "Personal Information"    includes {require "Fullname" text;}}',
  `formkl {
    "Personal Information" includes{
  "Fullname" text;
  US phone;
  }
}`,
  `formkl "Some random survey" "This form is to survey and stuff " {
    "Personal Information" includes{
      "Fullname" text;
      require "Bio" paragraph regex("^[a-zA-Z]$") valid(> 100 and < 300);
      multiple "Custom regex" text regex("^[a-zA-Z]$");
    }
  }`,
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
  'formkl {"Personal Information" includes {   US phone;}}',
  'Formkl {   "Personal Information" includes  {require US phone;   }}',
  'formkl {"Personal Information" includes  {require time;}}',
  'formkl {"Personal Information" includes {require "Date of birth" birthday;}}',
  `formkl {
    "Re-Index User" includes {
      require "User email" email;
    }
  }
  `,
  `formkl {
    "Reverting location keywords" includes {
      require "Target Company" select url("/api/company");
      require "From keyword" text;
      require "To keyword" text;
      "Force update" switch;
    }
  }
  `,
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
];
