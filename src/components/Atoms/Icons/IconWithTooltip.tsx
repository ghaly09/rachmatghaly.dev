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

export function IconWithTooltip({ icon, iconName, className }: propIcon) {
  //   console.log(iconName)

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className={className}>{React.createElement(eval(icon))}</span>
        </TooltipTrigger>
        <TooltipContent className="dark:bg-muted border-0 text-sm">
          <p>{iconName}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
