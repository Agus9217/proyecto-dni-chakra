import { Button } from "@chakra-ui/button"
import { FormControl } from "@chakra-ui/form-control"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/input"
import { RiLockPasswordLine, RiUser3Line } from "react-icons/ri"
import { useState } from "react"
import { Heading, useColorModeValue } from "@chakra-ui/react"

export const Login = () => {
  const [ show, setShow ] = useState(false)
  const focus = useColorModeValue('blue.500', 'teal')

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <>
      <FormControl border={'1px solid red'} p={2} maxW={'300px'} h={'100vh'} mx={'auto'} display={'flex'} gap={2} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
        <Heading p={8}>
          Login
        </Heading>
        <InputGroup size={'md'} display={'flex'} flexDirection={'column'}>
          <InputLeftElement children={ <RiUser3Line /> } />
          <Input focusBorderColor={focus} type='email' placeholder='Email' autoComplete='off' />
        </InputGroup>
        <InputGroup size={'md'} display={'flex'} flexDirection={'column'}>
          <InputLeftElement children={ <RiLockPasswordLine /> } />
          <Input focusBorderColor={focus} type={show ? 'text' : 'password'} placeholder='Password' />
          <InputRightElement>
            <Button mr={2} variant={'ghost'} h='1.75rem' size='sm' onClick={handleClick}>
              {show ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  )
}
