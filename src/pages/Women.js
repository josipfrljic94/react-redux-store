import React,{useEffect,useState,useCallback} from 'react'
import { connect } from 'react-redux';
import {getProducts} from "../actions/productsA";
import HomeCarousel from '../components/Carousel';
import { womanCarousel } from '../components/Carousel/data';
import Products from '../components/Products';


const Women = ({products,loading,getProducts}) => {

    const [filterproducts, setfilterproducts] = useState([]);

    const getAllProducts = useCallback(async() => {
         await getProducts();
        let allProducts = await products.filter(p=>p.gender==="women")
       await  setfilterproducts(allProducts)
    }, [getProducts,products])
   

    useEffect(() => {
    
      getAllProducts()
    
    }, [getAllProducts]); 
    return (
        <div>
            <HomeCarousel {...womanCarousel}/>
          
            {loading ? <h1 >Loading...</h1> :<Products products={filterproducts}/>}
            
        </div>
    )
}
const mapStateProps=(state)=>({
    products: state.products.products,
    loading: state.products.loading
    })

export default connect(mapStateProps,{getProducts})(Women)
