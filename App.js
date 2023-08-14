import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import PostsScreen from './Screens/PostsScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    Regular: require('./src/assets/fonts/Roboto-Regular.ttf'),
    Medium: require('./src/assets/fonts/Roboto-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <PostsScreen />
      <StatusBar style='auto' />
    </View>
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
