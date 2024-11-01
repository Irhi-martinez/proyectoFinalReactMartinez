import { Box } from "@chakra-ui/react";
import {NavBar} from "../components/NavBar/NavBar";
import { children } from "react";


export const MainLayouts = ({children}) => {
    return (
        <Box>
            {children}
        </Box>
    );
};