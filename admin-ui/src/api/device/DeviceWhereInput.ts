import { StringFilter } from "../../util/StringFilter";

export type DeviceWhereInput = {
  deviceType?: "Radar" | "Air" | "Smartgd";
  id?: StringFilter;
  name?: StringFilter;
};
