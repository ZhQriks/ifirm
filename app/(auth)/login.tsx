// eslint-disable-next-line import/no-extraneous-dependencies
import { useOAuth } from '@clerk/clerk-expo';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
const SignInWithOAuth = () => {
  useWarmUpBrowser();
  WebBrowser.maybeCompleteAuthSession();
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const handleSignInWithGooglePress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
      if (createdSessionId) {
        setActive?.({ session: createdSessionId });
      } else {
        throw new Error(
          'There are unmet requirements, modifiy this else to handle them',
        );
      }
    } catch (err) {
      console.log(JSON.stringify(err, null, 2));
      console.log('error signing in', err);
    }
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://i.imgur.com/aaUvcUO.png' }}
        resizeMode="cover"
        style={styles.image}
      >
        <Image
          source={{ uri: 'https://i.imgur.com/vwpSGQ6.png' }}
          width={150}
          height={150}
          style={styles.logo}
        />
        <View style={styles.oauthView}>
          <TouchableOpacity
            style={{ ...styles.secondaryButton, marginBottom: 20 }}
            onPress={handleSignInWithGooglePress}
          >
            <Text style={styles.secondaryButtonText}>Continue with Google</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignInWithOAuth;
