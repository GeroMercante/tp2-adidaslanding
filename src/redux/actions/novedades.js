import { REFRESH_PUBLICACIONES, REFRESH_PUBLICACIONES_FAIL } from "../types";

export function refreshPublicaciones() {
  return {
    type: REFRESH_PUBLICACIONES,
  };
}

export function refreshPublicacionesFail() {
  return {
    type: REFRESH_PUBLICACIONES_FAIL,
  };
}
