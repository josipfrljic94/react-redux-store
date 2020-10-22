import React,{useEffect,useState,useCallback} from 'react'
import { connect } from 'react-redux';
import {getProducts} from "../actions/products_a";
import HomeCarousel from '../components/Carousel';
import Products from '../components/Products';


const Women = ({products,loading,getProducts}) => {

    const [allproducts, setallproducts] = useState([]);

    const getAllProducts = useCallback(async() => {
         await getProducts()
       await  setallproducts(products)
    }, [getProducts,products])
   

    useEffect(() => {
    
      getAllProducts()
    
    }, [getAllProducts]); 
    return (
        <div>
            <HomeCarousel/>
          
            {loading ? <h1 >Loading...</h1> :<Products products={allproducts}/>}
            
        </div>
    )
}
const mapStateProps=(state)=>({
    products: state.products.products,
    loading: state.products.loading
    })

export default connect(mapStateProps,{getProducts})(Women)
