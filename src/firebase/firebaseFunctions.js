import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "./firebase.config";

export const saveItem = async (data) => {
  await setDoc(doc(db, "novedades", `${Date.now()}`), data, {
    merge: true,
  });
};

// Funciones para el público
export const getNovedades = async () => {
  const items = await getDocs(
    query(collection(db, "novedades"), orderBy("id", "asc"))
  );

  return items.docs.map((doc) => doc.data());
};
