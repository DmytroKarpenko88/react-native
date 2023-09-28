import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import DeleteIcon from '../../components/icons/DeleteIcon';

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          width: 70,
          height: 40,
          borderRadius: 20,
          backgroundColor: '#F6F6F6',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <DeleteIcon />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 70,
          height: 40,
          borderRadius: 20,
          backgroundColor: '#FF6C00',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Ionicons name='add' size={24} color='white' />
      </TouchableOpacity>
      <Feather name='grid' size={24} color='#212121CC' />
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
