import { toast } from "react-toastify";
import { firebase, db } from "../../firebase/firebase.config";
import { LOGIN, LOGIN_FAIL } from "../types";

export const registerWithEmail = ({ displayName, email, password }) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const uid = result.user.uid;
        const userRef = db.collection("usuarios").doc(uid);

        userRef.set({
          uid,
          email,
          isAdmin: false,
          displayName,
        });

        userRef.get().then((doc) => {
          if (doc.exists) {
            const user = doc.data();
            dispatch({
              type: LOGIN,
              payload: {
                uid: result.user.uid,
                email: result.user.email,
                isAdmin: user.isAdmin,
                displayName,
              },
            });
            toast.success("Has creado tu cuenta. Inicia sesión.");
          }
        });
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_FAIL,
          payload: error.message,
        });
        toast.error("Error al registrarse");
      });
  };
};
