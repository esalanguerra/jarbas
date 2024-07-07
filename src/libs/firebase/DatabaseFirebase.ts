import { AppFirebase } from "./AppFirebase";
import { getFirestore } from "firebase/firestore";

export const AppFirebaseDatabase = getFirestore(AppFirebase);
