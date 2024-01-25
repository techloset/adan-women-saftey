import {View, Image, StyleSheet} from 'react-native';
import ratio from '../libs/ratio';

import {Color} from '../style/gobalStyle';
import TabScreens from '../navigation/AuthenticatedNavigation';

const TabNavigation = () => {
  return (
    <View>
      {TabScreens.map((tab, index) => (
        <View style={styles.tabOption} key={tab.Name}>
          <Image
            source={index === 1 ? tab.ActiveIcon : tab.InActiveIcon}
            style={styles.TabImage}
          />
        </View>
      ))}
    </View>
  );
};

export default TabNavigation;

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
