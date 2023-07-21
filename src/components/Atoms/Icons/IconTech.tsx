import * as React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/src/components/ui/tooltip";

interface propIcon {
  iconName: string;
  icon: string;
}

export function IconTech({ icon, iconName }: propIcon) {
  //   console.log(iconName)

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="bg-transparent px-[3px] text-[18px] text-gray-700 dark:text-white">
            {React.createElement(eval(icon))}
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>{iconName}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
