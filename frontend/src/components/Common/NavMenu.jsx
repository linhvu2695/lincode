import React from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from "@chakra-ui/react";
import { IoCutOutline, IoFlag, IoLogoBitcoin, IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FEATURES } from "../../data/Features";

const FEATURE_ICON_MAP = {
    "Crypto": <IoLogoBitcoin/>,
    "Country": <IoFlag/>,
    "RemoveBackground": <IoCutOutline/>
};

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
                {FEATURES.map((feature, index) => (
                    <MenuItem
                        key={index}
                        icon={FEATURE_ICON_MAP[feature.name]}
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
