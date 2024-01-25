import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Color, FontFamily} from '../style/gobalStyle';
import ratio from '../libs/ratio';

const BibleDetailScreen = ({navigation, route}) => {
  const {title} = route.params;

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Color.brown} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View>
          <View style={styles.HeaderContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../assets/images/back-arrow.png')}
                style={styles.BackImage}
              />
            </TouchableOpacity>
            <Text style={styles.Header}>{title}</Text>
            <Image
              source={require('../assets/images/safety.png')}
              style={styles.SafetyImage}
            />
          </View>
          <View style={styles.Container}>
            <Image
              source={require('../assets/images/Bible-Bg.png')}
              style={styles.BibleBgImage}
            />
            <Text style={styles.ContainerText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Faucibus a pellentesque sit amet porttitor eget dolor morbi non.
              Pharetra convallis posuere morbi leo urna molestie at elementum
              eu. Quis vel eros donec ac odio tempor orci dapibus. Purus sit
              amet luctus venenatis lectus magna fringilla. Vitae et leo duis ut
              diam quam nulla porttitor massa. Convallis posuere morbi leo urna
              molestie at elementum. Nulla aliquet enim tortor at auctor urna.
              Laoreet id donec ultrices tincidunt. Blandit massa enim nec dui
              nunc.{'\n'} {'\n'} Et tortor consequat id porta nibh venenatis
              cras sed felis. Facilisis magna etiam tempor orci eu lobortis
              elementum nibh tellus. Egestas sed sed risus pretium quam
              vulputate dignissim suspendisse. Pulvinar sapien et ligula
              ullamcorper malesuada proin libero nunc consequat. Lorem sed risus
              ultricies tristique nulla aliquet enim tortor. Sed libero enim sed
              faucibus turpis. Eget nunc lobortis mattis aliquam.
            </Text>
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
  HeaderContainer: {
    flexDirection: 'row',
    marginTop: ratio.heightPixel(27),
    alignItems: 'center',
  },
  BackImage: {
    marginLeft: ratio.widthPixel(31),
    width: ratio.widthPixel(24),
    height: ratio.heightPixel(24),
  },
  Header: {
    color: Color.black,
    fontFamily: FontFamily.Nunito_SemiBold,
    marginLeft: ratio.widthPixel(27),
    fontSize: ratio.fontPixel(30),
    width: ratio.widthPixel(210),
  },
  SafetyImage: {
    marginLeft: ratio.widthPixel(9),
    width: ratio.widthPixel(45),
    height: ratio.heightPixel(44),
  },
  CardContainer: {
    flexDirection: 'column',
  },
  Container: {
    width: ratio.widthPixel(374),
    height: ratio.heightPixel(689),
    marginTop: ratio.heightPixel(20),
    alignSelf: 'center',
    marginHorizontal: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.41)',
    borderRadius: ratio.widthPixel(10),
  },
  BibleBgImage: {
    alignSelf: 'center',
    marginHorizontal: 'auto',
    width: ratio.widthPixel(374),
    height: ratio.heightPixel(194),
  },
  ContainerText: {
    width: ratio.widthPixel(353),
    height: ratio.heightPixel(434),
    color: Color.black,
    fontFamily: FontFamily.Nunito_SemiBold,
    fontSize: ratio.fontPixel(14),
    marginTop: ratio.heightPixel(20),
    alignSelf: 'center',
    marginHorizontal: 'auto',
  },
});

export default BibleDetailScreen;
