import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { akimlar } from "../../data";

interface Props {
  currentAkim: string;
  selectCb: any;
}

export function Sidebar({ currentAkim, selectCb }: Props): ReactElement {
  return (
    <div className="sidebar">
      {akimlar.map(({ name }) => (
        <>
          <div className="seperator"></div>
          <div>
            <Button
              className={`navigateButton 
								${currentAkim === name ? "navigateButtonSelected" : ""}`}
              // to={`/akimlar/${name.toLowerCase()}`}
              onClick={() => selectCb(name)}
            >
              {name}
            </Button>
          </div>
        </>
      ))}
    </div>
  );
}
