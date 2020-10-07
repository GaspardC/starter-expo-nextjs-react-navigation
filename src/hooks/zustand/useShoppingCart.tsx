import create, { State } from "zustand";
import persist from '../../helpers/zustandPersist';

type Product = { id?: number; amount?: number, name?: string };

interface Store extends State {
    products: Product[];
    setProducts: (payload: Product) => void;
}

const useShoppingCart = create<Store>(
    persist<Store>("shoppingCart", (set, get) => ({
        products: [{ name: 'Apple', id: 1 }],
        setProducts: (payload) => {
            const state = get();

            set({ ...state, products: [...state.products, payload] });
        },
    })),
);

export default useShoppingCart