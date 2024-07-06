import { IFormInputInterface } from "./IFormInputInterface";

export interface IFormInterface {
  sub?: string;
  title?: string;
  description?: string;
  inputs?: IFormInputInterface[];
  redirectId?: string;
}
