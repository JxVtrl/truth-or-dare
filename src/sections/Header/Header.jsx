import React from 'react';
import { View } from 'react-native'
import { Flex, Text, Center, Avatar } from "native-base";
import { marcelo_img, joao_img} from '../../assets/images'

export const Header = () => {
  return (
    <View>
        <Flex
          bgColor="#02020B"
          w="100%"
          h="10vh"
          flexDir="row"
          paddingX="20px"
          justify="space-between"
          align="center"
        >
          <Text fontSize="20px" fontWeight="bold" color="#fff">
            JM Playground
          </Text>
         
            <Avatar.Group
              _avatar={{
                size: "lg",
              }}
              max={3}
            >
               <Avatar size="lg" source={{ uri: marcelo_img }}></Avatar> 
               <Avatar size="lg" source={{ uri: joao_img }}></Avatar> 
            </Avatar.Group>
         
        </Flex>
    </View>
    );
}
