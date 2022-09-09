import React from 'react'
import { View, Text } from 'react-native'
import { Flex } from "native-base";
import { MainCards } from '../../components'

export function Main() {
  return (
      <Flex bgColor="#EFF7FF" h="100%">
        <MainCards />
      </Flex>
  );
}
