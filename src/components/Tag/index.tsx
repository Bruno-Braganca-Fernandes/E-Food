import { TagText, TagLink } from "./style";
import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  variant?: "text" | "link";
  href?: string;
}

const Tag = ({ children, variant = "text", href }: Props) => {
  if (variant === "link") {
    return (
      <TagLink as={Link} to={href || "#"}>
        {children}
      </TagLink>
    );
  }

  return <TagText>{children}</TagText>;
};

export default Tag;
