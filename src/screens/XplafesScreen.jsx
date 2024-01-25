import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
  Image,
} from 'react-native';
import {Color, FontFamily} from '../style/gobalStyle';
import ratio from '../libs/ratio';

const XplafesScreen = ({navigation}) => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Color.brown} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View>
          <Text style={styles.Header}>Xplafés Around You</Text>
          <View style={styles.CardContainer}>
            <View style={styles.Card}>
              <Image
                source={require('../assets/images/Location.png')}
                style={styles.LocationImage}
              />
              <View style={styles.CardTextContainer}>
                <Text style={styles.CardHarder}>Jennifer Lydia</Text>
                <Text style={styles.CardText}>Wild West Street, New York</Text>
              </View>
              <Image
                source={require('../assets/images/front-arrow.png')}
                style={styles.FrontArrowImage}
              />
            </View>
          </View>
        </View>
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
  Header: {
    color: Color.black,
    fontFamily: FontFamily.Nunito_SemiBold,
    fontSize: ratio.fontPixel(30),
    textAlign: 'center',
    marginTop: ratio.heightPixel(31),
    marginBottom: ratio.heightPixel(61),
    width: ratio.widthPixel(269),
    marginHorizontal: 'auto',
    alignSelf: 'center',
  },
  CardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  Card: {
    borderColor: Color.pink,
    width: ratio.widthPixel(345),
    height: ratio.heightPixel(72),
    marginBottom: ratio.heightPixel(15),
    borderWidth: ratio.widthPixel(1),
    borderRadius: ratio.widthPixel(12),
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: Color.brown,
  },
  LocationImage: {
    width: ratio.widthPixel(30),
    height: ratio.heightPixel(30),
    marginLeft: ratio.widthPixel(14),
  },
  CardTextContainer: {
    marginLeft: ratio.widthPixel(16),
    justifyContent: 'center',
  },
  CardHarder: {
    color: Color.pink,
    fontFamily: FontFamily.Nunito_SemiBold,
    fontSize: ratio.fontPixel(24),
  },
  CardText: {
    color: Color.black,
    fontFamily: FontFamily.Nunito_Regular,
    fontSize: ratio.fontPixel(14),
    marginTop: ratio.heightPixel(4),
  },
  FrontArrowImage: {
    width: ratio.widthPixel(24),
    height: ratio.heightPixel(24),
    marginLeft: ratio.widthPixel(70),
  },
});

export default XplafesScreen;
