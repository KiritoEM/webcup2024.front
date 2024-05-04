import Landing from "../pages/Landing";
import {
  IaboutCard,
  INavList,
  IrouteList,
  ItarifCard,
} from "../utils/interfaces";

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
  },
  {
    image: "/about-4.png",
    text: "about.message.text",
    subtitle: "about.message.subtitle",
    col_indice: "col-4",
  },
];

const tarifData: ItarifCard[] = [
  {
    price: 20,
    subtitle: "tarif.essential.subtitle",
    text: "tarif.essential.text",
    engagement: "tarif.essential.engagement",
    button: "tarif.essential.button",
  },
  {
    price: 50,
    subtitle: "tarif.pro.subtitle",
    text: "tarif.pro.text",
    engagement: "tarif.pro.engagement",
    button: "tarif.pro.button",
    id: "pro",
  },
  {
    price: 50,
    subtitle: "tarif.premium.subtitle",
    text: "tarif.premium.text",
    engagement: "tarif.premium.engagement",
    button: "tarif.premium.button",
    id: "premium",
  },
];

export { navList, routeList, aboutData, tarifData };
