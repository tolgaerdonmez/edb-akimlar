import "../../styles/pages/MobileNav.scss";
import { akimlar } from "../../data";

import { useState } from "preact/hooks";
import { Button } from "../../components/Button";
import { Hamburger } from "../../components/icons/Hamburger";
import { Close } from "../../components/icons/Close";

interface Props {
  currentAkim: string;
}

export function MobileNav({ currentAkim }: Props): React.ReactElement {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {!visible ? (
        <Hamburger className="mobile-nav-btn" size={50} onClick={() => setVisible(true)} />
      ) : (
        <Close className="mobile-nav-btn" size={50} onClick={() => setVisible(false)} />
      )}
      <div className={`mobile-nav-container ${visible && "visible"}`}>
        <div>
          <Button className="navigateButton" to="/" onClick={() => setVisible(false)}>
            Ana Sayfa
          </Button>
        </div>
        {akimlar.map(({ name }, i) => (
          <div key={i}>
            <Button
              className={`navigateButton ${currentAkim === name ? "navigateButtonSelected" : ""}`}
              to={`/akimlar/${name.toLowerCase()}`}
              onClick={() => setVisible(false)}
            >
              {name}
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}
