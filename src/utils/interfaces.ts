interface InavList {
  navSection01: navItem[];
  navSection02: navItem[];
}

type navItem = {
  key: string;
  sectionId?: string;
};

export type { InavList, navItem };
