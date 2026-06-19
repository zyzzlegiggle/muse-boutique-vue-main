export interface Product {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  price: number;
  image: string;
  description: string;
  details: string;
  specs: string[];
  variants: string[];
  variantLabel: string;
  svg: {
    viewBox: string;
    path: string;
  };
}

export interface CartItem {
  id: string;
  product: Product;
  variant: string;
  quantity: number;
}

export interface ListingState {
  products: Product[];
  searchQuery: string;
  selectedCategory: string;
  maxPrice: number;
  sortBy: string;
}
