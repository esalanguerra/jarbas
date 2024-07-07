import { AppFirebase } from "@jarbas/libs/firebase/AppFirebase";
import { getFirestore } from "firebase/firestore";

export const AppFirebaseDatabase = getFirestore(AppFirebase);
