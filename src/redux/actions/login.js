import { auth, db } from "../../firebase/firebase.config";
import { LOGIN, LOGIN_FAIL, LOGOUT, LOGOUT_FAIL } from "../types";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export const login = (email, password) => async (dispatch) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const docRef = doc(db, "usuarios", user.uid);
    const docSnap = await getDoc(docRef);
    const isAdmin = docSnap.get("isAdmin");
    const userName = docSnap.get("displayName");
    dispatch({
      type: LOGIN,
      payload: {
        uid: user.uid,
        email: user.email,
        isAdmin: isAdmin,
        displayName: userName,
      },
    });
    localStorage.setItem(
      "auth",
      JSON.stringify({
        uid: user.uid,
        email: user.email,
        isAdmin: isAdmin,
        displayName: userName,
      })
    );
    toast.success("Has iniciado sesión");
  } catch (error) {
    console.error(error);
    dispatch({
      type: LOGIN_FAIL,
    });
    toast.error("Error al iniciar sesión");
  }
};

export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem("auth");
    await signOut(auth);
    dispatch({
      type: LOGOUT,
    });
    toast.success("Has cerrado sesión");
  } catch (error) {
    console.error(error);
    dispatch({
      type: LOGOUT_FAIL,
    });
    toast.error("Error al cerrar sesión");
  }
};
