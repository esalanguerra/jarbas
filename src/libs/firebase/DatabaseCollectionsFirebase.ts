import { JasbasDatabase } from "@jarbas/libs/firebase";
import { collection } from "firebase/firestore";

export const collectionsRefFirebase = {
  formDomains: 'formDomains',
  formInputs: 'formInputs'
};

export const collectionsRefFormDomains = collection(JasbasDatabase, collectionsRefFirebase.formDomains);

export const collectionsRefFormInputs = collection(JasbasDatabase, collectionsRefFirebase.formInputs);
