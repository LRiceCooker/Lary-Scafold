import { enableScreens } from 'react-native-screens';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ROUTES from "./routes";
enableScreens();
const Stack = createSharedElementStackNavigator();

const Router: React.FunctionComponent = () => {

    const authorizedStack = (
      <>
        <Stack.Screen name={ROUTES.HOME_SCREEN.NAME} component={HomeScreen}/>
      </>
    )

    return (
      <NavigationContainer>
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