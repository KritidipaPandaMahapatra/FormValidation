import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      {/* <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <LoginScreen />
      </ScrollView>
    </SafeAreaView> */}
    </NavigationContainer>
  );
};
export default App;
