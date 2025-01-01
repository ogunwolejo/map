import {JSX, useMemo} from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import {NavigationTypes} from '@/types/app-navigation.types.ts';
import Profile from '@/core/profile.tsx';
import {
  CollapsibleSideBarItems,
  NonCollapsibleSideBarItems,
} from '@/core/app-sidebar/app.sidebar-items';
import MapLogo from '/logo.svg';
import {useLocation} from 'react-router-dom';

const AppSidebar = ({
  navigation,
}: {
  navigation: NavigationTypes[];
}): JSX.Element => {
  const {state} = useSidebar();
  const isCollapse = useMemo(() => state === 'collapsed', [state]);
  const location = useLocation();
  return (
    <Sidebar variant="sidebar" collapsible="icon" className="bg-background">
      {/** The start of the sidebar header **/}
      <SidebarHeader>
        <img alt="logo" src={MapLogo} />
      </SidebarHeader>
      {/** The end of the sidebar header **/}

      {/** The start of the sidebar content **/}
      <SidebarContent className="mt-3 lg:mt-5">
        {navigation.map((sn, idx) => {
          const hasSubRoutes = Boolean(sn.subRoutes.length);
          const isActive: boolean = Boolean(location.pathname === sn.to);
          // const isActiveSub: boolean = !sn.subRoutes.length
          //   ? false
          //   : Boolean(sn.subRoutes.filter((f) => f.to === sn.to));

          if (hasSubRoutes) {
            return (
              <div key={idx}>
                <CollapsibleSideBarItems
                  isCollapse={isCollapse}
                  to={sn.to}
                  icon={sn.icon}
                  name={sn.name}
                  subRoutes={sn.subRoutes}
                  isActive={isActive}
                  //isActiveSub={isActiveSub}
                />
              </div>
            );
          } else {
            return (
              <div key={idx}>
                <NonCollapsibleSideBarItems
                  to={sn.to}
                  icon={sn.icon}
                  name={sn.name}
                  subRoutes={sn.subRoutes}
                  isActive={isActive}
                />
              </div>
            );
          }
        })}
      </SidebarContent>
      {/** The end of the sidebar content **/}

      {/** The start of the sidebar footer **/}
      <SidebarFooter className="cursor-pointer">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex justify-start gap-3 items-center">
              <Profile name="Mark Benson" size="lg" />
              <div className="flex flex-col justify-start items-start">
                <h6
                  className={`${isCollapse && 'hidden'} font-semibold text-sm lg:text-md capitalize`}
                >
                  Mark Benson
                </h6>
                <p
                  className={`${isCollapse && 'hidden'} font-regular text-sm lg:text-md`}
                >
                  markbenson@coremed.com
                </p>
              </div>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      {/** The start of the sidebar footer **/}
    </Sidebar>
  );
};

export default AppSidebar;
