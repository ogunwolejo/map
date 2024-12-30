import { FC, memo } from "react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible.tsx";
import { NavigationTypes } from "@/types/app-navigation.types.ts";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

export const NonCollapsibleSideBarItems: FC<NavigationTypes> = memo(
  ({ name, to, icon }) => {
    return (
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="!hover:bg-[#E3EAFB]" /*data-[state=open]:hover:bg-sidebar-accent*/
              >
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "text-grey"
                  }
                >
                  {icon}
                  <span className="font-semibold">{name}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    );
  },
);

type Props = {
  isCollapse: boolean;
} & NavigationTypes;
export const CollapsibleSideBarItems: FC<Props> = memo(
  ({ name, subRoutes, isCollapse, icon }) => {
    return (
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <Collapsible defaultOpen className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="!hover:bg-[#E3EAFB]">
                    {!isCollapse ? (
                      <>
                        {icon}
                        <span className="font-semibold">{name}</span>
                      </>
                    ) : (
                      <span className=" text-xs font-semibold">{name}</span>
                    )}

                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  {!subRoutes.length
                    ? null
                    : subRoutes.map((sbr, idx) => (
                        <SidebarMenuSub key={`${sbr.name}-${idx}`}>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton
                              asChild
                              className="!hover:bg-[#E3EAFB]"
                            >
                              <NavLink
                                to={sbr.to}
                                className={({ isActive }) =>
                                  isActive ? "text-primary" : "text-grey"
                                }
                              >
                                <span className="font-semibold">
                                  {sbr.name}
                                </span>
                              </NavLink>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      ))}
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    );
  },
);
