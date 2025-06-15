export interface CarImage {
  image: string[];
}

export interface CarRelation {
  slug: string;
  count: number;
  name: string;
}

export interface Car {
  mark_id: string;
  folder_id: string;
  modification_id: string;
  complectation_name: string;
  body_type: string;
  wheel: string;
  color: string;
  metallic: string;
  availability: string;
  custom: string;
  state: string;
  owners_number: string;
  run: number;
  year: number;
  registry_year: number;
  currency: string;
  vin: string;
  price: number;
  credit_discount?: number;
  insurance_discount?: number;
  tradein_discount?: number;
  max_discount?: number;
  extras: string;
  images: CarImage;
  video?: string;
  booking_allowed: boolean;
  pts: string;
  unique_id: number;
  exchange: string;
  tech_param_id: number;
  engine_volume: number;
  engine_power: string;
  engine_type: string;
  gearbox: string;
  drive?: string;
  model_name: string;
  generation_name: string;
  mark_cyrillic_name: string;
  model_cyrillic_name: string;
  offer_type: string;
  updated_at: string;
  generation_rel: CarRelation;
  brand_rel: CarRelation;
  model_rel: CarRelation;
  images_amount: number;
  engine_type_eng: string;
  engine_power_num: number;
  body_type_eng: string;
  owners_number_num: number;
  color_eng: string;
  gearbox_eng: string;
}
