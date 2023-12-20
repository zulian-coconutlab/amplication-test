import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";
import { VariantWhereUniqueInput } from "../variant/VariantWhereUniqueInput";

export type ProductUpdateInput = {
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
  variants?: VariantWhereUniqueInput | null;
};
