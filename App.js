import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screen/HomeScreen';
import LauncherScreen from './src/Screen/LauncherScreen';
import AddEmployee from './src/Screen/AddEmployee';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from './src/Screen/Feed';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false 
    }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Feed" component={Feed} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="LauncherScreen"
          component={LauncherScreen}
        />
        <Stack.Screen
          name="HomeScreen"
          component={MyDrawer}
        />
        <Stack.Screen
          name="AddEmployee"
          component={AddEmployee}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;