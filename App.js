import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { Home, OnboardingScreen } from './screens';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false)

  useEffect(async() => {

    await AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if(value=== null){
        AsyncStorage.setItem("alreadyLaunched","true")
        setIsFirstLaunch(true)
      }else{
        setIsFirstLaunch(false)
      }
    })
  })

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isFirstLaunch && (
          <Stack.Screen 
          name="OnboardingScreen" 
          component={OnboardingScreen} 
          options={{headerShown:false}}
          />
        )}
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

