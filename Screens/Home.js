import { StyleSheet, Text, View } from 'react-native';

import RegistrationScreen from './RegistrationScreen';
import LoginScreen from './LoginScreen';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home </Text>
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
