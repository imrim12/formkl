import { FieldDefault, FieldSelection } from "@formkl/shared";

type FieldEvent = {
  field: FieldDefault | FieldSelection;
  fieldIndex: number;
  value: any;
};

type FieldNodeProps = {
  field: FieldDefault | FieldSelection;
  fieldIndex: number;
  onFieldChange: (payload: FieldEvent) => void;
};

export default function FieldNode(props: FieldNodeProps) {
  const { field, fieldIndex, onFieldChange } = props;
  return (
    <div className="field__wrapper">
      {/* render label */}
      {/* render field */}
      {/* render error */}
    </div>
  );
}
