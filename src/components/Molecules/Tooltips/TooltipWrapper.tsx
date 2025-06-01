import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";

interface TooltipWrapperProps {
  children?: React.ReactNode;
  title?: string;
}

export default function TooltipWrapper({
  children,
  title,
}: TooltipWrapperProps) {
  return (
    <Tooltip>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent>
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  );
}
