import { create } from "zustand";
import { persist } from "zustand/middleware";

// const useCartStore = (set) => ({
//   cart: [],
//   addToCart: (item) =>
//     set((state) => {
//       const existingItemIndex = state.cart.findIndex(
//         (cartItem) => cartItem.id === item.id
//       );
//       if (existingItemIndex !== -1) {
//         const updatedCart = [...state.cart];
//         updatedCart[existingItemIndex].quantity += 1;
//         return { cart: updatedCart };
//       }
//       return { cart: [...state.cart, { ...item, quantity: 1 }] };
//     }),
//   removeFromCart: (itemId) =>
//     set((state) => {
//       const existingItemIndex = state.cart.findIndex(
//         (cartItem) => cartItem.id === itemId
//       );
//       if (existingItemIndex !== -1) {
//         const updatedCart = [...state.cart];
//         if (updatedCart[existingItemIndex].quantity > 1) {
//           updatedCart[existingItemIndex].quantity -= 1;
//         } else {
//           updatedCart.splice(existingItemIndex, 1);
//         }
//         return { cart: updatedCart };
//       }
//       return state;
//     }),

// });

// const cartStore = create(
//   persist(useCartStore, {
//     name: 'cartthisis',
//   })
// );

// export default cartStore;

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  quantity?: number;
}
interface State {
  //this is CartState
  cart: Product[];
  totalItems: number;
  totalPrice: number;
}

interface Actions {
  addToCart: (Item: Product) => void;
  removeFromCart: (Item: Product) => void;
  removeOneFromCart: (Item: Product) => void;
}

const INITIAL_STATE: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create(
  persist<State & Actions>(
    (set, get):(State & Actions) => ({
  cart: INITIAL_STATE.cart,
  totalItems: INITIAL_STATE.totalItems,
  totalPrice: INITIAL_STATE.totalPrice,
  addToCart: (product: Product) => {
    const cart = get().cart;
    const cartItem = cart.find((item) => item.id === product.id);
    if (cartItem) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: (item.quantity as number) + 1 } : item
       )

       set(state => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price,
       }))
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];

      set((state) => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price,
      }));
    }
  },
  removeFromCart: (product: Product) => {
    set(state => ({
      cart: state.cart.filter(item => item.id !== product.id),
      totalItems: state.totalItems - 1,
      totalPrice: state.totalPrice - product.price,
     }))
  },
  removeOneFromCart: (product: Product) => {
    const cart = get().cart;
    const cartItem = cart.find((item) => item.id === product.id);
    if (cartItem) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: (item.quantity as number) - 1 } : item
       )

       set(state => ({
        cart: updatedCart,
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - product.price,
       }))
    } 
    if(cartItem?.quantity===1){
      set(state => ({
        cart: state.cart.filter(item => item.id !== product.id),
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - product.price,
       }))
    }
  }

  
}),
{
  name: "cart-storage",
  
}

)

);
