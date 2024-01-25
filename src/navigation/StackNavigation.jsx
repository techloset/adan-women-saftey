import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigation from './AuthNavigation';
import StackScreens from './DetailNavigation';
import {useAuth} from '../context/Authcontext';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const {authData} = useAuth();
  const routes = authData ? StackScreens : AuthNavigation;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {routes.map((item, index) => (
          <Stack.Screen
            key={index}
            name={item.Name}
            component={item.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
