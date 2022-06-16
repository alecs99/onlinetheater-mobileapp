import { Play } from './Play.screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlayDetails from './PlayDetails';
import BottomTabsNavigator from './BottomTabs.navigator';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={BottomTabsNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="PlayDetails"
                component={PlayDetails}
            />
        </Stack.Navigator>)
        
}
