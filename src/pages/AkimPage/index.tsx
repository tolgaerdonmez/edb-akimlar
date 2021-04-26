import "../../styles/pages/AkimPage.scss";

import { useParams } from "react-router-dom";

import { akimlar } from "../../data";
import { Content } from "./Content";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";
import { Akim } from "../../typings/akim";

interface Props {
  initialPage?: Akim;
}

interface Params {
  name: string;
}

export function AkimPage({ initialPage }: Props): React.ReactElement {
  const { name } = useParams<Params>();

  let currentAkim = akimlar.find((x) => x.name.toLowerCase() === name) || akimlar[0];
  if (initialPage && !name) currentAkim = initialPage;

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
