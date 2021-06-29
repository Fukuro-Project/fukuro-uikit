import React from "react";
import { DefaultTheme } from "styled-components";
import { TopMenuProps } from "../types";
export interface Props extends TopMenuProps {
    secondary?: boolean;
    isActive?: boolean;
    theme: DefaultTheme;
    isPushed: boolean;
    isMobile: boolean;
}
declare const TopMenu: React.FC<TopMenuProps>;
export default TopMenu;
