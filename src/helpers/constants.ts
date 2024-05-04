import Landing from "../pages/Landing";
import { INavList, IrouteList } from "../utils/interfaces";

const navList: INavList = {
  navSection01: [
    {
      key: "nav01.home",
      sectionId: "home",
    },
    {
      key: "nav01.about",
      sectionId: "about",
    },
    {
      key: "nav01.showcase",
      sectionId: "showcase",
    },
  ],
  navSection02: [
    {
      key: "nav02.FAQ",
    },
    {
      key: "nav02.button",
    },
  ],
};

const routeList: IrouteList[] = [
  {
    url: "/",
    component: Landing,
  },
];

export { navList, routeList };
