import { TagText, TagLink } from "./style";

interface Props {
  children: React.ReactNode;
  variant?: "text" | "link";
  href?: string;
}

const Tag = ({ children, variant = "text", href }: Props) => {
  if (variant === "link") {
    return <TagLink href={href}>{children}</TagLink>;
  }

  return <TagText>{children}</TagText>;
};

export default Tag;
