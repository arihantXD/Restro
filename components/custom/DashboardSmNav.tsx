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
  return (
    <div className="px-3 py-1 flex justify-between items-center border-b border-1">
      <div>
        <Logo />
      </div>
      <div className="flex gap-3">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="link">AK</Button>
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
