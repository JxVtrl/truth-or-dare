import React from 'react'
import { View, Image, ImageBackground } from "react-native";
import { Box, Flex, Pressable, Text } from 'native-base'
import { buttons } from '../../data'
import { handleReq } from '../../services'

export function MainCards() {
  const items = buttons.items
  console.log(items)

  return (
      <Flex>
        <Flex
          mt="10px"
          gap="20px"
          w="100%"
          flexDir="row"
          flexWrap="wrap"
          p="10px"
          align="center"
          justify="center"
        >
        {items.map((item, idx) => {
          console.log(item)
          return ( 
            <Pressable onPress={() => handleReq(item.url[0])} key={idx}>
              <Flex
                bgColor="#FCF7FF"
                justify="center"
                w="150px"
                h="150px"
                borderRadius="12px"
                align="center"
                textAlign="center"
                borderColor='black'
                borderWidth='1px'
                overflow='hidden'
              >
                <Text fontWeight="bold" color="#000" fontSize="14px">
                  {item.name}
                </Text>
              </Flex>
            </Pressable>
          )})}
        </Flex>
      </Flex>
  );
}
