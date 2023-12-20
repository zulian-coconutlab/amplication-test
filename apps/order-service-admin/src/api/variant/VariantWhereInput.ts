import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type VariantWhereInput = {
  id?: StringFilter;
  productId?: ProductWhereUniqueInput;
};
