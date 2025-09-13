import { cn } from "@/lib/utils";
import { generateAvatarUri } from "@/lib/avatar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  seed: string;
  className?: string;
  variant: "botttsNeutral" | "initials";
};

export const GeneratedAvatar = ({ seed, variant, className }: Props) => {
  const avatar = generateAvatarUri({ seed, variant });

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={avatar} alt="Avatar" />
      <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};
