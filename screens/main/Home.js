import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import PostsScreen from './PostsScreen';
import ProfileScreen from './ProfileScreen';
import CreatePostsScreen from './CreatePostsScreen';

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name='PostsScreen' component={PostsScreen} />
      <Tabs.Screen name='CreatePostsScreen' component={CreatePostsScreen} />
      <Tabs.Screen name='Profile' component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

export default Home;
