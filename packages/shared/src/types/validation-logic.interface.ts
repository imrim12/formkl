export interface ValidationLogic {
  $gt?: string | number;
  $lt?: string | number;
  $gteq?: string | number;
  $lteq?: string | number;
  $eq?: string | number;
  $has?: string | number;
  $and?: Array<ValidationLogic>;
  $or?: Array<ValidationLogic>;
}
