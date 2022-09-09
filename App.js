import React, { useEffect, useState } from "react";
import { View } from 'react-native'
import { NativeBaseProvider, Flex } from "native-base";
import { Header, Main } from "./src/sections";
import Loading from "./src/components";

export default function App() {
  const [load, setLoad] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoad(false)
  //   },2000)
  // },[])

  
  return (
    <NativeBaseProvider>
      <View>
          <Flex
            h='100vh'
            w = '100vw'
            overflow='hidden'
            >
          {load ? <Loading /> : (
            <>
              <Header />
              <Main />
            </>
            )}
          </Flex>
      </View>
    </NativeBaseProvider>
  )
}