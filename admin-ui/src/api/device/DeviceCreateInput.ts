export type DeviceCreateInput = {
  deviceType?: "Radar" | "Air" | "Smartgd" | null;
  name: string;
  position?: string | null;
};
