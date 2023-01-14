import Formkl from "formkl";

import fs from "fs";
import path from "path";

export interface PluginDtsOptions {
  dir?: string;
}

export interface PluginOptions {
  extenstion?: string;
  dts?: boolean | PluginDtsOptions;
}

export default (options?: PluginOptions) => {
  return {
    name: "formkl-loader",
    buildStart() {
      const declaration = `// Generated by '@formkl/plugin-vite'
import type { Formkl, Theme } from "@formkl/shared";
import type { ComponentCustomProperties } from "vue";

declare module "vue" {
	interface ComponentCustomProperties {
		$formkl: {
			theme: Theme;
		};
	}
}

declare module "*.form" {
	const form: Formkl;
	export default form;
}

export {};`;

      const dts = this.options?.dts || false;
      if (dts !== false || (dts as any)?.dir) {
        fs.writeFile(
          path.resolve((dts as any)?.dir || "./", "form-shim.d.ts"),
          declaration,
          (err: any) => {
            if (err) throw err;
          },
        );
      }
    },
    transform(code: string, id: string) {
      if (id.endsWith(options?.extenstion || ".form")) {
        let loadedFormModule = {};
        try {
          loadedFormModule = Formkl.parse(code);
        } catch (error) {
          console.error(error);
        }

        return `export default ${JSON.stringify(loadedFormModule)}`;
      }
    },
  };
};