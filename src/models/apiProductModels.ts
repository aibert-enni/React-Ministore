import { IOrderFormFields as OrderFormFields } from "../pages/Checkout";
import { CartState } from "../store/slices/CartSlice";
import { Post } from "./apiBlogModels";

export interface Product {
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

export interface Paginate {
  data?: Product[] | Post[];
  first?: number;
  items?: number;
  last?: number;
  next?: number | null;
  prev?: number | null;
}

export interface Filter {
  name: string;
}

export interface Reviews {
  username: string;
  text: string;
  date: string;
  rate: number;
  productId: string;
}

export interface InstaPost {
  post_link: string;
  img_url: string;
}


export interface Order extends OrderFormFields {
  order: CartState
}

export interface Question {
  fullname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}