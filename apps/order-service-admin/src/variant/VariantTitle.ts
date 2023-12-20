import { Variant as TVariant } from "../api/variant/Variant";

export const VARIANT_TITLE_FIELD = "id";

export const VariantTitle = (record: TVariant): string => {
  return record.id?.toString() || String(record.id);
};
