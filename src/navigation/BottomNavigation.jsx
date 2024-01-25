import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image, StyleSheet} from 'react-native';
import ratio from '../libs/ratio';

import TabScreens from './AuthenticatedNavigation';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {Color} from '../style/gobalStyle';

const Tab = createBottomTabNavigator();

const TabNavigator = ({route}) => {
  const focusedRouteName = getFocusedRouteNameFromRoute(route);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabContainer,
      }}>
      {TabScreens.map((tab, index) => (
        <Tab.Screen
          key={tab.Name}
          name={tab.Name}
          component={tab.component}
          options={{
            tabBarIcon: () => (
              <View style={styles.tabOption}>
                <Image
                  source={
                    (index === 0 &&
                      (focusedRouteName === undefined ||
                        focusedRouteName === tab.Name)) ||
                    (focusedRouteName === tab.Name && index !== 0)
                      ? tab.ActiveIcon
                      : tab.InActiveIcon
                  }
                  style={styles.TabImage}
                />
              </View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    paddingLeft: ratio.widthPixel(20),
    paddingRight: ratio.widthPixel(19),
    paddingTop: ratio.heightPixel(26),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: ratio.widthPixel(26),
    backgroundColor: Color.pink,
    color: Color.pink,
    height: ratio.heightPixel(97),
    borderWidth: 0,
  },
  tabOption: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.brown,
    width: ratio.widthPixel(45),
    height: ratio.heightPixel(45),
    borderRadius: 9999999999999999,
  },
  TabImage: {
    width: ratio.widthPixel(28),
    height: ratio.heightPixel(28),
  },
});
