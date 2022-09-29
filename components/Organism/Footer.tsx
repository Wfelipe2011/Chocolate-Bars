export const Footer = () => {
  return (
    <footer id="Contact" className="  p-4 pb-28">
      <div className=" flex  justify-between border-t border-gray-400">
        <div className="flex flex-col  p-8 px-4  gap-4 ">
        <h4 className="font-poppins text-[16px]">Contact</h4>
        <a
          className="flex items-center gap-2"
          href="mailto:wfelipe2011@gmail.com"
          target="_blanck"
        >
          <img width={20} src="icons/gmail.png" alt="gmail wilson" />
          <span className="text-sm font-poppins text-[14px] text-gray-400">
            {" "}
            Email
          </span>
        </a>
        <a
          className="flex items-center gap-2"
          href="https://www.linkedin.com/in/wilson-felipe-725538176/"
          target="_blanck"
        >
          <img className="bg-gray-100 rounded-sm" width={20} src="icons/linkedin.png" alt="gmail wilson" />
          <span className="text-sm font-poppins text-[14px] text-gray-400">
            Linkedin{" "}
          </span>
        </a>
        <a
          className="flex items-center gap-2"
          href="https://github.com/Wfelipe2011"
          target="_blanck"
        >
          <img className="bg-gray-100 rounded-sm" width={25} src="icons/Octocat.png" alt="gmail wilson" />
          <span className="text-sm font-poppins text-[14px] text-gray-400">
            {" "}
            Github
          </span>
        </a>
        </div>
        <div className="flex flex-col  p-8 px-4  gap-4 ">
        <h4 className="font-poppins text-[16px]">Desing</h4>
        <a
          className="flex items-center gap-2"
          href="https://www.figma.com/community/file/1076612207781052174"
          target="_blanck"
        >
          <img width={20} src="icons/figma.png" alt="gmail wilson" />
          <span className="text-sm font-poppins text-[14px] text-gray-400">
            {" "}
            Design inspiration
          </span>
        </a>
   </div>
      </div>
    </footer>
  );
};
