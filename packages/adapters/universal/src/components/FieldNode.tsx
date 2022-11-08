import { FieldDefault, FieldSelection } from "@formkl/shared";

type FieldEvent = {
  field: FieldDefault | FieldSelection;
  fieldIndex: number;
  value: any;
};

type FieldNodeProps = {
  key: number | string;
  field: FieldDefault | FieldSelection;
  fieldIndex: number;
  onFieldChange: (payload: FieldEvent) => void;
};

// Feature:
// 1. Render field from a Component instance (default field or custom syntax field)
// 2. Adapt field input/change event from Component
// 3. Render field label tip/description if declared
// 4. Adapt validator base on the used UI library
// 5. Render field error message if has validation
// 6. Support multiple responses
// 7. Support conditional rendering
export default function FieldNode(props: FieldNodeProps) {
  const { field, fieldIndex, onFieldChange } = props;
  return (
    <>
      <div className="field__wrapper">
        <label htmlFor={field.key}>{field.label}</label>
        <input id={field.key} />
        {/* render error */}
      </div>
    </>
  );
}
