import React,{useState,useEffect,useCallback} from 'react';
import HomeCarousel from '../components/Carousel';
import { menCarousel } from '../components/Carousel/data';
import {connect} from "react-redux";
import Products from '../components/Products';
import {getProducts} from "../actions/productsA"

const Men = ({products,loading,getProducts}) => {

    const [filterproducts, setfilterproducts] = useState([]);
   
    const getAllProducts = useCallback(async() => {
         await getProducts();
            let allProducts = await products.filter(p=>p.gender==="men");
         
       await setfilterproducts(allProducts)
    }, [getProducts,products])
   

    useEffect(() => {
    
      getAllProducts()
    
    }, [getAllProducts]); 
    return (
        <div>
        <HomeCarousel {...menCarousel}/>
        {loading ? <h1 >Loading...</h1> :<Products products={filterproducts}/>}
        </div>
    )
}

const mapStateToProps=(state)=>({
    products: state.products.products,
    loading: state.products.loading
})
export default connect(mapStateToProps,{getProducts})(Men)
