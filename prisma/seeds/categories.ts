export const CATEGORIES_MAP = {
  All: 0,
  Kitchen: 1,
  "Bakery & Bread": 2,
  "Meat & Seafood": 3,
  Fruits: 4,
  Vegetables: 5,
  Others: 6,
} as const;

export const CATEGORIES = Object.entries(CATEGORIES_MAP).map(([name, id]) => ({
  name,
  id,
}));
