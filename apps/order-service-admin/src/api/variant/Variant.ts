import { Product } from "../product/Product";

export type Variant = {
  createdAt: Date;
  id: string;
  productId?: Product | null;
  updatedAt: Date;
};
