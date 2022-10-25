export interface ValidationOperator {
  $gt?: string | number;
  $lt?: string | number;
  $gteq?: string | number;
  $lteq?: string | number;
  $eq?: string | number;
  $has?: string | number;
  $and?: Array<ValidationOperator>;
  $or?: Array<ValidationOperator>;
}
