export const CATEGORIES = [
  "All",
  "Fruits & Vegetables",
  "Dairy & Eggs",
  "Meat & Seafood",
  "Bakery & Bread",
  "Beverages",
  "Snacks & Sweets",
  "Frozen Foods",
].map((name, idx) => ({
  name,
  id: idx + 1,
}));
