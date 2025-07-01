import React from 'react'
import { useLocation } from 'react-router-dom';

function SinglePageProduct() {
    const location = useLocation();
    console.log(location,"location")
  return (
    <div>SinglePageProduct</div>
  )
}

export default SinglePageProduct;