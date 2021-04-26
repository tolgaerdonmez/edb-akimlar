import { Link } from "react-router-dom";

export function Kaynakca({ children }: any) {
  return <Link to="/kaynakca">{children}</Link>;
}

export function TargetBlank({ href, text }: { text?: string; href: string }) {
  return (
    <a href={href} target="_blank">
      {text || href}
    </a>
  );
}
