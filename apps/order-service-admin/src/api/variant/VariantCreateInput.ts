import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type VariantCreateInput = {
  productId: ProductWhereUniqueInput | null;
};
