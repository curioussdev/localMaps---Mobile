import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HomeScreen from './src/Home';
import DetailScreen from './src/Detail'

/*

export type RootStackParamList = {
  Home: undefined;
  Detail: undefined;
}
*/
const Stack: any = createNativeStackNavigator/*<RootStackParamList>*/();


export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
          <Stack.Screen name='Home' options={{
            headerShown: false
          }} component={HomeScreen} />
      
        <Stack.Screen name='Detail' component={() => null} />
     </Stack.Navigator>
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
