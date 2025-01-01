import {ReactNode} from 'react';

export type SidebarRoutes = {
  name: string;
  to: string;
  icon: ReactNode;
  badge?: number;
};

type TSubRoutes = Omit<SidebarRoutes, 'icon'>;

export type NavigationTypes = SidebarRoutes & {
  subRoutes: TSubRoutes[];
};
