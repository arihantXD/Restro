import { Cat, PawPrint } from "lucide-react";

const Logo = () => {
  return (
    <div className="text-lg font-medium flex items-center relative">
      Restro
      <Cat
        className="text-pink-600 -top-[5px] -left-[5px] -rotate-12 absolute"
        size={12}
      />
      <PawPrint
        className="text-pink-600 bottom-[1px] -right-[8px] rotate-[90deg] absolute"
        size={10}
      />
    </div>
  );
};

export default Logo;
