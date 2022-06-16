import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './Home.screen';
import { Play } from './Play.screen';
import { Playwright } from './Playwright.screen';
import { Image } from 'react-native';


const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen 
        name="Home" 
        component={Home} 
        options={{
            tabBarIcon: () => (<Image source={require("../assets/home-solid.png")} style={{width: 20, height: 20}} />)
        }}
        />
      <BottomTabs.Screen 
        name="Play" 
        component={Play} 
        options={{
            tabBarIcon: () => (<Image source={require("../assets/theater-masks-solid.png")} style={{width: 20, height: 20}} />)
        }}
        />
      <BottomTabs.Screen 
        name="Playwright" 
        component={Playwright} 
        options={{
            tabBarIcon: () => (<Image source={require("../assets/user-solid.png")} style={{width: 20, height: 20}} />)
        }}
        />
    </BottomTabs.Navigator>
  );
};


export default BottomTabsNavigator;