import BibleDetailScreen from '../screens/BibleDetailScreen';
import GroupChatScreen from '../screens/GroupChatScreen';

import TabNavigator from './BottomNavigation';

import {ScreenNames} from './Screen';

const StackScreens = [
  {
    Name: ScreenNames.TAB,
    component: TabNavigator,
  },
  {
    Name: ScreenNames.BIBLE_DETAIL,
    component: BibleDetailScreen,
  },
  {
    Name: ScreenNames.GROUP_CHAT,
    component: GroupChatScreen,
  },
];
export default StackScreens;
