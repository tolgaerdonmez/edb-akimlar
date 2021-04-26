import { Button } from "../../components/Button";
import { akimlar } from "../../data";

interface Props {
  currentAkim: string;
}

export function Sidebar({ currentAkim }: Props): React.ReactElement {
  return (
    <div className="sidebar">
      {akimlar.map(({ name }, i) => (
        <div key={i}>
          <Button
            className={`navigateButton ${currentAkim === name ? "navigateButtonSelected" : ""}`}
            to={`/akimlar/${name.toLowerCase()}`}
          >
            {name}
          </Button>
        </div>
      ))}
    </div>
  );
}
