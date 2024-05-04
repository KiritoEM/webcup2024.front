import Landing from "../pages/Landing";
import { IaboutCard, IfooterNav, INavList, IrouteList } from "../utils/interfaces";

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

const footerNav: IfooterNav[] = [
  {
    title: "footer.navigation.text",
    links: [
      "footer.navigation.home",
      "footer.navigation.about",
      "footer.navigation.showcase",
      "footer.navigation.faq",
    ]
  },
  {
    title: "footer.team.text",
    links: [
      "footer.team.sedra",
      "footer.team.fana",
      "footer.team.ema",
      "footer.team.junot",
    ]
  },
  {
    title: "footer.legal.text",
    links: [
      "footer.legal.general",
      "footer.legal.mention",
      "footer.legal.condition",
    ]
  },
  {
    title: "footer.contact.text",
    links: [
      "footer.contact.email",
      "footer.contact.phone",
      "footer.contact.nothing",
      "footer.contact.facebook",
      "footer.contact.linkedin",
      "footer.contact.tweet"
    ]
  }
]

export { navList, routeList, aboutData, footerNav };
