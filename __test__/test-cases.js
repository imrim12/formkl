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
  'formkl { "Personal Information" includes {email;}}',
  'formkl {"Personal Information"  includes   {require email;}}',
  'formkl { "Personal Information"    includes {require "Fullname" text;}}',
  `formkl {
    "Personal Information" includes{
  "Fullname" text;
  US phone;
  }
}`,
  `formkl {
    "Personal Information" includes{
      "Fullname" text;
      require "Bio" paragraph regex("^[a-zA-Z]$") valid(> 100 and < 300);
      "Custom regex" text regex("^[a-zA-Z]$");
    }
  }`,
  `formkl {
    "Personal Information"includes {
     "Fullname" text;
      "Gender" radio from "Male""Female""Other";

     US phone;

    }
    "Other Information"includes {
      require zip;
      
      
      "Some field" text valid(< 512);

    }
  }`,
  'formkl {"Personal Information" includes {   US phone;}}',
  'Formkl {   "Personal Information" includes  {require US phone;   }}',
  'formkl {"Personal Information" includes  {require time;}}',
  'formkl {"Personal Information" includes {require "Date of birth" birthday;}}',
];
