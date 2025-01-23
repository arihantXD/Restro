import { Store, PackageOpen, HandPlatter } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";
import Logo from "./Logo";

const DashboardSmNav = () => {
  const icons = [
    {
      icon: Store,
      text: "My Restaurant",
    },
    {
      icon: PackageOpen,
      text: "Products",
    },
    {
      icon: HandPlatter,
      text: "Orders",
    },
  ];
  return (
    <div className="mt-2 px-3 flex justify-between items-center w-screen">
      <div>
        <Logo />
      </div>
      <div className="flex gap-3">
        <TooltipProvider>
          {icons.map((icon) => {
            return (
              <Tooltip key={icon.text}>
                <TooltipTrigger asChild>
                  <Button variant="secondary">{<icon.icon />}</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{icon.text}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">AK</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Profile</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default DashboardSmNav;
