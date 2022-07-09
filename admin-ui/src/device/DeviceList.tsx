import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DeviceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"设备"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="设备类型" source="deviceType" />
        <TextField label="ID" source="id" />
        <TextField label="设备名称" source="name" />
        <TextField label="位置" source="position" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
