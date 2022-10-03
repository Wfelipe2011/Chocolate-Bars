/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { config } from "../../config";
import { ButtonGradient } from "../Atom/ButtonGradient";
import { Ellipse } from "../Atom/Ellipse";
import { Heart } from "../Atom/Heart";
import { HeartFull } from "../Atom/HeartFull";
import { ListProductProps } from "./ListProduct";

interface ProductProps  {
  product: ListProductProps;
  toggleFavorite: (id: string) => void
}

export const Product = ({product, toggleFavorite}: ProductProps) => {
  const { id, name, salePrice, listPrice, imageUrl,isFavorite } = product;

  const buyNow = () => {
    alert(
      JSON.stringify(
        { id, name, salePrice, listPrice, imageUrl, isFavorite },
        null,
        2
      )
    );
  };
  return (
    <div className="relative flex flex-col gap-6 p-12 max-w-[500px]">
      <div className="flex justify-center relative">
        <div className="opacity-20 md:opacity-90 md:block relative z-20 ">
          <Ellipse className="w-[200px] h-[200px]" />
        </div>
        <Image
          className="z-30 w-[500px]  md:opacity-90 md:w-[700px] md:h-[400px]"
          src={`${config.api}/${imageUrl}`}
          alt={`Product ${name}`}
          width={600}
          height={500}
        />
        {isFavorite ? (
          <button className="absolute m-5 left-0 z-30" onClick={() => toggleFavorite(id)}>
            <HeartFull />
          </button>
        ) : (
          <button className="absolute m-5 left-0 z-30" onClick={() => toggleFavorite(id)}>
            <Heart />
          </button>
        )}
      </div>

      <div>
        <span className="text-md m-4">{name}</span>
        <div className="flex justify-between items-center">
          <div className="flex gap-4 p-4 items-center">
            <span className="text-md">${salePrice}</span>
            <span className="text-sm line-through text-gray-400">
              ${listPrice}
            </span>
          </div>
          <ButtonGradient onClick={buyNow}>
            <span className="btn block gradient-light w-[120px]  p-2.5">
              Buy Now
            </span>
          </ButtonGradient>
        </div>
      </div>
    </div>
  );
};
