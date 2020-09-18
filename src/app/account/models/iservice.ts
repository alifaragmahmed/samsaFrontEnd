export interface IService {
  name: string;
  value: number;
  except_level_id: number;
  division_id: number;
  copy: boolean;
  repeat: boolean;
  store_id: number;
  additional_value: number;
  installment_percent: number;
  from_installment_id: number;
  type: string;
}
