import { StyleSheet, Text, View } from 'react-native';

import RegistrationScreen from './RegistrationScreen';
import LoginScreen from './LoginScreen';

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <Text>PostsScreen </Text>
    </View>

    // <RegistrationScreen />
    // {/* <LoginScreen /> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
