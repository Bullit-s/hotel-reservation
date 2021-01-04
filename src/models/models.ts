import { ChangeEvent } from "react";
import { FilterValues } from "../components/RoomsFilter";

export interface IStateContext {
  rooms: any[];
  sortedRooms: any[];
  featuredRooms: any[];
  loading: boolean;
}

export interface RoomObject {
  name: string;
  slug: string;
  images: string[];
  price: number;
}

export type HandleFormChange<FormValues> = (
  changedValue: { [key in keyof FormValues]: string },
  values: FormValues
) => void;

export interface RoomsObject {
  rooms: any[];
  sortedRooms: any[];
  featuredRooms: any[];
  loading: boolean;
  getRoom: (slug: string) => any;
  onChangeFilters: HandleFormChange<FilterValues>;
}
