import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import PostsScreen from './screens/main/PostsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './screens/auth/RegistrationScreen';
import Login from './screens/auth/LoginScreen';
import Home from './screens/main/Home';
import { NavigationContainer } from '@react-navigation/native';

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Regular: require('./src/assets/fonts/Roboto-Regular.ttf'),
    Medium: require('./src/assets/fonts/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName='Login'>
        <MainStack.Screen name='Register' component={Register} />
        <MainStack.Screen name='Login' component={Login} />
        <MainStack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Start screen' }}
        />

        {/* // <View style={styles.container}> */}

        {/* // <StatusBar style='auto' /> */}
        {/* // </View> */}
      </MainStack.Navigator>
    </NavigationContainer>
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
