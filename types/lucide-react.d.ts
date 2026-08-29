declare module "lucide-react" {
  import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

  export type LucideProps = SVGProps<SVGSVGElement> & {
    size?: string | number;
    absoluteStrokeWidth?: boolean;
  };

  export type LucideIcon = ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;

  export const ArrowDown: LucideIcon;
  export const ArrowUp: LucideIcon;
  export const BriefcaseBusiness: LucideIcon;
  export const Clock3: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const FileText: LucideIcon;
  export const FolderGit2: LucideIcon;
  export const Github: LucideIcon;
  export const Home: LucideIcon;
  export const Images: LucideIcon;
  export const Instagram: LucideIcon;
  export const Linkedin: LucideIcon;
  export const Mail: LucideIcon;
  export const MessageCircle: LucideIcon;
  export const Moon: LucideIcon;
  export const Quote: LucideIcon;
  export const Send: LucideIcon;
  export const Sun: LucideIcon;
  export const UserRound: LucideIcon;
}
