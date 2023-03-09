import axios from "axios"
import { createContext, useContext, useEffect, useReducer, useState } from "react"
import reducer from "./reducer"


const StateContext = createContext();

export const StateContextProvider = ({children}) => {
    const initialState = {
        products:[],
        cart:[]
    }
    const [quantity,setQuantity] = useState()
    const [products,setProducts] = useState([]);
    const [search,setSearch] = useState('');
    const getProduct = async () => {
        const {data} =await axios.get('https://fakestoreapi.com/products')
        setProducts(data)
    }
    useEffect(() => {
        getProduct();
    },[])

    useEffect(() =>  {
        dispatch({type:'GET_PRODUCTS',payload:products});
        const filtered = products?.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
        dispatch({type:'GET_PRODUCTS',payload:filtered})
    },[products,search])

    const [state,dispatch] = useReducer(reducer,initialState)

    const data = {state,dispatch,setSearch,search,quantity,setQuantity}

    return (
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
};

export const useStateContext = () => useContext(StateContext)