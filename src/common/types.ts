export interface IManaPage {
  limit: number;
  page: number;
  pages: number;
  total: number;
  items: IIdeaMana[];
}

export interface IIdeaMana {
  uuid: string;
  customer_name: string;
  ideasname: string;
  industry: string;
}

export interface IIdeaDeMana extends IIdeaMana {
  content_detail: string,
  value_benefits: string,
  price: number,
  customer_email: string,
  image: string[],
  view: number,
  image_intellect: string,
}
