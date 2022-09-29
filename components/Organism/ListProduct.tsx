import { useEffect, useState } from "react";
import { config } from "../../config";
import { IProduct } from "../../interface/IProduct";
import { Product } from "./Product";

export interface ListProductProps extends IProduct {
  isFavorite: boolean;
}

export const ListProduct = () => {
  const [products, setProducts] = useState<ListProductProps[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const toggleFavorite = (id: any) => {
    const index = products.findIndex((item) => item.id === id);
    products[index].isFavorite = !products[index].isFavorite;
    const newList = [...products];
    setProducts(newList);
  };

  const fetchData = async () => {
    const data = await fetch(`${config.api}/api/products`);
    const products = await data.json();
    const mapperProducts = products.map((product: any) => {
      return {
        ...product,
        isFavorite: false,
      };
    });
    setProducts(mapperProducts);
  };

  return (
    <div>
      <h3 id="Product" className="text-lg my-12 px-8">
        Products
      </h3>
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
