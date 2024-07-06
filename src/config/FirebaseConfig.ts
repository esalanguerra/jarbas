import { firebaseConstants } from "@jarbas/constants/FirebaseConstants";
import {initializeApp, getApps} from "firebase/app";

const firebaseConfig = getApps()
  .length === 0 ? initializeApp(firebaseConstants) : getApps()[0];

export { firebaseConfig };
