import { useRouter } from "next/router";

function ProductDetails() {
  const router = useRouter();
  const productId = router.query.productid;

  return <h1> Product Details {productId} </h1>;
}

export default ProductDetails;
