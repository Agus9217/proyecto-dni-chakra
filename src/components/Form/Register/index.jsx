import { useState } from "react"
import { Box, Flex, FormControl, FormLabel, Input, Stack, Text, useColorModeValue } from "@chakra-ui/react"


export const Register = () => {
  const [ show, setShow ] = useState(false)
  const focus = useColorModeValue('blue.500', 'teal')

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <>
      <FormControl
        alignItems={'center'}
        border={'1px solid red'}
        display={'flex'}
        h={'100dvh'}
        justifyContent={'center'}
        maxW={'400px'}
        mx={'auto'}
      >
        <Stack
          w={'100%'}
        >
          <FormLabel htmlFor="nombre">Nombre</FormLabel>
          <Input id="nombre" focusBorderColor={focus} />
          <FormLabel htmlFor="apellido">Apellido</FormLabel>
          <Input id="apellido"  focusBorderColor={focus} />
        </Stack>
        
      </FormControl>
    </>
  )
}
