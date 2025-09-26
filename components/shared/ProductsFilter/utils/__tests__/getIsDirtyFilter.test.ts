import { getIsDirtyFilter } from "../getIsDirtyFilter";
import { TProductsFilter, PRODUCTS_FILTER_STATE_DEFAULT } from "../../state";

describe("getIsDirtyFilter", () => {
  it("returns false for default state", () => {
    const state: TProductsFilter = { ...PRODUCTS_FILTER_STATE_DEFAULT };
    expect(getIsDirtyFilter(state)).toBe(false);
  });

  it("returns true if price changes", () => {
    const state: TProductsFilter = {
      ...PRODUCTS_FILTER_STATE_DEFAULT,
      price: { from: 100, to: 200 },
    };
    expect(getIsDirtyFilter(state)).toBe(true);
  });

  it("returns true if filterNow changes", () => {
    const state: TProductsFilter = {
      ...PRODUCTS_FILTER_STATE_DEFAULT,
      filterNow: ["new-value"],
    };
    expect(getIsDirtyFilter(state)).toBe(true);
  });

  it("returns true if features change", () => {
    const state: TProductsFilter = {
      ...PRODUCTS_FILTER_STATE_DEFAULT,
      features: ["feature1", "feature2"],
    };
    expect(getIsDirtyFilter(state)).toBe(true);
  });

  it("returns false if we explicitly set all default values", () => {
    const state: TProductsFilter = {
      price: { ...PRODUCTS_FILTER_STATE_DEFAULT.price },
      filterNow: [...PRODUCTS_FILTER_STATE_DEFAULT.filterNow],
      features: [...PRODUCTS_FILTER_STATE_DEFAULT.features],
      isDirty: false,
    };
    expect(getIsDirtyFilter(state)).toBe(false);
  });
});
