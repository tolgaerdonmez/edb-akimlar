import "../../styles/pages/AkimPage.scss";

import { useParams } from "react-router-dom";

import { akimlar } from "../../data";
import { Content } from "./Content";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";

interface Params {
  name: string;
}

export function AkimPage(): React.ReactElement {
  const { name } = useParams<Params>();
  const currentAkim = akimlar.find((x) => x.name.toLowerCase() === name) || akimlar[0];
  return (
    <>
      <MobileNav currentAkim={currentAkim.name} />
      <div className="akimPageContainer">
        <Sidebar currentAkim={currentAkim.name} />
        <Content {...currentAkim} />
      </div>
    </>
  );
}
