import { JarbasDatabase } from "@jarbas/libs/firebase";
import { collection } from "firebase/firestore";

export const collectionsRefFirebase = {
  formDomains: 'formDomains',
  formInputs: 'formInputs'
};

export const collectionsRefFormDomains = collection(JarbasDatabase, collectionsRefFirebase.formDomains);

export const collectionsRefFormInputs = collection(JarbasDatabase, collectionsRefFirebase.formInputs);
