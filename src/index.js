const fs = require("fs");
const path = require("path");
const lexer = require("./lexer");
const bnf = require("./bnf");
const { Token } = require("./enum/token.enum");

const ast = {
  lex: lexer,
  tokens: Object.values(Token).join(" "),
  start: Object.keys(bnf)[0],
  bnf,
  moduleInclude: `
    const slugify = require("slugify");

    const keyPool = {};
    const sectionKeyPool = {};
    const generateKey = (key, type = "field", duplicateCount = 1) => {
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

    const generateLabel = (str = "") => {
      const words = str.split(" ");

      return words.map((word) => { 
        return word[0].toUpperCase() + word.substring(1); 
      }).join(" ");
    }
  `,
};

fs.writeFileSync(path.resolve(__dirname, "../dist/formkl.ast.json"), JSON.stringify(ast, null, 2));
