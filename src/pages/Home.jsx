import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";


const Home = () => {

  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading] = useState(false);
  const [products,setProducts] = useState([]);
 

  async function fetchProductsData()
  {
      setLoading(true);
      try
      {
        const response = await fetch(API_URL);
        const data = await response.json();
        setProducts(data);

      }catch(err)
      {
        alert("API ERROR ! ");
        setProducts([]);
      }

      setLoading(false);
  } 

  useEffect(()=>{
    fetchProductsData();
  },[])

  return(
    <div className="mt-10 grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
      {
        loading ? (<Spinner/>) :
        (
          products.length > 0 ? 
          (
            products.map((product)=>(
              <Product product={product} key={product.id}/>
            ))

          ) : (<div>No Data Found</div>)       
        )
      }
    </div>
  );
  
};

export default Home;
