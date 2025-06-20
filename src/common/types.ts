export interface IManaPage {
  limit: number;
  page: number;
  pages: number;
  total: number;
  items: IProductMana[];
}

export interface IProductMana {
  uuid: string;
  customer_name: string;
  ideasname: string;
  problemname: string;
  industry: string;
  is_active: number;
  is_delete: number;
  post_day: string;
}

export interface IProductDeMana extends IProductMana {
  content_detail: string;
  value_benefits: string;
  price: number;
  customer_email: string;
  image: string[];
  view: number;
  image_intellect: string;
}

// user
export interface IUserManaPage {
  limit: number;
  page: number;
  pages: number;
  total: number;
  items: IUserMana[];
}
export interface IUserMana {
  uuid: string;
  username: string;
  expertname: string;
  email: string;
  is_active: number;
  is_delete: number;
  industry?: string[];
  startday?: string;
  endday?: string;
}

// history
export interface IHisPage {
  limit: number;
  page: number;
  pages: number;
  total: number;
  items: ITranHistory[];
}

export interface ITranHistory {
  uuid: string;
  customer_name: string;
  customer_uuid: string;
  produce_uuid: string;
  amount: number;
  description: string;
  type_produce: "ideas" | "problems";
  created_at: string;
}
