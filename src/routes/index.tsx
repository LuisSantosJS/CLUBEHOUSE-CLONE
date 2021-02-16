import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();
import Main from '../pages/Main'
import Profile from '../pages/Profile';


const MainRouter: React.FC = () => {
    return (
        <>
            <NavigationContainer independent>
                <Navigator screenOptions={{ headerShown: false }}>
                    <Screen name="Main" component={Main} />
                    <Screen name="Profile" component={Profile} />
                </Navigator>
            </NavigationContainer>
        </>
    )
}
export default MainRouter;