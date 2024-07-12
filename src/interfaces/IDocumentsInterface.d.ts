import { IBaseInterface } from "@jarbas/interfaces/IBaseInterface";

export interface IDocumentsInterface extends IBaseInterface {
  sub?: string;
  name?: string;
  date?: string;
  type?: string;
}
