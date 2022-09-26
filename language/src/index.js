import fs from "fs";
import path from "path";
import lexer from "./lexer.js";
import bnf from "./bnf.js";
import { Token } from "./enum/token.enum.js";

const ast = {
  lex: lexer,
  tokens: Object.values(Token).join(" "),
  start: Object.keys(bnf)[0],
  bnf,
  moduleInclude: `
    const slugify = require("slugify"); // Must be commonjs

    let keyPool = {};
    let sectionKeyPool = {};

    let sectionMultiplePool = {};

    function generateKey(key, type = "field", duplicateCount = 1) {
      let result = slugify(key).toLowerCase();
      
      const pool = type === "section" ? sectionKeyPool : keyPool
      if (pool[result]) {
        if (duplicateCount > 1) {
          result = result.slice(0, result.toString().length - duplicateCount.toString().length)
        }

        return generateKey(result + duplicateCount, type, duplicateCount + 1);
      } else {
        if (type !== "field") {
          sectionKeyPool[result] = true;
        } else {
          keyPool[result] = true;
        }

        return result;
      }
    }

    function generateLabel(str = "") {
      const words = str.split(" ");

      return words.map((word) => { 
        return word[0].toUpperCase() + word.substring(1); 
      }).join(" ");
    }

    function throwIfHasMultipleFields(fields) {
      if (fields.some(f => f.multiple)) throw new SyntaxError("[Formkl]: A multiple response section cannot have multiple response fields!")
    }
  `,
};

fs.writeFileSync("./dist/formkl.ast.json", JSON.stringify(ast, null, 2), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File written successfully\n");
  }
});
