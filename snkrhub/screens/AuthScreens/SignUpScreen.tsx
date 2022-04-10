import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  HStack,
  VStack,
  Text,
  Link,
  Center,
  StatusBar,
  Box,
  Stack,
  Input,
  FormControl,
  Icon
} from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// Types
import { RootTabScreenProps } from '../../types';
import { Ionicons } from "@expo/vector-icons";

const SignUpForm = ({ navigation }: any) => {
  const [text, setText] = useState("");
  const [pass, setPass] = useState("");
  const [confirm_pass, setConfirmPass] = useState("");
  const [showPass, setShowPass] = React.useState(false);
  const [showConfirmPass, setShowConfirmPass] = React.useState(false);


  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={{ flex: 1 }}
    >
      <VStack
        flex="1"
        px="6"
        py="5"
        _light={{ bg: "gray.100" }}
        _dark={{ bg: "gray.900" }}
        justifyContent="space-between"
        space="3"
        borderTopRightRadius={{ base: "3xl", }}
        borderBottomRightRadius={{ base: "0", }}
        borderTopLeftRadius={{ base: "3xl" }}
      >
        <VStack space="7">
          <VStack>
            {/* Form title */}
            <Text
              pb="5"
              fontSize="lg"
              fontWeight="bold"

              _light={{
                color: "gray.700",
              }}
              _dark={{
                color: "gray.300", 
              }}
            >
              Sign up
            </Text>

            {/* Form */}
            <VStack space="8">
              <VStack space={{ base: "3", md: "4" }}>
                {/* Email Input */}
                <FormControl>
                  <Input
                    isRequired
                    label="Username"
                    placeholder="Username"
                    defaultValue={text}
                    onChangeText={(txt: any) => setText(txt)}
                    InputLeftElement={
                      <Icon 
                        as={
                          <Ionicons 
                            name="person" 
                          />
                        } 
                        size={4} 
                        ml="2" 
                        color="muted.400" 
                      />
                    }
                  />
                </FormControl>

                {/* Email Input */}
                <FormControl>
                  <Input
                    isRequired
                    label="Email"
                    placeholder="Email address"
                    defaultValue={text}
                    onChangeText={(txt: any) => setText(txt)}
                  />
                </FormControl>
                
                {/* Password input */}
                <FormControl>
                  <Input
                    isRequired
                    placeholder={'Password'}
                    type={showPass ? "" : "password"}
                    label="Password"     
                    defaultValue={pass}
                    onChangeText={(txt: any) => setPass(txt)}
                  />
                </FormControl>
                
                {/* Confirm password input */}
                <FormControl>
                  <Input
                    isRequired
                    placeholder={'Confirm Password'}
                    type={showConfirmPass ? "" : "password"}
                    label="Confirm Password"
                    defaultValue={confirm_pass}
                    onChangeText={(txt: any) => setConfirmPass(txt)}
                  />
                </FormControl>
                </VStack>

              <Checkbox
                alignItems="flex-start"
                value="agreed"
                colorScheme="primary"
                accessibilityLabel="Remember me"
                size="sm" 
              >
                <HStack alignItems="center">
                  <Text 
                    fontSize="sm" 
                    pl="2"
                    _light={{
                      color: "gray.700",
                    }}
                    _dark={{
                      color: "gray.300", 
                    }}
                  >
                    I accept the{" "}
                  </Text>
                  <Link
                    _text={{
                      fontSize: "sm",
                      fontWeight: "semibold",
                      textDecoration: "none",
                      color: 'primary.500'
                    }}
                  >
                    Terms of Use
                  </Link>
                  <Text
                    fontSize="sm" 
                    _light={{
                      color: "gray.700",
                    }}
                    _dark={{
                      color: "gray.300", 
                    }} 
                  > & </Text>

                  <Link
                    _text={{
                      fontSize: "sm",
                      fontWeight: "semibold",
                      textDecoration: "none",
                      color:'primary.500'
                    }}
                  >
                    Privacy Policy
                  </Link>
                </HStack>
              </Checkbox>
              
              <Button
                size="md"
                _text={{
                  fontSize: "sm",
                  fontWeight: "medium",
                }}
                background="primary.600"
                onPress={() => {
                  navigation.replace("Home");
                }}
              >
                Sign Up
              </Button>
            </VStack>
          </VStack>
        </VStack>

        <HStack
          mb="4"
          space="1"
          alignItems="center"
          justifyContent="center"
          mt={{ base: "auto", md: "8" }}
        >
          <Text
            fontSize="sm"
            _light={{ color: "gray.800" }}
            _dark={{ color: "gray.400" }}
          >
            Already have an account?
          </Text>

          {/* Opening Link Tag navigateTo:"SignIn" */}
          <Link
            _text={{
              fontSize: "sm",
              fontWeight: "medium",
              textDecoration: "none",
              color: "primary.600",
            }}
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            Sign in
          </Link>
        </HStack>
      </VStack>
    </KeyboardAwareScrollView>
  )
}

export default function SignUpScreen({ navigation }: RootTabScreenProps<'SignUp'>) {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Box
        safeAreaTop
        background={'primary.600'}
      />
      <Center
        my="auto"
        background={'primary.600'}
        flex="1"
      >
        <Stack
          flexDirection={{ base: "column", md: "row" }}
          w="100%"
          maxW={{ md: "1016px" }}
          flex={{ base: "1", md: "none" }}
        >
          <VStack px="4" mt="20" mb="5">
            <VStack>
              <Text
                fontSize="md"
                fontWeight="normal"
                color={'gray.300'}
              >
                Welcome to
              </Text>
              <Text fontSize="3xl" fontWeight="bold" color="gray.50">
                SnkrHub
              </Text>
            </VStack>
          </VStack>
          <SignUpForm navigation={navigation} />
        </Stack>
      </Center>
    </>
  );
}