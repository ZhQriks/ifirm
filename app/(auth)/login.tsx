import { useSignIn } from '@clerk/clerk-expo';
import { Link, Stack } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBlack: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },

  inputView: {
    borderRadius: 5,
    width: '90%',
    height: 45,
    marginBottom: 20,
    borderColor: '#000',
    borderStyle: 'solid',
    borderWidth: 1,
  },

  textInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  primaryButton: {
    width: '90%',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    backgroundColor: '#000',
    color: '#ffffff',
  },

  primaryButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },

  titleText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  logo: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
  },

  footer: {
    color: '#000',
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  secondaryButton: {
    marginTop: 400,
    borderRadius: 5,
    padding: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6ee7b7',
  },

  secondaryButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  oauthView: {
    width: '90%',
    marginBottom: 20,
    marginTop: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

WebBrowser.maybeCompleteAuthSession();
const SignInWithOAuth = () => {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });
      // This is an important step,
      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView className="">
      <Stack.Screen options={{ headerShown: false }} />
      <View className="h-full w-full bg-emerald-100 p-6">
        <View className=" my-auto rounded-xl border border-neutral-200 bg-white p-6">
          <View className="mb-8 flex" style={{ gap: 4 }}>
            <Text className="text-4xl font-semibold text-emerald-950">Войти</Text>
            <Text className="text-base text-emerald-950">Добро пожаловать</Text>
          </View>
          <View className="mb-2">
            <Text className="mb-1">Почта</Text>
            <TextInput
              className="flex flex-row items-center rounded-xl border border-neutral-200 px-4 py-3"
              autoCapitalize="none"
              value={emailAddress}
              placeholder="Email..."
              onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
            />
          </View>

          <View className="mb-8">
            <Text className="mb-1">Пароль</Text>
            <TextInput
              className="flex flex-row items-center rounded-xl border border-neutral-200 px-4 py-3"
              value={password}
              placeholder="Password..."
              secureTextEntry
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <TouchableOpacity
            onPress={onSignInPress}
            className="flex flex-row items-center rounded-xl bg-emerald-500 px-4 py-3"
            style={{ gap: 12 }}
          >
            <Text className="mx-auto font-semibold text-white">Sign in</Text>
          </TouchableOpacity>
          <Link href="/register" className="mt-2">
            Нет аккаунта?
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInWithOAuth;
