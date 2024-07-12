import { getAuth } from "firebase/auth";
import { JarbasFirebase } from "@jarbas/libs/firebase";

export const authFirebase = getAuth(JarbasFirebase);
