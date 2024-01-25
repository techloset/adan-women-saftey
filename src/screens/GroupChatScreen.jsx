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

const GroupChatScreen = ({navigation}) => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Color.brown} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View>
          <Text style={styles.Header}>Channels</Text>
          <View style={styles.CardContainer}>
            <View style={styles.Card}>
              <Text style={styles.CardHeader}>Women at Work 💼</Text>
              <View style={styles.CardTextContainer}>
                <Image
                  source={require('../assets/images/circle.png')}
                  style={styles.CircleImage}
                />
                <Text style={styles.CardText}>56/3429 online</Text>
              </View>
              <Text style={styles.addDots}>...</Text>
              <View style={styles.ChatContainer}>
                <View style={styles.Chat}>
                  <Text style={styles.ChatHeader}>Jenny:</Text>
                  <Text style={styles.ChatText}>
                    Yeah, I have been thinking about it for a long time...
                  </Text>
                </View>
                <View style={styles.Chat}>
                  <Text style={styles.ChatHeader}>Jenny:</Text>
                  <Text style={styles.ChatText}>
                    Yeah, I have been thinking about it for a long time...
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.Card}>
              <Text style={styles.CardHeader}>School Girls 🏫</Text>
              <View style={styles.CardTextContainer}>
                <Image
                  source={require('../assets/images/circle.png')}
                  style={styles.CircleImage}
                />
                <Text style={styles.CardText}>56/3429 online</Text>
              </View>
              <Text style={styles.addDots}>...</Text>
              <View style={styles.ChatContainer}>
                <View style={styles.Chat}>
                  <Text style={styles.ChatHeader}>Jenny:</Text>
                  <Text style={styles.ChatText}>
                    Yeah, I have been thinking about it for a long time...
                  </Text>
                </View>
                <View style={styles.Chat}>
                  <Text style={styles.ChatHeader}>Jenny:</Text>
                  <Text style={styles.ChatText}>
                    Yeah, I have been thinking about it for a long time...
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.Card}>
              <Text style={styles.CardHeader}>Homemakers 🏠</Text>
              <View style={styles.CardTextContainer}>
                <Image
                  source={require('../assets/images/circle.png')}
                  style={styles.CircleImage}
                />
                <Text style={styles.CardText}>56/3429 online</Text>
              </View>
              <Text style={styles.addDots}>...</Text>
              <View style={styles.ChatContainer}>
                <View style={styles.Chat}>
                  <Text style={styles.ChatHeader}>Jenny:</Text>
                  <Text style={styles.ChatText}>
                    Yeah, I have been thinking about it for a long time...
                  </Text>
                </View>
                <View style={styles.Chat}>
                  <Text style={styles.ChatHeader}>Jenny:</Text>
                  <Text style={styles.ChatText}>
                    Yeah, I have been thinking about it for a long time...
                  </Text>
                </View>
              </View>
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
    marginTop: ratio.heightPixel(27),
    marginBottom: ratio.heightPixel(30),
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
    width: ratio.widthPixel(372),
    height: ratio.heightPixel(120),
    marginBottom: ratio.heightPixel(17),
    borderWidth: ratio.widthPixel(1),
    borderRadius: ratio.widthPixel(12),
  },
  CircleImage: {
    width: ratio.widthPixel(30),
    height: ratio.heightPixel(30),
    marginRight: ratio.widthPixel(5.6),
  },
  CardTextContainer: {
    marginLeft: ratio.widthPixel(51),
    flexDirection: 'row',
    alignItems: 'center',
  },
  CardHeader: {
    color: Color.black,
    fontFamily: FontFamily.Nunito_Regular,
    fontSize: ratio.fontPixel(22),
    marginTop: ratio.heightPixel(8),
    marginLeft: ratio.widthPixel(23),
  },
  CardText: {
    color: Color.black,
    fontFamily: FontFamily.Nunito_Regular,
    fontSize: ratio.fontPixel(20),
    marginTop: ratio.heightPixel(4),
  },
  ChatContainer: {
    marginTop: ratio.heightPixel(3),
  },
  Chat: {
    marginLeft: ratio.widthPixel(35),
    marginRight: ratio.widthPixel(5),
    flexDirection: 'row',
  },
  ChatHeader: {
    minWidth: ratio.widthPixel(42),
    minHeight: ratio.heightPixel(14),
    color: Color.pink,
    fontSize: ratio.fontPixel(12),
    fontFamily: FontFamily.Nunito_Regular,
  },
  ChatText: {
    minWidth: ratio.widthPixel(278),
    minHeight: ratio.heightPixel(12),
    color: Color.black,
    fontSize: ratio.fontPixel(12),
    fontFamily: FontFamily.Nunito_Regular,
  },
  addDots: {
    color: Color.black,
    fontSize: ratio.fontPixel(12),
    fontFamily: FontFamily.Nunito_Regular,
    marginTop: ratio.heightPixel(-10),
  },
});

export default GroupChatScreen;
