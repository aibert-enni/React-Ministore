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
}

export interface IPaginate {
  data?: IProduct[];
  first?: number;
  items?: number;
  last?: number;
  next?: number;
  pages?: number;
  prev?: number;
}

export interface IFilter {
  name: string
}

// export interface IProductCategory {
//   name: string;
// }

// export interface IProductBrand {
//   name: string;
// }

export interface IPostCard {
  title: string;
  date: string;
  category: string;
  img_url: string;
  postId: string;
}

export interface ITestimonial {
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
