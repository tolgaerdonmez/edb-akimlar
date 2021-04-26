import { useState } from "preact/hooks";
import "../styles/components/Avatar.scss";

interface IProps {
  title?: string;
  shape?: "round" | "rect";
  fallbackSrc?: string;
}

type Props = React.HTMLProps<HTMLImageElement> & IProps;

export function Avatar({ src, title, alt, onClick, shape, fallbackSrc, ...props }: Props): React.ReactElement {
  const [error, setError] = useState(false);
  return (
    <div
      className={`avatarContainer ${onClick ? "avatarSelectable" : ""}  ${!error ? shape || "round" : "round"}`}
      onClick={onClick}
    >
      <div>
        <img src={!error ? src : fallbackSrc} alt={title || alt} onError={() => setError(true)} {...(props as any)} />
      </div>
      {title ? <p className="title">{title}</p> : null}
    </div>
  );
}
