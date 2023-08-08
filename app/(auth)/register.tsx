import { useSignUp } from '@clerk/clerk-expo';
import { Link, Stack } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

WebBrowser.maybeCompleteAuthSession();
const RegisterWithClerk = () => {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');

  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState('');

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <SafeAreaView className="flex-1">
      <Stack.Screen options={{ headerShown: false }} />
      <View className="h-full w-full bg-emerald-100 p-6">
        <View className=" my-auto rounded-xl border border-neutral-200 bg-white p-6">
          <View className="mb-8 flex" style={{ gap: 4 }}>
            <Text className="text-4xl font-semibold text-emerald-950">
              Создать аккаунт
            </Text>
          </View>
          <View>
            {!pendingVerification && (
              <View>
                <View className="mb-2">
                  <Text className="mb-1">Почта</Text>
                  <TextInput
                    className="flex flex-row items-center rounded-xl border border-neutral-200 px-4 py-3"
                    autoCapitalize="none"
                    value={emailAddress}
                    placeholder="Email..."
                    onChangeText={(email) => setEmailAddress(email)}
                  />
                </View>

                <View className="mb-2">
                  <Text className="mb-1">Пароль</Text>
                  <TextInput
                    className="flex flex-row items-center rounded-xl border border-neutral-200 px-4 py-3"
                    value={password}
                    placeholder="Password..."
                    secureTextEntry
                    onChangeText={(pass) => setPassword(pass)}
                  />
                </View>

                <View className="mb-2">
                  <Text className="mb-1">Имя</Text>
                  <TextInput
                    className="flex flex-row items-center rounded-xl border border-neutral-200 px-4 py-3"
                    autoCapitalize="none"
                    value={firstName}
                    placeholder="Имя"
                    onChangeText={(fName) => setFirstName(fName)}
                  />
                </View>

                <View className="mb-8">
                  <Text className="mb-1">Фамилия</Text>
                  <TextInput
                    className="flex flex-row items-center rounded-xl border border-neutral-200 px-4 py-3"
                    autoCapitalize="none"
                    value={lastName}
                    placeholder="Фамилия"
                    onChangeText={(lName) => setLastName(lName)}
                  />
                </View>

                <TouchableOpacity
                  onPress={onSignUpPress}
                  className="flex flex-row items-center rounded-xl bg-emerald-500 px-4 py-3"
                  style={{ gap: 12 }}
                >
                  <Text className="mx-auto font-semibold text-white">
                    Создать
                  </Text>
                </TouchableOpacity>
                <Link href="/login" className="mt-2">
                  Уже есть аккаунт?
                </Link>
              </View>
            )}
            {pendingVerification && (
              <View>
                <View>
                  <TextInput
                    className="flex flex-row items-center rounded-xl border border-neutral-200 px-4 py-3"
                    value={code}
                    placeholder="Code..."
                    onChangeText={(c) => setCode(c)}
                  />
                </View>
                <TouchableOpacity
                  className="mt-4 flex flex-row items-center rounded-xl bg-emerald-500 px-4 py-3"
                  style={{ gap: 12 }}
                  onPress={onPressVerify}
                >
                  <Text className="text-white mx-auto">Verify Email</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterWithClerk;
