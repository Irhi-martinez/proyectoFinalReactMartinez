import React, { useContext } from 'react';
import {
  Box,
  Container,
  Stack,
  Text,
  Heading,
  Button,
  SimpleGrid,
  Image,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const Checkout = () => {
  const { cartState, deleteItem, removeItem } = useContext(CartContext);
  const total = cartState.reduce((acc, item) => acc + item.price * item.qtyItem, 0);
  const toast = useToast();

  const handleCreateOrder = async () => {
    const orderObj = {
      items: cartState.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.qtyItem, // Usando qtyItem para la cantidad
      })),
      total: total,
      createdAt: new Date(), // Puedes agregar más propiedades aquí si es necesario
    };

    try {
      const ordersCollection = collection(db, "orders");
      const docRef = await addDoc(ordersCollection, orderObj);
      toast({
        title: "Orden creada.",
        description: `Se creó la orden con ID: ${docRef.id}`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error al crear la orden:", error);
      toast({
        title: "Error al crear la orden.",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW={'7xl'} py={10}>
      <Heading as="h2" mb={6}>
        Checkout
      </Heading>
      {cartState.length === 0 ? (
        <Text>No hay productos en el carrito.</Text>
      ) : (
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {cartState.map((item) => (
            <Box
              key={item.id}
              borderWidth={1}
              borderRadius="lg"
              overflow="hidden"
              padding={4}
              bg={useColorModeValue('white', 'gray.800')}
            >
              {/* Imagen del producto */}
              <Image
                src={item.thumbnail}
                alt={item.title}
                boxSize="150px"
                objectFit="cover"
                mb={4}
              />
              
              <Text fontWeight="bold" fontSize="xl">
                {item.title}
              </Text>
              <Text fontSize="lg">${item.price} USD</Text>
              <Text>Cantidad: {item.qtyItem}</Text>

              <Button
                mt={4}
                colorScheme="red"
                onClick={() => deleteItem(item.id)}
              >
                Eliminar
              </Button>
            </Box>
          ))}
          <Box
            borderWidth={1}
            borderRadius="lg"
            padding={4}
            bg={useColorModeValue('white', 'gray.800')}
            mt={6}
          >
            <Text fontSize="2xl" fontWeight="bold">
              Total: ${total.toFixed(2)}
            </Text>
            <Button
              mt={4}
              colorScheme="teal"
              size="lg"
              onClick={handleCreateOrder}
            >
              Crear Orden
            </Button>
          </Box>
        </SimpleGrid>
      )}
    </Container>
  );
};
