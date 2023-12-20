import { Order } from "../order/Order";
import { Variant } from "../variant/Variant";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  itemPrice: number | null;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
  variants?: Variant | null;
};
