import { Box, Flex, Image, useColorModeValue } from '@chakra-ui/react'
import ThemeToggleButton from '../ToggleTheme'
import imgLogo from '../../assets/img/logo-iglesia.png'

export const Navbar = () => {

  const bg = useColorModeValue('gray.800', 'gray.800')

  return (
    <Flex bg={bg} position={'fixed'} w={'full'} justifyContent={'center'}>
      <Flex w={'container.md'} justifyContent={'space-between'} alignItems={'center'} p={5}>
        <Box maxW={'200px'}>
          <Image src={ imgLogo } />
        </Box>
        <ThemeToggleButton />
      </Flex>
    </Flex>
  )
}
