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

import {useToast} from 'react-native-toast-notifications';
import {useState} from 'react';
import {POST} from '../../libs/Instance';

const SignUpScreen = ({navigation}) => {
  const toast = useToast();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleRegister = async () => {
    try {
      console.log();
      if (!formData.fullName || !formData.email || !formData.password) {
        toast.show('Please fill in all fields.');
        return null;
      }
      if (!validateEmail(formData.email)) {
        toast.show('Please enter a valid email address.');
        return;
      }
      setLoading(true);
      const response = await POST('/api/auth/signUp', {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });
      if (response.ok) {
      }

      setLoading(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.show('Please try again');
    }
  };

  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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
            <Text style={styles.Header}>Register</Text>
            <View>
              <Text
                style={{
                  ...styles.InputLabel,
                  marginTop: ratio.heightPixel(10),
                }}>
                Full Name
              </Text>
              <SafeAreaView>
                <TextInput
                  style={styles.InputField}
                  placeholder=""
                  value={formData.fullName}
                  onChangeText={text =>
                    setFormData({...formData, fullName: text})
                  }
                />
              </SafeAreaView>
            </View>
            <View>
              <Text
                style={{
                  ...styles.InputLabel,
                  marginTop: ratio.heightPixel(14),
                }}>
                Email
              </Text>
              <SafeAreaView>
                <TextInput
                  style={styles.InputField}
                  placeholder=""
                  value={formData.email}
                  onChangeText={text => setFormData({...formData, email: text})}
                />
              </SafeAreaView>
            </View>
            <View>
              <Text
                style={{
                  ...styles.InputLabel,
                  marginTop: ratio.heightPixel(19),
                }}>
                Password
              </Text>
              <SafeAreaView>
                <TextInput
                  style={styles.InputField}
                  placeholder=""
                  secureTextEntry={true}
                  value={formData.password}
                  onChangeText={text =>
                    setFormData({...formData, password: text})
                  }
                />
              </SafeAreaView>
            </View>
            <View style={styles.OptionsContainer}>
              <View style={styles.Option}>
                <Image
                  source={require('../../assets/images/google.png')}
                  style={styles.OptionImage}
                />
              </View>
              <View style={styles.Option}>
                <Image
                  source={require('../../assets/images/facebook.png')}
                  style={styles.OptionImage}
                />
              </View>
              <View style={styles.Option}>
                <Image
                  source={require('../../assets/images/apple.png')}
                  style={styles.OptionImage}
                />
              </View>
            </View>
            <View style={styles.ButtonContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(`${ScreenNames.LOGIN}`);
                }}>
                <Text
                  style={{
                    ...styles.Link,
                    fontFamily: FontFamily.Nunito_Medium,
                  }}>
                  Already Member?{' '}
                  <Text style={{fontFamily: FontFamily.Nunito_Bold}}>
                    Login
                  </Text>
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleRegister}>
                <View style={styles.Button}>
                  <Text style={styles.ButtonText}>Register</Text>
                </View>
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
    marginTop: ratio.heightPixel(332),
  },
  Header: {
    color: Color.brown,
    fontFamily: FontFamily.Nunito_SemiBold,
    fontSize: ratio.fontPixel(36),
    marginBottom: ratio.heightPixel(6),
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
    paddingLeft: ratio.widthPixel(4),
  },
  InputLabel: {
    marginBottom: ratio.heightPixel(2),
    marginLeft: ratio.widthPixel(4),
    color: Color.brown,
    fontFamily: FontFamily.Nunito_Regular,
    fontSize: ratio.fontPixel(14),
  },
  OptionsContainer: {
    marginTop: ratio.heightPixel(26),
    marginLeft: ratio.widthPixel(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  Option: {
    marginRight: ratio.widthPixel(16),
    backgroundColor: Color.brown,
    borderRadius: ratio.widthPixel(5),
    width: ratio.widthPixel(45),
    height: ratio.heightPixel(45),
    alignItems: 'center',
    justifyContent: 'center',
  },
  OptionImage: {
    width: ratio.widthPixel(27),
    height: ratio.heightPixel(27),
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
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    width: ratio.widthPixel(144),
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
    textShadowOffset: {width: 0, height: 4},
    textShadowRadius: 4,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
  },
});

export default SignUpScreen;
