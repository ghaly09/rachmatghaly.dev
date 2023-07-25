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
  className: string;
}

export function IconTech({ icon, iconName, className }: propIcon) {
  //   console.log(iconName)

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className={className}>{React.createElement(eval(icon))}</span>
        </TooltipTrigger>
        <TooltipContent>
          <p>{iconName}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
