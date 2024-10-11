import { Agent } from "../agent/Agent";
import { Appointment } from "../appointment/Appointment";

export type Property = {
  address: string | null;
  agent?: Agent | null;
  appointments?: Array<Appointment>;
  bathrooms: number | null;
  bedrooms: number | null;
  createdAt: Date;
  id: string;
  price: number | null;
  size: number | null;
  updatedAt: Date;
};
