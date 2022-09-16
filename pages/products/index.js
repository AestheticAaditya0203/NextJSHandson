import Link from "next/link";

function ProductList({ productid = 100 }) {
  return (
    <div>
      <Link href="/">
        <a>Products Home Page</a>
      </Link>
      <ul>
        <Link href="./products/1">
          <a>
            <li>Product 1</li>
          </a>
        </Link>
        <Link href="./products/2">
          <a>
            <li>Product 2</li>
          </a>
        </Link>
        <Link href="./products/3" replace>
          <a>
            <li>Product 3</li>
          </a>
        </Link>
        <Link href={`./products/${productid}`}>
          <a>
            <li>Product {productid}</li>
          </a>
        </Link>
      </ul>
    </div>
  );
}

export default ProductList;
