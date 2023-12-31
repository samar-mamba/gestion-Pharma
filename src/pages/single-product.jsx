import {useParams} from "react-router-dom";
import ProductService from "../models/services/productService.js";
import ProductPreview from "../componens/product-preview/product-preview.jsx";


function SingleProduct() {
    const {id} = useParams();
    const data = ProductService.getProducts();
    const product = data.find((product) => product.id === id);

    return (
        <>
        <ProductPreview product={product} seeMore={true}> </ProductPreview>
        </>
    );

};
export default SingleProduct;