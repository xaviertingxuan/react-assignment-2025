// import { atom, useAtom } from 'jotai'
// import { Immutable } from "seamless-immutable"
// import axios from 'axios';
// // import { useEffect, useRef } from 'react';
// import { useJwt } from "../UserStore"
// // after all the imports
// import { produce } from 'immer';

// // within the component
// const initialCart = [
//     {
//         "id": 1,
//         "product_id": 1,
//         "quantity": 10,
//         "productName": "Organic Green Tea",
//         "price": 12.99,
//         "imageUrl": "https://picsum.photos/id/225/300/200",
//         "description": "Premium organic green tea leaves, rich in antioxidants and offering a smooth, refreshing taste."
//     }
// ];

// export const cartAtom = atom(initialCart);
// export const cartLoadingAtom = atom(false);

// export const useCart = () => {
//     const [cart, setCart] = useAtom(cartAtom);
//     const [, setIsLoading] = useAtom(cartLoadingAtom)
//     const { getJwt } = useJwt();

//     const fetchCart = async () => {
//         const jwt = getJwt();
//         setIsLoading(true);

//         try {
//             const response = await axios.get(
//                 `${import.meta.env.VITE_API_URL}/api/cart` ,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${jwt}` ,
//                     }
//                 }
//             );
//             setCart(Immutable(response.data));  
//         } catch (error) {
//             console.error("Error fetching cart", error)
//         } finally {
//             setIsLoading(false);
//         }

//     }
//     const getCartTotal = () => {
//         return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
//     };

//     // const addToCart = (product) => {
//     //     setCart(currentCart => {
//     //         // find if the item already exists in the shopping item
//     //         // important - we assume `product_id` is the id of the product
//     //         const existingItemIndex = cart.findIndex(i => i.product_id === product.product_id);
//     //         if (existingItemIndex !== -1) {
//     //             let newQuantity = cart[existingItemIndex].quantity + 1;

//     //             // existing item
//     //             const modifiedCart = currentCart.setIn([existingItemIndex, 'quantity'], newQuantity);
//     //             return modifiedCart;
//     //         } else {
//     //             // new item
//     //             return currentCart.concat({
//     //                 ...product,
//     //                 quantity: 1
//     //             })
//     //         }
//     //     })
//     // }

//     // const addToCart = (product) => {
//     //     setCart(currentCart => {
//     //         // find if the item already exists in the shopping item
//     //         const existingItemIndex = cart.findIndex(i => i.product_id === product.product_id);
//     //         if (existingItemIndex !== -1) {
//     //             let newQuantity = cart[existingItemIndex].quantity + 1;

//     //             // existing item
//     //             const modifiedCart = currentCart.setIn([existingItemIndex, 'quantity'], newQuantity);
                
//     //             // send the modified cart to our RESTFul API
//     //             updateCart(modifiedCart);
//     //             return modifiedCart;
//     //         } else {
//     //             // new item
//     //             const modifiedCart =  currentCart.concat({
//     //                 ...product,
//     //                 quantity: 1
//     //             })
//     //             updateCart(modifiedCart);
//     //             return modifiedCart;
                
//     //         }
//     //     })
//     // }

//     const addToCart = (product) => {
//         // Define the updater explicitly as a separate function variable
//         const updateFunc = (prevCart) => {
//           const updatedCart = produce(prevCart, (draft) => {
//             const existingItemIndex = draft.findIndex(
//               (item) => item.product_id === product.id
//             );
    
//             if (existingItemIndex !== -1) {
//               draft[existingItemIndex].quantity += 1;
//             } else {
//               draft.push({
//                 ...product,
//                 product_id: product.id,
//                 quantity: 1,
//               });
//             }
//           });
//           return updatedCart;
//         }
       
//         // Call the explicitly defined updater
//         setCart(updateFunc);
//       };

//     const modifyQuantity = (product_id, quantity) => {
//         // updating the atom in Jotai is asynchronous
//         setCart(currentCart => {

//             // 1. find the index of the cart item for the product_id
//             const existingItemIndex = currentCart.findIndex(i => i.product_id === product_id);

//             // 2. If the new quantity is more than 0, then we'll just update the new quantity
//             if (quantity > 0) {
//                 // .setIn will return a modified copy of the original array
//                 const modifiedCart = currentCart.setIn([existingItemIndex, "quantity"], quantity);
//                 updateCart(modifiedCart);
//                 return modifiedCart;
//             } else {
//                 // 3. If the new quantity is 0
//                 // const lhs = currentCart.slice(0,existingItemIndex-1);
//                 // const rhs = currentCart.slice(existingItemIndex+1);
//                 // return [...lhs, ...rhs];
//                 const modifiedCart = currentCart.filter(cartItem => cartItem.product_id != product_id);
//                 updateCart(modifiedCart);
//                 return modifiedCart;
//             }
//         })

