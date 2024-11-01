import { useState } from 'react';
import { Box, Heading, Text, Img, Flex, useColorModeValue, HStack } from '@chakra-ui/react';
import { BsArrowUpRight } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';

export const ItemListContainer = ({ products }) => {
  const { slug } = useParams(); 
  const boxShadow = useColorModeValue('6px 6px 0 orange', '6px 6px 0 cyan');


  const filteredProducts = slug ? products.filter(product => product.category === slug) : products;

  return (
    <Flex wrap="wrap" justify="center" py={6}>
      {filteredProducts.map((item) => (
        <Box
          key={item.id}
          w="xs"
          rounded={'sm'}
          my={5}
          mx={[0, 5]}
          overflow={'hidden'}
          bg={"yellow.100"}
          border={'1px'}
          borderColor="brown"
          boxShadow={boxShadow}
        >
          <Box h={'200px'} borderBottom={'1px'} borderColor="brown">
            <Img
              src={item.thumbnail}
              roundedTop={'sm'}
              objectFit="cover"
              h="full"
              w="full"
              alt={'Product Image'}
            />
          </Box>
          <Box p={4}>
            <Heading color={'brown'} fontSize={'2xl'} noOfLines={1}>
              {item.title}
            </Heading>
            <Text color={'gray.500'} noOfLines={2}>
              {item.description}
            </Text>
            <Text color={'orange.700'} noOfLines={2}>
              US${item.price}
            </Text>
          </Box>
          <HStack borderTop={'1px'} color="orange">
            <Flex
              p={4}
              alignItems="center"
              justifyContent={'space-between'}
              roundedBottom={'sm'}
              cursor={'pointer'}
              w="full"
            >
              <Link to={`/item/${item.id}`}>
                <Text
                  fontSize={'md'}
                  fontWeight={'semibold'}
                  _hover={{ transform: 'scale(1.3)', transition: 'transform 0.2s' }}
                >
                  View more
                </Text>
              </Link>
              <BsArrowUpRight />
            </Flex>
          </HStack>
        </Box>
      ))}
     
    </Flex>
  );
};
