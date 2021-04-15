import "../styles/components/Avatar.scss";

interface IProps {
  title?: string;
  shape?: "round" | "rect";
}

type Props = React.HTMLProps<HTMLImageElement> & IProps;

export function Avatar({ src, title, alt, onClick, shape }: Props): React.ReactElement {
  return (
    <div className={`avatarContainer ${onClick ? "avatarSelectable" : ""} ${shape || "round"}`} onClick={onClick}>
      <div>
        <img src={src} alt={title || alt} />
      </div>
      {title ? <p className="title">{title}</p> : null}
    </div>
  );
}
