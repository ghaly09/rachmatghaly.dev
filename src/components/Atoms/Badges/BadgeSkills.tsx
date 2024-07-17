import { Badge } from "@/src/components/ui/badge";
import { aboutTypes } from "@/src/config/about-config";

interface propType {
  skill: string;
}

export function BadgeSkills({ skill }: propType) {
  return (
    <Badge variant="secondary" className="text-[10px] cursor-default">
      {skill}
    </Badge>
  );
}
