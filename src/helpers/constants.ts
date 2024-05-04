import Landing from "../pages/Landing";
import {
  IaboutCard,
  IangelCard,
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

const angelData: IangelCard[] = [
  {
    description: "angel.ange1.name",
    image: "/angel1.png",
    name: "Cupidon",
  },
  {
    description: "angel.ange2.name",
    image: "/angel2.png",
    name: "Aria",
  },
  {
    description: "angel.ange3.name",
    image: "/angel3.png",
    name: "Gabriel",
  },
  {
    description: "angel.ange4.name",
    image: "/angel4.png",
    name: "Sariel",
  },
  {
    description: "angel.ange5.name",
    image: "/angel5.png",
    name: "Michael",
  },
  {
    description: "angel.ange6.name",
    image: "/angel6.png",
    name: "Lumielle",
  },
];

export { navList, routeList, aboutData, tarifData, angelData };
