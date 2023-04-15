var t={d:(e,i)=>{for(var s in i)t.o(i,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:i[s]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{Z:()=>h});var i=Object.defineProperty,s=(t,e,s)=>(((t,e,s)=>{e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s})(t,"symbol"!=typeof e?e+"":e,s),s);const a=t=>new RegExp(`^\\b(${[t,t.toLowerCase(),t.toUpperCase(),t.toLowerCase().charAt(0).toUpperCase()+t.toLowerCase().slice(1)].join("|")})\\b`),o=[[/^\n/,null],[/^\s+/,null],[/^\/\/.*/,null],[/^\/\*[\s\S]*?\*\//,null],[/^;/,";"],[/^{/,"{"],[/^}/,"}"],[/^\(/,"("],[/^\)/,")"],[/^\[/,"["],[/^\]/,"]"],[/^,/,","],[/^\./,"."],[/^[<>]=?/,"OPERATOR_RELATIONAL"],[/^[=!]=/,"OPERATOR_EQUALITY"],[/^&&/,"LOGICAL_AND"],[/^\|\|/,"LOGICAL_OR"],[/^!/,"LOGICAL_NOT"],[a("VALID"),"VALID"],[a("REGEX"),"REGEX"],[a("URL"),"URL"],[a("REQUIRE"),"REQUIRE"],[a("AS"),"AS"],[a("OR"),"OR"],[a("AND"),"AND"],[a("HAS"),"HAS"],[a("INCLUDES"),"HAS"],[a("FORMKL"),"FORMKL"],[a("MULTIPLE"),"MULTIPLE"],[a("BASE"),"BASE"],[a("FLAT"),"FLAT"],[a("GET"),"HTTPMETHOD"],[a("POST"),"HTTPMETHOD"],[a("PUT"),"HTTPMETHOD"],[a("PATCH"),"HTTPMETHOD"],[a("DELETE"),"HTTPMETHOD"],...["text","paragraph","number","switch"].map((t=>[a(t),"FIELD"])),...["checkbox","radio","select"].map((t=>[a(t),"FIELDSELECTION"])),...["email","zip","age"].map((t=>[a(t),"FIELDVALIDATED"])),...["datetimerange","datetime","daterange","timerange","time","date"].map((t=>[a(t),"FIELDDATETIME"])),[/^\$\w+/,"FIELDCUSTOM"],[/^\d+/,"NUMBER"],[/^"[^"]*"/,"STRING"],[/^'[^']*'/,"STRING"],[a("NaN"),"NAN"],[a("FALSE"),"FALSE"],[a("TRUE"),"TRUE"],[a("NULL"),"NULL"],[a("UNDEFINED"),"UNDEFINED"]];class l{constructor(t){s(this,"syntax"),s(this,"cursor"),s(this,"currentLine"),s(this,"currentColumn"),this.syntax=t,this.cursor=0,this.currentLine=1,this.currentColumn=0}isEOF(){return this.cursor===this.syntax.length}hasMoreTokens(){return this.cursor<this.syntax.length}getNextToken(){if(!this.hasMoreTokens())return null;const t=this.syntax.slice(this.cursor);for(const[e,i]of o){const s=this._match(e,t);if(null!==s)return null===i?this.getNextToken():{type:i,value:s}}throw new SyntaxError(`Unexpected token: "${t[0]}" at ${this.currentLine}:${this.currentColumn}`)}_match(t,e){const i=t.exec(e);return null===i?null:(this.cursor+=i[0].length,"^\\n"===t.source&&null!==i&&(this.currentLine++,this.currentColumn=0),this.currentColumn+=i[0].length,i[0])}}const n=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\s+/g,"-").toLowerCase();class r{constructor(){}validateLogicAnd(t){return t.map((t=>this.validationLogic(t))).join("%(s)and%(s)")}validateLogicOr(t){return t.map((t=>this.validationLogic(t))).join("%(s)or%(s)")}validationLogic(t){const e=Object.keys(t)[0],i=t[e];return{$gt:()=>`>%(s)${i}`,$lt:()=>`>=%(s)${i}`,$gteq:()=>`<%(s)${i}`,$lteq:()=>`<=%(s)${i}`,$eq:()=>`==%(s)${"string"==typeof i?JSON.stringify(i):i}`,$has:()=>`has%(s)${"string"==typeof i?JSON.stringify(i):i}`,$and:()=>t.$and&&this.validateLogicAnd(t.$and),$or:()=>t.$or&&this.validateLogicOr(t.$or)}[e]()}validation(t){return[t.regex&&`regex("${t.regex.source}")`,t.logic&&`valid(${this.validationLogic(t.logic)})`].filter((t=>t)).join("%(s)")}selectionField(t){return`${t.type}${t.fetchUrl?`${t.fetchDataPath?`%(s)${t.fetchDataPath}`:""}%(s)url("${[t.fetchUrl,t.valueKey,t.labelKey].map((t=>JSON.stringify(t))).join(", ")}")`:`%(s)(${t.options.map((t=>JSON.stringify(t))).join(", ")})`}`}fields(t){return"%(t)%(t)"+t.map((t=>[t.required&&"require",t.maxResponseAllowed?t.maxResponseAllowed:t.multiple&&"multiple",n(t.label).toLowerCase()!==t.type&&`"${t.label}"`,["select","radio","checkbox"].includes(t.type)?this.selectionField(t):t.type,t.validation&&this.validation(t.validation),n(t.label).toLowerCase()!==t.key&&`as%(s)"${t.key}"`].filter((t=>t)).join("%(s)")+";")).join("%(n)%(t)%(t)")}sections(t){return t.map((t=>["%(t)",t.multiple&&"multiple%(s)",t.title&&`"${t.title}"%(s)`,"has","%(s)","{","%(n)",this.fields(t.fields),"%(n)","%(t)","}",!t.title&&t.key||t.title&&n(t.title).toLowerCase()!==t.key?`%(s)as%(s)"${t.key}"`:""].join(""))).join("%(n)")}stringify(t){return`${["formkl","flat"===t.model&&"flat",t.title&&JSON.stringify(t.title),t.description&&JSON.stringify(t.description)].filter((t=>t)).join("%(s)")}%(s){%(n)${this.sections(t.sections)}%(n)}`.replace(/\%\(s\)/g," ").replace(/\%\(t\)/g,"\t").replace(/\%\(n\)/g,"\n")}}new class{constructor(){s(this,"syntax"),s(this,"tokenizer"),s(this,"_lookahead"),this.syntax="",this.tokenizer=new l(""),this._lookahead=null}parse(t){return this.syntax="",this._lookahead=null,this.syntax=t,this.tokenizer=new l(this.syntax),this._lookahead=this.tokenizer.getNextToken(),this.FormBlock()}stringify(t){return(new r).stringify(t)}FormBlock(){var t,e,i,s,a;const o={model:"base",sections:[]};this._eat("FORMKL"),"FLAT"===(null==(t=this._lookahead)?void 0:t.type)?(this._eat("FLAT"),o.model="flat"):("BASE"===(null==(e=this._lookahead)?void 0:e.type)&&this._eat("BASE"),o.model="base"),"HTTPMETHOD"===(null==(i=this._lookahead)?void 0:i.type)&&(o.method=this._eat("HTTPMETHOD").value,this._eat("("),o.endpoint=this.StringLiteral(),this._eat(")")),"STRING"===(null==(s=this._lookahead)?void 0:s.type)&&(o.title=this.StringLiteral()),"STRING"===(null==(a=this._lookahead)?void 0:a.type)&&(o.description=this.StringLiteral()),this._eat("{");const l=this.SectionBlockList();if(l.length>1){const t=new Set;l.forEach((e=>{if(t.has(e.key))throw new SyntaxError(`Duplicate section key "${e.key}", this will make the your schema looks confusing! Please use different aliases if your sections have the same title.`);t.add(e.key)}))}return Object.assign(o,{sections:l}),this._eat("}"),o}SectionBlockList(t="}"){var e;const i=[this.SectionBlock()];for(;null!=this._lookahead&&(null==(e=this._lookahead)?void 0:e.type)!==t;)i.push(this.SectionBlock());return i}SectionBlock(){var t,e,i,s;const a={fields:[]};"NUMBER"===(null==(t=this._lookahead)?void 0:t.type)?(a.maxResponseAllowed=this.NumericLiteral(),a.multiple=!0):"MULTIPLE"===(null==(e=this._lookahead)?void 0:e.type)&&(this._eat("MULTIPLE"),a.multiple=!0),"STRING"===(null==(i=this._lookahead)?void 0:i.type)&&(a.title=this.StringLiteral(),a.key=n(a.title).toLowerCase()),this._eat("HAS"),this._eat("{");const o=this.FieldStatementList();if(this._eat("}"),"AS"===(null==(s=this._lookahead)?void 0:s.type)&&(this._eat("AS"),a.key=this.StringLiteral()),o.length>1){const t=new Set;o.forEach((e=>{if(t.has(e.key))throw new SyntaxError(`Duplicate field key "${e.key}", this will make the your schema looks confusing! Please use different aliases if your fields have the same name.`);t.add(e.key)}))}if(a.multiple&&o.some((t=>t.multiple)))throw new SyntaxError("A section with multiple responses cannot have fields that also have multiple responses!");return Object.assign(a,{fields:o}),a}FieldStatementList(t="}"){var e;const i=[this.FieldStatement()];for(;null!==this._lookahead&&(null==(e=this._lookahead)?void 0:e.type)!==t;)i.push(this.FieldStatement());return i}FieldStatement(){var t,e,i,s,a,o;const l={type:"text",label:"",key:""};return"NUMBER"===(null==(t=this._lookahead)?void 0:t.type)&&(l.maxResponseAllowed=this.NumericLiteral(),l.multiple=!0),"REQUIRE"===(null==(e=this._lookahead)?void 0:e.type)&&(this._eat("REQUIRE"),l.required=!0),"MULTIPLE"===(null==(i=this._lookahead)?void 0:i.type)&&(this._eat("MULTIPLE"),l.multiple=!0),"STRING"===(null==(s=this._lookahead)?void 0:s.type)?l.label=this.StringLiteral():l.label=(r=String(null==(a=this._lookahead)?void 0:a.value).replace(/^\$/g,""),String(r).toLowerCase().charAt(0).toUpperCase()+String(r).toLowerCase().slice(1)),l.key=n(l.label).toLowerCase(),Object.assign(l,this.FieldExpression()),"AS"===(null==(o=this._lookahead)?void 0:o.type)&&(this._eat("AS"),l.key=this.StringLiteral()),this._eat(";"),l;var r}FieldExpression(){var t,e;const i={},s={FIELD:this.FieldDefaultExpression.bind(this),FIELDCUSTOM:this.FieldCustomExpression.bind(this),FIELDSELECTION:this.FieldSelectionExpression.bind(this),FIELDVALIDATED:this.FieldValidatedExpression.bind(this),FIELDDATETIME:this.FieldDatetimeExpression.bind(this)}[String(null==(t=this._lookahead)?void 0:t.type)];if(!s)throw new SyntaxError(`Unsupported field type "${null==(e=this._lookahead)?void 0:e.value}"`);{Object.assign(i,s());const t=this.ValidationExpression();Object.assign(i,t)}return i}FieldDefaultExpression(){var t;const e={type:"text"};if("FIELD"===(null==(t=this._lookahead)?void 0:t.type)){const t=this._eat("FIELD").value;Object.assign(e,{type:t.toLowerCase()})}return e}FieldCustomExpression(){var t;const e={type:"text"};if("FIELDCUSTOM"===(null==(t=this._lookahead)?void 0:t.type)){const t=this._eat("FIELDCUSTOM").value;Object.assign(e,{type:t.toLowerCase()})}return e}FieldSelectionExpression(){var t,e,i,s;let a="";const o={type:"select",options:[]};if("FIELDSELECTION"===(null==(t=this._lookahead)?void 0:t.type)){const t=this._eat("FIELDSELECTION").value;Object.assign(o,{type:t.toLowerCase()})}if("STRING"===(null==(e=this._lookahead)?void 0:e.type)&&(a=this.StringLiteral()),"URL"===(null==(i=this._lookahead)?void 0:i.type)){this._eat("URL"),this._eat("(");const t=this.StringList();if(t.length>3)throw new SyntaxError('Selection field fetching data from URL can only have less or equal to 3 arguments ("fetchUrl", "valueKey", "labelKey")');this._eat(")"),Object.assign(o,{options:[],fetchUrl:t[0]||"",valueKey:t[1]||"id",labelKey:t[2]||"name"})}if("("===(null==(s=this._lookahead)?void 0:s.type)){this._eat("(");const t=this.StringList();this._eat(")"),o.options=t}return Object.assign(o,{fetchDataPath:a}),o}FieldValidatedExpression(){var t;const e={type:"text"};if("FIELDVALIDATED"===(null==(t=this._lookahead)?void 0:t.type)){const t=this._eat("FIELDVALIDATED").value;Object.assign(e,{type:t.toLowerCase()})}return e}FieldDatetimeExpression(){var t;const e={type:"datetime"};if("FIELDDATETIME"===(null==(t=this._lookahead)?void 0:t.type)){const t=this._eat("FIELDDATETIME").value;Object.assign(e,{type:t.toLowerCase()})}return e}ValidationExpression(){var t,e,i;const s={};do{if("VALID"===(null==(t=this._lookahead)?void 0:t.type)){this._eat("VALID"),this._eat("(");const t=this.LogicalORExpression();this._eat(")"),Object.assign(s,{logic:t})}if("REGEX"===(null==(e=this._lookahead)?void 0:e.type)){this._eat("REGEX"),this._eat("(");const t=this.StringLiteral();this._eat(")"),Object.assign(s,{regex:new RegExp(t)})}}while(["REGEX","VALID"].includes(String(null==(i=this._lookahead)?void 0:i.type)));if(s.logic||s.regex)return{validation:s}}LogicalORExpression(){var t;const e=[];do{e.push(this.LogicalANDExpression())}while("OR"===(null==(t=this._lookahead)?void 0:t.type)&&this._eat("OR"));return e.length>1?{$or:e}:e[0]}LogicalANDExpression(){var t;const e=[];do{e.push(this.RelationalExpression())}while("AND"===(null==(t=this._lookahead)?void 0:t.type)&&this._eat("AND"));return e.length>1?{$and:e}:e[0]}RelationalExpression(){var t,e,i,s,a;switch(null==(t=this._lookahead)?void 0:t.type){case"OPERATOR_RELATIONAL":const t=this._eat("OPERATOR_RELATIONAL").value;switch(t){case">":return{$gt:this.NumericLiteral()};case">=":return{$gte:this.NumericLiteral()};case"<":return{$lt:this.NumericLiteral()};case"<=":return{$lte:this.NumericLiteral()};default:throw new SyntaxError(`Unknown relational operator: ${t}`)}case"OPERATOR_EQUALITY":const o=this._eat("OPERATOR_EQUALITY").value,l="=="===o?"$eq":"$neq";switch(o){case"==":case"!=":switch(null==(e=this._lookahead)?void 0:e.type){case"NUMBER":return{[l]:this.NumericLiteral()};case"NAN":return{[l]:this.NaNLiteral()};case"NULL":return{[l]:this.NullLiteral()};case"UNDEFINED":return{[l]:this.UndefinedLiteral()};case"TRUE":case"FALSE":return{[l]:this.BooleanLiteral(null==(i=this._lookahead)?void 0:i.type)};case"STRING":return{[l]:this.StringLiteral()};default:throw new SyntaxError(`Unknown equality value type: ${null==(s=this._lookahead)?void 0:s.type}`)}default:throw new SyntaxError(`Unknown equality operator: ${o}`)}case"HAS":return this._eat("HAS"),{$has:isNaN(null==(a=this._lookahead)?void 0:a.value)?this.StringLiteral():this.NumericLiteral()}}}StringList(){var t;const e=[];do{e.push(this.StringLiteral())}while(","===(null==(t=this._lookahead)?void 0:t.type)&&this._eat(","));return e}NaNLiteral(){return this._eat("NAN"),NaN}NumericLiteral(){const t=this._eat("NUMBER");return Number(t.value)}StringLiteral(){const t=this._eat("STRING");return String(t.value).slice(1,-1)}BooleanLiteral(t){return this._eat(t?"TRUE":"FALSE"),t}NullLiteral(){return this._eat("NULL"),null}UndefinedLiteral(){this._eat("UNDEFINED")}_eat(t){const e=this._lookahead;if(null===e)throw new SyntaxError(`Unexpected end of input, expected: "${t}"`);if(e.type!==t)throw new SyntaxError(`Unexpected token: "${e.value}" at ${this.tokenizer.currentLine}:${this.tokenizer.currentColumn}, expected: "${t}"`);return this._lookahead=this.tokenizer.getNextToken(),e}};const h={model:"base",sections:[{fields:[{type:"text",label:"Text",key:"text"}]}]};var c=e.Z;export{c as default};