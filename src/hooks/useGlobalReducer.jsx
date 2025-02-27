import { useContext, useReducer, createContext, useEffect } from "react";
import storeReducer, { initialStore } from "../store";

const StoreContext = createContext();

export function StoreProvider({ children }) {
    const [store, dispatch] = useReducer(storeReducer, initialStore());

    // 🔹 Cargar favoritos desde localStorage cuando la app se inicia
    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem("favoritos"));
        if (savedFavorites) {
            dispatch({ type: "LOAD_FAVORITOS", payload: savedFavorites });
        }
    }, []);

    // 🔹 Guardar favoritos en localStorage cada vez que cambian
    useEffect(() => {
        localStorage.setItem("favoritos", JSON.stringify(store.favoritos));
    }, [store.favoritos]);

    return <StoreContext.Provider value={{ store, dispatch }}>{children}</StoreContext.Provider>;
}

export default function useGlobalReducer() {
    const { dispatch, store } = useContext(StoreContext);
    return { dispatch, store };
}
