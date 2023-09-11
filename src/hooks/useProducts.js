import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://aurna-watch-api-server.onrender.com/services")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // return necessary items
  return [products];
};

export default useProducts;
