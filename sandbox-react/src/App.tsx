import { useState } from "react";
import { Formkl } from "@formkl/adapter";

function App() {
  const [formklSyntax, setFormklSyntax] = useState(`formkl
  "Your Formkl example"
  "This form is generated by the formkl adapter"
{
  multiple "Soem" includes {
    require text;
  }
  "jhk" includes {
    multiple text;
  }
}`);

  const handleInput = (event: any) => {
    setFormklSyntax(event.target.value);
  };

  return (
    <div className="flex w-full justify-between">
      <div className="flex-1">
        <formkl-editor value={formklSyntax} onInput={handleInput} />
      </div>
      <div className="flex-1 py-2 px-8">
        <Formkl formkl={formklSyntax} />
      </div>
    </div>
  );
}

export default App;
