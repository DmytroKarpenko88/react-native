import { ImageBackground, StyleSheet } from 'react-native';
import bgImage from '../src/assets/bgImage.png';
import RegistrationScreen from '../components/RegistrationScreen';

export default function PostsScreen() {
  return (
    <ImageBackground source={bgImage} style={styles.bgImage}>
      <RegistrationScreen />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
  },
});
