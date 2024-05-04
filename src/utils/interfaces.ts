/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, ReactNode } from "react";

interface INavList {
  navSection01: navItem[];
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

interface IrouteList {
  url: string;
  component: ComponentType<any>;
}

export type {
  INavList,
  navItem,
  INavContext,
  IDefaultNavContext,
  INavProvider,
  children,
  IrouteList,
};
