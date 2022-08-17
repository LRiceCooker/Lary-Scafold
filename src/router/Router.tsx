import React from 'react'
import { enableScreens } from 'react-native-screens';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ROUTES from "./routes";
import launchUrlResolver from './urlResolver';


enableScreens();
const Stack = createSharedElementStackNavigator();

const Router: React.FunctionComponent = () => {

    const UrlResolver = () => {
      const {navigate, addListener} = useNavigation()
      const [view, setView] = React.useState("")
      React.useEffect(() => {
        launchUrlResolver(
          setView,
          view,
          (route: any)=>{navigate(route)}, 
          (callback: (event: any)=>void)=>{addListener('state', callback)}
        )
      }, [])

      return null
    }

    const authorizedStack = (
      <>
        <Stack.Screen name={ROUTES.HOME_SCREEN.NAME} component={HomeScreen}/>
      </>
    )

    return (
      <NavigationContainer
        documentTitle={{
          formatter: (options, route) => 
            `${(options?.title ?? route?.name).replace('/', '').replace(new RegExp('/'), ' - ')} - My Cool App`,
        }}
      >
        <UrlResolver/>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          initialRouteName={ROUTES.HOME_SCREEN.NAME}
        >
          {authorizedStack}
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  
  export default Router;