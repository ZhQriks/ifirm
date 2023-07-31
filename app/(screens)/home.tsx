import { useAuth } from '@clerk/clerk-expo';
import { Pressable, SafeAreaView, Text } from 'react-native';

import { styles } from '../(auth)/login';

const Home = () => {
  const { signOut } = useAuth();
  return (
    <SafeAreaView style={styles.containerBlack}>
      <Pressable onPress={() => signOut()}>
        <Text className="text-white">Logout</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
