import { PRODUCTS_FILTER_STATE_DEFAULT } from "../../state";
import { parseQueryToFilterState } from "../parseQueryToFilterState";
import QueryString from "qs";

describe("parseQueryToFilterState", () => {
  it("returns false isDirty for empty query", () => {
    const state = parseQueryToFilterState("");
    expect(state.isDirty).toBe(true);
  });

  it("returns false isDirty for null query", () => {
    const state = parseQueryToFilterState("null");
    expect(state.isDirty).toBe(true);
  });

  it("returns false isDirty for query with default values", () => {
    const query = QueryString.stringify(PRODUCTS_FILTER_STATE_DEFAULT);
    const state = parseQueryToFilterState(query);
    expect(state.isDirty).toBe(false);
  });

  it("returns true isDirty if any field differs from default", () => {
    const query = QueryString.stringify({ price: { from: 10, to: 100 } });
    const state = parseQueryToFilterState(query);
    expect(state.isDirty).toBe(true);
  });

  it("parses price.from and price.to correctly", () => {
    const query = "price[from]=50&price[to]=150";
    const state = parseQueryToFilterState(query);
    expect(state.price.from).toBe(50);
    expect(state.price.to).toBe(150);
  });

  it("parses filterNow as array", () => {
    const query = "filterNow=fast&filterNow=new";
    const state = parseQueryToFilterState(query);
    expect(state.filterNow).toEqual(["fast", "new"]);
  });

  it("parses features as array", () => {
    const query = "features=red&features=large";
    const state = parseQueryToFilterState(query);
    expect(state.features).toEqual(["red", "large"]);
  });

  it("uses fallback for invalid price", () => {
    const query = "price[from]=abc&price[to]=";
    const state = parseQueryToFilterState(query);
    expect(state.price.from).toBe(PRODUCTS_FILTER_STATE_DEFAULT.price.from);
    expect(state.price.to).toBe(PRODUCTS_FILTER_STATE_DEFAULT.price.to);
  });
});
