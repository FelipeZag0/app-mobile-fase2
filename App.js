import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserListScreen from './src/screens/UserListScreen';
import AlbumListScreen from './src/screens/AlbumListScreen';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
