/// <reference types="vite/client" />
import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "formkl-editor": { [prop: string]: any };
    }
  }
}
