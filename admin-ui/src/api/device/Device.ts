export type Device = {
  createdAt: Date;
  deviceType?: "Radar" | "Air" | "Smartgd" | null;
  id: string;
  name: string;
  position: string | null;
  updatedAt: Date;
};
