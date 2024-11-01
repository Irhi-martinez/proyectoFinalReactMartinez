import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { CartWidget } from '../CartWidget/CartWidget';
import {useItemsCollection} from '../../hooks';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context';

export const NavBar = ({ cartCount }) => { 
  const { colorMode, toggleColorMode } = useColorMode(); 
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { itemsData } = useItemsCollection ("categories");

  return (
    <Box bg={useColorModeValue('orange.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      <Link to="/">
          <Box as={Button} cursor="pointer" fontSize="2xl" fontWeight="bold" bg="red.500" color="orange">Logo</Box>
        </Link>
        
        <Menu>
          <MenuButton as={Button} cursor="pointer" bg="red.500" color="orange" fontSize="2xl" style={{ marginLeft: 30 }}>
            Categorías
          </MenuButton>
          <MenuList height={"3fit-content"} overflowY={"scroll"}>
            {itemsData.map((category) => (
              <MenuItem key={category.slug}>
                <Link to={`/category/${category.slug}`}>{category.name}</Link>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>

        <Flex alignItems={"center"}>
          <Link to="/CartContex">
            <CartWidget cartCount={cartCount} /> 
          </Link>
          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'}
                />
              </MenuButton>
              <MenuList alignItems={'center'}>
                <Center>
                  <Avatar
                    size={'2xl'}
                    src={'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'}
                  />
                </Center>
                <Center>
                  <p>Username</p>
                </Center>
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}
