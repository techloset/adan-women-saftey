import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import {Color} from '../style/gobalStyle';
import ratio from '../libs/ratio';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Color.brown} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <ImageBackground
          source={require('../assets/images/map.png')}
          style={styles.BgImage}>
          <Image
            source={require('../assets/images/alert.png')}
            style={styles.IconImage}
          />
          <Image
            source={require('../assets/images/call.png')}
            style={styles.IconImage}
          />
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: Color.brown,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  BgImage: {
    height: ratio.heightPixel(726),
    width: ratio.widthPixel(411),
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: ratio.widthPixel(14),
    paddingRight: ratio.widthPixel(21),
    paddingBottom: ratio.heightPixel(29),
  },
  IconImage: {
    height: ratio.heightPixel(68),
    width: ratio.widthPixel(70),
  },
});

export default HomeScreen;
