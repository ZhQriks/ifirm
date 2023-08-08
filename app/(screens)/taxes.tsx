import {Stack, useRouter} from 'expo-router';
import { Edit2 } from 'iconsax-react-native';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles } from '../(auth)/login';
import React from "react";

const users = [
  {
    name: 'Erke Assylym',
    photo: 'https://i.imgur.com/NOa3k3Q.jpg',
  },
  {
    name: 'Madina Amangeldievna',
    photo: 'https://i.imgur.com/iTT5w5f.jpg',
  },
  {
    name: 'Temirlan Tolleusin',
    photo: 'https://i.imgur.com/1vaSoQg.png',
  },
  {
    name: 'Sungat Allimbetov',
    photo: 'https://i.imgur.com/LriWacm.jpg',
  },
  {
    name: 'Arman Karin',
    photo: 'https://i.imgur.com/QjPBflE.jpg',
  },
  {
    name: 'Zuhra Kunanbay',
    photo: 'https://i.imgur.com/sE4UdCx.png',
  },
  {
    name: 'Erlan Erjan',
    photo: 'https://i.imgur.com/jo8qRxC.png',
  },
  {
    name: 'Didar Bexeitov',
    photo: 'https://i.imgur.com/sIPIHcc.png',
  },
];
const Taxes = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.containerBlack}>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="p-4">
        <Text className="text-4xl font-semibold text-lime-300">Employees</Text>
        <Text className="text-light text-xl text-white mb-4">
          Manage your employers salary through I-FIRM
        </Text>
      </View>
      <ScrollView className="overflow-hidden">
        {users.map((user) => (
          <Pressable className="mb-5 flex flex-row justify-between" key={user.name}>
            <TouchableOpacity
              className="flex w-[80%] flex-row items-center rounded-lg bg-gray-800 p-4"
              onPress={() => router.replace('/billing')}
            >
              <Image
                source={{ uri: user.photo }}
                className="h-12 w-12 rounded-full"
              />
              <View>
                <Text className="ml-4 text-xl font-medium text-lime-300">
                  {user.name}
                </Text>
                <Text className="text-md ml-4 font-medium text-white">
                  Worker
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex w-[18%] items-center justify-center rounded-lg bg-gray-800 p-4"
              onPress={() => router.replace('/billing')}
            >
              <Edit2 size="32" className="text-lime-300" />
            </TouchableOpacity>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Taxes;
