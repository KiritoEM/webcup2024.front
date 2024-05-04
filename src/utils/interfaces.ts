import { ReactNode } from "react";

interface INavList {
  navSection01: navItem[];
  navSection02: navItem[];
}

type navItem = {
  key: string;
  sectionId?: string;
};

interface INavContext {
  openMenu: boolean;
  openOverlay: boolean;
  menuToogle: () => void;
  changeNav: (state: boolean) => void;
}

interface IDefaultNavContext {
  openMenu: false;
  openOverlay: false;
  menuToogle: () => null;
  changeNav: (state: boolean) => null;
}

interface INavProvider {
  children?: ReactNode;
}

type children = {
  children: ReactNode;
};

export type {
  INavList,
  navItem,
  INavContext,
  IDefaultNavContext,
  INavProvider,
  children,
};
