import React from "react";
import { useRef } from "react";
import { useEffect,useState } from "react";
import { getProducts } from "./api";
import Pagination from "./Pagination";
import ProductList from "./ProductList";

function ProductPage() { 
  const [products,setProducts]=useState([]);
  const [page,setPage]=useState(1)
  const total = useRef(null);
  const sort = useRef("asc");
  
  const limit = useRef(5);

  const handleSort=(event)=>{
    sort.current = event.target.name;
        handleGetProduct(page,limit.current,sort.current);
  }
  useEffect(()=>{
    handleGetProduct(page,limit.current,sort.current);
    // console.log("run successfully")
  },[page,sort]);
  const handleOnchange=(event)=>{
   limit.current =+event.target.value;
    handleGetProduct(page,limit.current,sort.current);
  }
  const  handleGetProduct=(page,limit,sort)=>{
    getProducts(page,limit,sort).then((res)=>{
      const {data,totalPages} = res;
      // console.log(data,totalPages);
      setProducts(data);
      total.current=totalPages;
    })
  };
  const handlePage=(newpage)=>{
      setPage(newpage);
      
  };

  

  return (
    <div>
      <h1 data-testid="product-page-title">Product Page</h1>
      <button data-testid="low-to-high" disabled={sort.current==="asc"}  name="asc" onClick={handleSort}>Sort low to high</button>
      <button data-testid="high-to-low" disabled={sort.current==="desc"} name="desc" onClick={handleSort}>Sort high to low</button>
      <div>
        <label>Per page</label>
        <select data-testid="limit-select" onChange={handleOnchange}>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
      <Pagination page={page}  total={total.current} handlePage={handlePage}/>
      {/* map products */}
      <ProductList products={products} />
      
    </div>
  );
}

export default ProductPage;
