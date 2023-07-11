import {useState, createContext, useEffect} from 'react'
import Cart from '../pages/Cart/Cart'

//use hook to create context
export const CartContext = createContext()

export default function CartContextProvider(props){
    //create global state
    const [cart, setCart] = useState([])

    
    useEffect(
        ()=>{
            //check localstorage for initial value
            const storedProducts = localStorage.getItem('productsList')
            //check if something is there
            if (storedProducts){
                //use this value to initialize state
                setCart(JSON.parse(storedProducts))
            }

        }, [] //run once when component loads
    )
    

    useEffect(
        ()=>{
            //save current state to localStorage when favorites changes
            localStorage.setItem('productsList', JSON.stringify(cart))

        }, [cart] //run once when component loads
    )


   const addProduct = (prodToAdd) => {
    console.log('adding', prodToAdd)
    //add prodToAdd to products
    let newCart = [...cart, prodToAdd]
    console.log(newCart)
    //replace state
    setCart(newCart)
   }

   const removeProduct = (prodId) =>{
    console.log('remove id', prodId)
    //remove this object from favorites
    let newCart = cart.filter(item => item.id != prodId)
    setCart(newCart)

   }

    return(
        <CartContext.Provider value={{ cart, addProduct, removeProduct}}>
            {props.children}
        </CartContext.Provider>
    )
}