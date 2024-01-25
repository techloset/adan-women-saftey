import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  ImageBackground,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Color, FontFamily} from '../../style/gobalStyle';
import ratio from '../../libs/ratio';
import {ScreenNames} from '../../navigation/Screen';
const ForgotPasswordScreen = ({navigation}) => {
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Color.slate} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <ImageBackground
          source={require('../../assets/images/auth-bg.png')}
          style={styles.BgImage}>
          <View style={styles.Container}>
            <Text style={styles.Header}>Forgot Password</Text>
            <View style={styles.ForgotContainer}>
              <Text
                style={{
                  ...styles.InputLabel,
                  marginTop: ratio.heightPixel(10),
                }}>
                Enter your Email
              </Text>
              <SafeAreaView>
                <TextInput style={styles.InputField} placeholder="" />
              </SafeAreaView>
            </View>

            <View style={styles.ButtonContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(`${ScreenNames.NEW_PASSWORD}`);
                }}>
                <View style={styles.Button}>
                  <Text style={styles.ButtonText}>Sent Email</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Text
                  style={{
                    ...styles.Link,
                    fontFamily: FontFamily.Nunito_Bold,
                  }}>
                  go Back
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: Color.pink,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  BgImage: {
    height: ratio.heightPixel(823),
    width: ratio.widthPixel(411),
  },
  Container: {
    marginLeft: ratio.widthPixel(21),
    marginTop: ratio.heightPixel(396),
  },
  Header: {
    color: Color.brown,
    fontFamily: FontFamily.Nunito_SemiBold,
    fontSize: ratio.fontPixel(36),
  },
  InputField: {
    color: Color.brown,
    fontFamily: FontFamily.Nunito_Regular,
    borderColor: Color.brown,
    width: ratio.widthPixel(309),
    height: ratio.heightPixel(40),
    borderRadius: ratio.widthPixel(10),
    borderWidth: ratio.widthPixel(1),
    color: Color.brown,
  },
  InputLabel: {
    marginBottom: ratio.heightPixel(2),
    color: Color.brown,
    fontFamily: FontFamily.Nunito_Regular,
    fontSize: ratio.fontPixel(14),
  },
  ForgotContainer: {
    marginTop: ratio.heightPixel(16),
    alignSelf: 'center',
    marginHorizontal: 'auto',
  },
  ButtonContainer: {
    marginTop: ratio.heightPixel(41),
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    width: ratio.widthPixel(309),
    height: ratio.heightPixel(60),
    borderRadius: ratio.widthPixel(7),
    backgroundColor: Color.brown,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    color: Color.black,
    fontFamily: FontFamily.Nunito_Regular,
    fontSize: ratio.fontPixel(24),
  },
  Link: {
    marginTop: ratio.heightPixel(10),
    color: Color.brown,
    fontSize: ratio.fontPixel(16),
  },
});

export default ForgotPasswordScreen;