//     }

//     const removeFromCart = (product_id) => {
//         setCart(currentCart => {
//             const modifiedCart = currentCart.filter(cartItem => cartItem.product_id != product_id);
//             updateCart(modifiedCart)
//             return modifiedCart;
//         });
        
//     }

//     const updateCart = async (updatedCart) => {
//         const jwt = getJwt();
//         setIsLoading(true);
//         try {
//             // .map  will generate the new array
//             // which will consist of the elements from the
//             // original array but transformed somehow
//             const updatedCartItems = updatedCart.map(item => ({
//                 product_id: item.product_id,
//                 quantity: item.quantity
//             })
//             );
//             await axios.put(import.meta.env.VITE_API_URL + '/api/cart', {
//                 cartItems: updatedCartItems
//             }, {
//                 headers: {
//                     Authorization: 'Bearer ' + jwt
//                 }
//             })

//         } catch (error) {
//             console.error("Error updating cart:", error);
//         } finally {
//             setIsLoading(false);
//         }
//     }

//     return {
//         cart,
//         getCartTotal,
//         addToCart,
//         fetchCart,
//         updateCart,
//         modifyQuantity,
//         removeFromCart,
//     };
// };

import { atom, useAtom } from 'jotai';
import { produce } from 'immer';

// the initial cart will be the starting value of our shopping cart
const initialCart = [
    {
        "id": 1,
        "product_id": 1,
        "quantity": 10,
        "productName": "Organic Green Tea",
        "price": 12.99,
        "imageUrl": "https://picsum.photos/id/225/300/200",
        "description": "Premium organic green tea leaves, rich in antioxidants and offering a smooth, refreshing taste."
    },
]

// create an atom for the shopping cart (atom == shared state)
const cartAtom = atom(initialCart);

// A custom hook
export const useCart = () => {
    const [cart, setCart] = useAtom(cartAtom);

    // Function to calculate the total price of items in the cart
    const getCartTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };


    const addToCart = (product) => {

        // the updateCartFunc will recieve the current shopping cart array
        // and return what should the new value of the shopping cart
        // later, this updatedCartFunc will be passed as the first parameter of setCart
        const updateCartFunc = (prevCart) => {


            // produce will call the recipe function for us (the 2nd parameter) and
            // it will pass prevCart to the draft
            const modifiedCart = produce(prevCart, (draft) => {

                // whatever changes is made to draft will be in the new version of the shopping cart

                // check if the product is already in the shopping cart
                const existingIndex = prevCart.findIndex(cartItem => cartItem.product_id === product.product_id);

                // -1 index means doesn't exist
                // so if the product is not in the shopping cart
                if (existingIndex === -1) {
                    draft.push(product); // add the product to the shopping cart
                } else {
                    // if the item is already in the shopping cart
                    draft[existingIndex].quantity += 1;
                }

                // only need to return draft if it is a primitive (i.e, not array or not object)
                //return draft;
           
            })

            // whatever is returned from the updateFuncFunction will be the new value of the shopping cart
            return modifiedCart;

        }

        // When setCart runs, it will automatically call updateCartFunc, and pass the current value of the cart 
        // as the first parameter to updateCartFunc
        setCart(updateCartFunc);
    }

    const modifyQuantity = (product_id, quantity) => {

        const updateCartFunc = (prevCart) => {
            const modifiedCart = produce(prevCart, (draft)=>{

                // find the index of the product that we are updating
                const existingIndex = prevCart.findIndex(cartItem => cartItem.product_id === product_id);

                if (existingIndex === -1) {
                    return;
                } else {

                    if (quantity > 0) {
                        draft[existingIndex].quantity = quantity;
                    } else {
                        draft.splice(existingIndex, 1);
                    }

                  
                }

            })

            return modifiedCart;
        }

        setCart(updateCartFunc);

    }

    const removeFromCart = (product_id) => {
        const updateCartFunc = (prevCart) => {

            // produce will call the recipe function (the arrow function in the second parameter)
            // and pass prevCart as draft, and whatever changes is made to draft, it will return as the new  value
            const modified = produce(prevCart, (draft)=>{
              
                // find the index of the product that we are updating
                const existingIndex = prevCart.findIndex(cartItem => cartItem.product_id === product_id);   

                if (existingIndex !== -1) {
                    draft.splice(existingIndex, 1);
                }

            })

            // because whatever updateCartFunc returns will be the new value for the atom
            return modified;

        }

        // when setCart is called, it will automatically call the function in its first parameter - in this case, updatedCartFunc
        // and it will pass the current value of the shopping cart to it
        setCart(updateCartFunc);
    }


    return {
        cart,
        getCartTotal,
        addToCart,
        modifyQuantity,
        removeFromCart
    }

}