import React from "react";
import { View } from 'react-native'
import { NativeBaseProvider, Flex } from "native-base";
import { Header, Main } from "./src/sections";

export default function App () {
  return (
    <NativeBaseProvider>
      <View>
        <Flex
          Flex
          h='100vh'
          w = '100vw'
          overflow='hidden'
        >
          <Header />
          <Main />
        </Flex>
      </View>
    </NativeBaseProvider>
  )
}