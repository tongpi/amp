import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
} from "react-admin";

export const DeviceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
