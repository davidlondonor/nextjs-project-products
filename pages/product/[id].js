import React from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
  const {
    query: { productId },
  } = useRouter();
  return <>Este es la pagina solo pro prueba de producto:{router.query.id}</>;
};

export default ProductItem;
