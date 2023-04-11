import React from 'react'
import { enableScreens } from 'react-native-screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import Menu from '../layouts/Menu';
import ROUTES from "./routes";
import useUrlResolver from './urlResolver';
import config from '../../app.json'


enableScreens();
const Tab = createBottomTabNavigator();

const Router: React.FunctionComponent = () => {

    const authorizedTab = (
      <>
        <Tab.Screen name={ROUTES.HOME_SCREEN.NAME} component={HomeScreen}/>
      </>
    )

    return (
      <NavigationContainer
        documentTitle={{
          formatter: (options, route) => 
            `${(options?.title ?? route?.name).replace('/', '').replace(new RegExp('/'), ' - ')} - ${config.expo.name}`,
        }}
        linking={useUrlResolver()}

      >
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false
          }}
          initialRouteName={ROUTES.HOME_SCREEN.NAME}
          tabBar={() => <Menu/>}
        >
          {authorizedTab}
        </Tab.Navigator>
      </NavigationContainer>
    );
  };
  
  export default Router;