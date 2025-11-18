import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserListScreen from './src/screens/UserListScreen';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
