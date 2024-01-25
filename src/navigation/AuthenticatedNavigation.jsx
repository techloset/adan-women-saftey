import BibleScreen from '../screens/BibleScreen';
import ChannelsScreen from '../screens/ChannelsScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import XplafesScreen from '../screens/XplafesScreen';

import {ScreenNames} from './Screen';

const TabScreens = [
  {
    Name: ScreenNames.XPLAFES,
    component: XplafesScreen,
    InActiveIcon: require('../assets/images/Xplafe.png'),
    ActiveIcon: require('../assets/images/active-Xplafe.png'),
  },
  {
    Name: ScreenNames.CHANNELS,
    component: ChannelsScreen,
    InActiveIcon: require('../assets/images/Channel.png'),
    ActiveIcon: require('../assets/images/active-Channel.png'),
  },
  {
    Name: ScreenNames.HOME,
    component: HomeScreen,
    InActiveIcon: require('../assets/images/Home.png'),
    ActiveIcon: require('../assets/images/active-Home.png'),
  },
  {
    Name: ScreenNames.BIBLE,
    component: BibleScreen,
    InActiveIcon: require('../assets/images/Bible.png'),
    ActiveIcon: require('../assets/images/active-Bible.png'),
  },
  {
    Name: ScreenNames.PROFILE,
    component: ProfileScreen,
    InActiveIcon: require('../assets/images/Profile.png'),
    ActiveIcon: require('../assets/images/active-Profile.png'),
  },
];
export default TabScreens;
