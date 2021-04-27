import { Link } from "react-router-dom";
import { GithubIcon } from "../components/icons/Github";

export function Kaynakca({ children }: any) {
  return <Link to="/kaynakca">{children}</Link>;
}

export function A({ target = "_blank", children, ...props }: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <a target={target} {...props}>
      {children || props.href}
    </a>
  );
}

export function GithubSource() {
  return (
    <p id="githubSource">
      <a target="_blank" href="https://github.com/tolgaerdonmez/edb-akimlar">
        Bu websitenin kaynak koduna buradan ulaşabilirsiniz <GithubIcon fill="white" size={48} />
      </a>
    </p>
  );
}
