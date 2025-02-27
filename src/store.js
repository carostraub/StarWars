export const initialStore = () => {
  return {
    favoritos: [], // Lista de favoritos
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "ADD_FAVORITO":
      return {
        ...store,
        favoritos: [...store.favoritos, action.payload],
      };

    case "REMOVE_FAVORITO":
      return {
        ...store,
        favoritos: store.favoritos.filter((fav) => fav.uid !== action.payload.uid),
      };

    case "LOAD_FAVORITOS":  // Carga los favoritos guardados en localStorage
      return {
        ...store,
        favoritos: action.payload || [],
      };

    default:
      throw new Error("Unknown action.");
  }
}
