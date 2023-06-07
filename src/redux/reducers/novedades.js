import { REFRESH_PUBLICACIONES, REFRESH_PUBLICACIONES_FAIL } from "../types";

const initialState = {
  novedades: false,
};

export default function novedadesReducer(state = initialState, action) {
  switch (action.type) {
    case REFRESH_PUBLICACIONES:
      return {
        ...state,
        novedades: true,
      };
    case REFRESH_PUBLICACIONES_FAIL:
      return {
        ...state,
        novedades: false,
      };
    default:
      return state;
  }
}
