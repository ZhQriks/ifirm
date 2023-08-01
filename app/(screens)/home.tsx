import { Star1 } from 'iconsax-react-native';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles } from '../(auth)/login';
import {useRouter} from "expo-router";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.containerBlack}>
      <View className="px-5 py-6">
        <Text className="mb-5 text-5xl font-semibold text-white">
          Dashboard
        </Text>
        <TouchableOpacity className="flex flex-row items-center justify-between rounded-xl bg-emerald-300 p-6" onPress={() => router.replace('/taxes')}>
          <View className="rounded-md bg-white p-2">
            <Star1 size="32" className="text-emerald-300" variant="Bold" />
          </View>
          <View>
            <Text className="text-right text-3xl font-medium text-white">
              1,311,11 ₸ Tenge
            </Text>
            <Text className="text-right text-lg text-white">
              Total transactions
            </Text>
          </View>
        </TouchableOpacity>
        <View className="mt-8 flex flex-row justify-between">
          <TouchableOpacity className="flex w-[45%] flex-row items-center justify-between rounded-xl bg-emerald-300 px-6 py-3">
            <View>
              <Text className="text-xl font-medium text-white">800 ₸</Text>
              <Text className=" text-lg text-white">Expected costs</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="flex w-[45%] flex-row items-center justify-between rounded-xl bg-emerald-300 px-6 py-3">
            <View>
              <Text className="text-xl font-medium text-white">800 ₸</Text>
              <Text className=" text-lg text-white">Executed transactions</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text className="mx-4 mb-8 mt-12 text-4xl font-medium text-white">
          Graph
        </Text>
        <Image
          source={{ uri: 'https://i.imgur.com/Abjkyf2.png' }}
          width={350}
          height={290}
          className="mx-auto "
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
