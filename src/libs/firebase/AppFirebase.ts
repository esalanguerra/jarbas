import { firebaseConstants } from "@jarbas/constants";
import { initializeApp, getApps } from "firebase/app";

export const AppFirebase = getApps()
  .length === 0 ? initializeApp(firebaseConstants) : getApps()[0];
