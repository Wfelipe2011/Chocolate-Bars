export const Header = () => {
  return (
    <header className="flex items-center justify-between w-full">
      <span className="mx-8 text-sm gradient-logo w-1/2 md:text-[36px]" >Dark Delicious</span>
      <ul className="w-full p-4 text-sm flex gap-4 justify-around  md:max-w-[300px]">
        <li className="">
          <a id="home" className="hover:text-primary " href="#">Home</a>
        </li>  
        <li>
          <a id="product" className="hover:text-primary"  href="#Product">Product</a>
        </li>
        <li>
          <a id="contact" className="hover:text-primary"  href="#Contact">Contact</a>
        </li>
      </ul>
    </header>
  );
};
