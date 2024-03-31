import { IOrderFormFields } from "../pages/Checkout";
import { CartState, ICart, ICartProduct } from "../store/slices/CartSlice";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  color: string[];
  size: string[];
  available: string;
  category: string;
  brand: string[];
  description: string;
  img_url: string;
  reviews_ids: string[]
}

export interface IPaginate {
  data?: IProduct[];
  first?: number;
  items?: number;
  last?: number;
  next?: number | null;
  prev?: number | null;
}

export interface IFilter {
  name: string;
}

export interface IPostCard {
  title: string;
  date: string;
  category: string;
  img_url: string;
  postId: string;
}

export interface IReviews {
  username: string;
  text: string;
  date: string;
  rate: number;
  productId: string;
}

export interface IInstaPost {
  post_link: string;
  img_url: string;
}


export interface IOrder extends IOrderFormFields {
  order: CartState
}