import { useAuth } from '@clerk/clerk-expo';
import { Pressable, SafeAreaView, Text } from 'react-native';

const Billing = () => {
  const { signOut } = useAuth();
  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
      <Pressable onPress={() => signOut()}>
        <Text className="text-blue-400">Logout</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Billing;
