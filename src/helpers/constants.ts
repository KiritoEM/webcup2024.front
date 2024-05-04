import Landing from "../pages/Landing";
import { IaboutCard, INavList, IrouteList } from "../utils/interfaces";

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
};

const routeList: IrouteList[] = [
  {
    url: "/",
    component: Landing,
  },
];

const aboutData: IaboutCard[] = [
  {
    image: "/about-1.png",
    text: "about.soutien.text",
    subtitle: "about.soutien.subtitle",
    col_indice: "col-4",
    id: "soutien",
  },
  {
    image: "/about-2.png",
    text: "about.solution.text",
    subtitle: "about.solution.subtitle",
    col_indice: "col-8",
    id: "solution",
  },
  {
    image: "/about-3.png",
    text: "about.deliver.text",
    subtitle: "about.deliver.subtitle",
    col_indice: "col-8",
    id: "deliver"
  },
  {
    image: "/about-4.png",
    text: "about.message.text",
    subtitle: "about.message.subtitle",
    col_indice: "col-4",
    id: "message"
  },
];

export { navList, routeList, aboutData };
