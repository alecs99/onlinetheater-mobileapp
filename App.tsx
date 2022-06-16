import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppNavigator } from './screen/StackNavigator';


const App: React.FC = () => {
  return (
       <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
     );
}

export default App;