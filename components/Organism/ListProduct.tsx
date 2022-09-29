import { useState } from "react";
import { IProduct } from "../../interface/IProduct";
import { Product } from "./Product";

export interface ListProductProps extends IProduct {
  isFavorite: boolean;
}
interface Props  extends React.HTMLAttributes<HTMLDivElement> {
  products: ListProductProps[];
}

const ListProduct = (props: Props) => {
  const [products, setProducts] = useState<ListProductProps[]>(props?.products);

  const toggleFavorite = (id: any) => {
    const index = products.findIndex((item) => item.id === id);
    products[index].isFavorite = !products[index].isFavorite;
    const newList = [...products];
    setProducts(newList);
  };

  return (
    <div className="w-max md:w-full">
      {products.length ? (
        <h3 id="Product" className="text-lg my-12 px-8">
        Products
      </h3>
      ):""}
      <div className="flex flex-col justify-center md:flex-wrap md:flex-row">
        {products.map((product) => (
          <Product
            key={product.id}
            {...product}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

 

export default ListProduct;