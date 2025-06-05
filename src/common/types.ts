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

export interface IUpdateExpert {
  expertname: string;
  image: string;
  introduce: string;
  achivement: string[];
  industry: string[];
  password: string;
}
