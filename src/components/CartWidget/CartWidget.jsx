import { BsMinecart } from "react-icons/bs";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context";
import { HStack, Text, Icon } from "@chakra-ui/react";

export const CartWidget = () => {
    const { cartState } = useContext(CartContext);
    const qtyTotalItems = cartState.reduce((acc, item) => acc + item.qtyItem, 0);

    return (
        <HStack spacing={5} alignItems="center">
            <Icon as={BsMinecart} boxSize={6} color="red"/>
            <Link to="/checkout">
                <Text fontSize="1.5rem">{qtyTotalItems}</Text>
            </Link>
        </HStack>
    );
};
