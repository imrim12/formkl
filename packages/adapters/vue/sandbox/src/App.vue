<template>
  <div>
    <h2>Form 111111111111111111111</h2>
    <Formkl ref="formklNew" :formkl="formklSyntax" :options="formklOptions" />
    <button @click="handleSubmit">Submit 1</button>
    <Formkl ref="formklNew2" :formkl="formklSyntax2" :options="formklOptions2" />
    <button @click="handleSubmit2">Submit 2</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Formkl } from "../../src";
import { FormOptions } from "../../src/core/Form";

export default defineComponent({
  name: "App",
  components: { Formkl },
  setup() {
    const formklOptions = ref<FormOptions>({
      modelDefault: {},
      async submitMethod(url, method, model) {
        console.log("submitMethod", url, method, model);
      },
    });
    const formklOptions2 = ref<FormOptions>({
      modelDefault: {},
    });

    const formklSyntax = ref(`
        formkl {
          "Personal Information"includes{
            // "Time" time;
            // "Date" date;
            // "Time Range" timerange;
            // "Date Range" daterange;
            // "Datetime" datetime;
            // "Datetime Range" datetimerange;
            "Fullname" text;
            "Gender" radio("Male","Female","Other");
            "Gender" checkbox("Male","Female","Other");
            "Gender" select("Male","Female","Other");
            require "Country By ISO3" select "data" url("https://countriesnow.space/api/v0.1/countries/iso", "Iso3");
            multiple  require  "Note" paragraph;
            multiple "Note" paragraph;
          }
          multiple "Other Information"includes {
            require text;
            "Some field" text valid(< 512);
          }
        }
        `);
    const formklSyntax2 = ref(`
        formkl flat {
          "Personal Information"includes{
            // "Time" time;
            // "Date" date;
            // "Time Range" timerange;
            // "Date Range" daterange;
            // "Datetime" datetime;
            // "Datetime Range" datetimerange;
            "Fullname" text;
            "Gender" radio("Male","Female","Other");
            "Gender" checkbox("Male","Female","Other");
            "Gender" select("Male","Female","Other");
            require "Country By ISO3" select "data" url("https://countriesnow.space/api/v0.1/countries/iso", "Iso3");
            multiple require   "Note" paragraph;
            multiple "Note" paragraph;
          }
          multiple "Other Information"includes {
            require text;
            "Some field" text valid(< 512);
          }
        }
        `);

    const formklNew = ref();
    const formklNew2 = ref();
    onMounted(() => {
      console.log("formklNew", formklNew.value.getForm());
      console.log("formklNew2", formklNew2.value.getForm());

      setTimeout(() => {
        formklNew.value.fill({
          data: [
            {
              section: "personal-information",
              field: "note",
              value: ["Heheh"],
            },
            {
              section: "other-information",
              field: "some-field",
              value: ["Hello world"],
            },
          ],
        });
      }, 1000);
    });

    const handleSubmit = () => {
      formklNew.value.submit(
        (model: any) => {
          console.log("Submit handleSubmit", model);
        },
        (errors: any) => {
          console.error("Falied handleSubmit", errors);
        },
      );
    };
    const handleSubmit2 = () => {
      formklNew2.value.submit(
        (model: any) => {
          console.log("Submit handleSubmit2", model);
        },
        (errors: any) => {
          console.error("Falied handleSubmit2", errors);
        },
      );
    };

    return {
      formklOptions,
      formklOptions2,
      formklSyntax,
      formklSyntax2,
      formklNew,
      formklNew2,
      handleSubmit,
      handleSubmit2,
    };
  },
});
</script>
