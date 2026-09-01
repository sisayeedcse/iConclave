import { MessageSquareCode, Timer, Bot, Presentation, RobotArm } from "lucide-react";

interface CompetitionIconProps {
  slug: string;
  className?: string;
  size?: number;
}

export function CompetitionIcon({ slug, className, size = 16 }: CompetitionIconProps) {
  switch (slug) {
    case "promptwar":
      return <MessageSquareCode size={size} className={className} />;
    case "three-minutes-thesis":
      return <Timer size={size} className={className} />;
    case "robo-soccer":
      return <Bot size={size} className={className} />;
    case "poster-presentation":
      return <Presentation size={size} className={className} />;
    case "project-showcasing":
      return <RobotArm size={size} className={className} />;
    default:
      return <Bot size={size} className={className} />;
  }
}
