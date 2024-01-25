import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  ImageBackground,
  Text,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {Color, FontFamily} from '../../style/gobalStyle';
import ratio from '../../libs/ratio';

const NewPasswordScreen = () => {
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
            <Text style={styles.Header}>Reset Password</Text>
            <View>
              <Text
                style={{
                  ...styles.InputLabel,
                  marginTop: ratio.heightPixel(10),
                }}>
                New Password
              </Text>
              <SafeAreaView>
                <TextInput style={styles.InputField} placeholder="" />
              </SafeAreaView>
            </View>
            <View>
              <Text
                style={{
                  ...styles.InputLabel,
                  marginTop: ratio.heightPixel(19),
                }}>
                Confirm Password
              </Text>
              <SafeAreaView>
                <TextInput style={styles.InputField} placeholder="" />
              </SafeAreaView>
            </View>
            <View style={styles.Button}>
              <Text style={styles.ButtonText}>Enter</Text>
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
    marginLeft: ratio.widthPixel(4),
    height: ratio.heightPixel(40),
    borderRadius: ratio.widthPixel(10),
    borderWidth: ratio.widthPixel(1),
    color: Color.brown,
  },
  InputLabel: {
    marginBottom: ratio.heightPixel(2),
    marginLeft: ratio.widthPixel(4),
    color: Color.brown,
    fontFamily: FontFamily.Nunito_Regular,
    fontSize: ratio.fontPixel(14),
  },
  ForgotText: {
    marginTop: ratio.heightPixel(13),
    marginLeft: ratio.widthPixel(192),
    color: Color.brown,
    fontFamily: FontFamily.Nunito_Bold,
    fontSize: ratio.fontPixel(14),
  },

  ButtonContainer: {
    flexDirection: 'row',
    marginTop: ratio.heightPixel(41),
    marginRight: ratio.widthPixel(31),
    marginLeft: ratio.widthPixel(13),
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  Button: {
    marginLeft: ratio.widthPixel(4),
    marginTop: ratio.heightPixel(41),
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
    color: Color.brown,
    fontSize: ratio.fontPixel(16),
  },
});

export default NewPasswordScreen;
