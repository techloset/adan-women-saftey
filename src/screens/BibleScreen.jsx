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
import {ScreenNames} from '../navigation/Screen';

const Data = [
  {
    title: 'Safety at Work',
  },
  {
    title: 'Safety at Home',
  },
  {
    title: 'Safety at University',
  },
  {
    title: 'Women Safety Online',
  },
  {
    title: ' Safety on the Streets',
  },
];

const BibleScreen = ({navigation}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.Card}
      onPress={() =>
        navigation.navigate(ScreenNames.BIBLE_DETAIL, {title: item.title})
      }>
      <Text style={styles.CardHeader}>{item.title}</Text>
      <Image
        source={require('../assets/images/white-front-arrow.png')}
        style={styles.frontArrow}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Color.brown} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View>
          <Text style={styles.Header}>Bible of Safety</Text>
          <Image
            source={require('../assets/images/safety.png')}
            style={styles.SafetyImage}
          />
          <FlatList
            data={Data}
            keyExtractor={item => item.name}
            initialNumToRender={10}
            renderItem={renderItem}
            style={styles.CardContainer}
          />
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
    marginTop: ratio.heightPixel(27),
    width: ratio.widthPixel(269),
    height: ratio.heightPixel(60),
    marginHorizontal: 'auto',
    alignSelf: 'center',
  },
  SafetyImage: {
    marginHorizontal: 'auto',
    alignSelf: 'center',
    width: ratio.widthPixel(100),
    height: ratio.heightPixel(100),
    marginBottom: ratio.heightPixel(31),
  },
  CardContainer: {
    flexDirection: 'column',
  },
  Card: {
    marginBottom: ratio.heightPixel(18),
    width: ratio.widthPixel(348),
    height: ratio.heightPixel(80),
    borderRadius: ratio.widthPixel(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: ratio.widthPixel(34),
    paddingRight: ratio.widthPixel(19),
    backgroundColor: Color.pink,
    marginHorizontal: 'auto',
    alignSelf: 'center',
  },
  CardHeader: {
    color: Color.brown,
    fontFamily: FontFamily.Nunito_Bold,
    fontSize: ratio.fontPixel(25),
  },
  frontArrow: {
    width: ratio.widthPixel(24),
    height: ratio.heightPixel(24),
  },
});

export default BibleScreen;
