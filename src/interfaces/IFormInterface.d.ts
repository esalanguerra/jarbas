import { IFormInputInterface } from "@jarbas/interfaces/IFormInputInterface";
import { IBaseInterface } from "@jarbas/interfaces/IBaseInterface";

export interface IFormInterface extends IBaseInterface {
  title?: string;
  description?: string;
  inputs?: IFormInputInterface[];
  redirectId?: string;
}
