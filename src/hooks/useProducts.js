import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-citadel-17218.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // return necessary items 
    return [products];
}

export default useProducts;