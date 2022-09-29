import { ButtonGradient } from "../Atom/ButtonGradient";
import { Ellipse } from "../Atom/Ellipse";

export const Main = () => {
  return (
    <main className="relative">
      <div className="absolute z-50 p-12">
        <h1 className="text-md  tracking-widest	">Chocolate Bars</h1>
        <h2 className="text-xl text-rose ">Delicious</h2>
        <ButtonGradient>
          <a
            href="#Product"
            className="btn block gradient-dark p-2.5 md:w-[140px]"
          >
            Shop Now
          </a>
        </ButtonGradient>
      </div>
      <div className="flex justify-end">
        <div className=" opacity-20 md:opacity-90 md:block relative z-20 mt-20">
          <Ellipse />
        </div>
        <img
          className="opacity-40 z-30 w-[500px]  md:opacity-90 md:w-[700px]"
          src="hero-bg.png"
          alt="Background image"
          width={500}
          height={500}
        />
      </div>
    </main>
  );
};
