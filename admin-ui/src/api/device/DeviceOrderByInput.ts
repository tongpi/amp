import { SortOrder } from "../../util/SortOrder";

export type DeviceOrderByInput = {
  createdAt?: SortOrder;
  deviceType?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  position?: SortOrder;
  updatedAt?: SortOrder;
};
