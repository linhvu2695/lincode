import React from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from "@chakra-ui/react";
import { IoMenu, IoCutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FEATURES } from "../../data/Features";

function NavMenu() {
    const navigate = useNavigate();
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<IoMenu />}
                variant="outline"
            />
            <MenuList title="Features">
                {FEATURES.map((feature) => (
                    <MenuItem
                        icon={<IoCutOutline />}
                        onClick={() => navigate(feature.page_url)}
                    >
                        {feature.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}

export default NavMenu;
