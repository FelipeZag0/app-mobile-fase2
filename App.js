import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserListScreen from './src/screens/UserListScreen';
import AlbumListScreen from './src/screens/AlbumListScreen';
import PhotoGridScreen from './src/screens/PhotoGridScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen 
          name="UserList" 
          component={UserListScreen} 
          options={{ title: 'Usuários' }} 
        />
        <Stack.Screen 
          name="AlbumList" 
          component={AlbumListScreen} 
          options={{ title: 'Álbuns' }} 
        />
        <Stack.Screen 
          name="PhotoGrid" 
          component={PhotoGridScreen} 
          options={{ title: 'Fotos' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
