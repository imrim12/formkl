import Formkl from "formkl";
import React from "react";

export default () => {
  const { Component: FormJsx, model: formModel } = Formkl.adapter(
    "react",
    `Formkl {
    "Personal Information" includes {
     "Fullname" text;
     VN phone;
    }
    "Other Information" includes {
      require zip;
      "Bio" paragraph;
    }
  }`,
  );

  const handleFormChange = (form) => {};
  const handleFormSubmit = (form) => {};

  return <FormJsx model={formModel} onChange={handleFormChange} onSubmit={handleFormSubmit} />;
};
