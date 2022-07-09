import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
} from "react-admin";

export const DeviceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="deviceType"
          label="设备类型"
          choices={[
            { label: "RADAR", value: "Radar" },
            { label: "AIR", value: "Air" },
            { label: "SMARTGD", value: "Smartgd" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="设备名称" source="name" />
        <TextInput label="位置" source="position" />
      </SimpleForm>
    </Edit>
  );
};
