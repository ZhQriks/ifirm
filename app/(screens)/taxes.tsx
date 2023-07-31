import { useAuth } from '@clerk/clerk-expo';
import { Pressable, Text } from 'react-native';

import { Welcome } from '@/templates/Welcome';

const Taxes = () => {
  const { signOut } = useAuth();
  return (
    <>
      <Welcome />
      <Pressable onPress={() => signOut()}>
        <Text>Logout</Text>
      </Pressable>
    </>
  );
};

export default Taxes;
