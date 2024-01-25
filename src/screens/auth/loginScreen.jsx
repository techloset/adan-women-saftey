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
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAuth} from '../../context/Authcontext';
import {POST} from '../../libs/Instance';

const LoginScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const toast = useToast();
  const {authData, setAuthData} = useAuth();

  const handleLogin = async () => {
    const {email, password} = formData;

    setLoading(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.show('Please enter a valid email address');
      return null;
    }

    if (password.length < 6) {
      toast.show('Password must be at least 6 characters long');
      return null;
    }

    try {
      const res = await POST('/api/auth/login', {
        email: formData.email,
        password: formData.password,
      });

      if (!res.data.success || !res.data) {
        toast.show(`Login failed: ${res.data.message}`);
        return null;
      }
      const userData = res.data;
      const {user, token} = userData;
      const userWithToken = {...user, token};

      setAuthData(user);
      await AsyncStorage.setItem('auth', JSON.stringify(userWithToken));
      await AsyncStorage.setItem('token', JSON.stringify(token));
      setLoading(false);
    } catch (error) {
      console.error('Error during login:', error);
      toast.show('Login failed. Please try again.');
    }
    setLoading(false);
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
            <Text style={styles.Header}>Login</Text>
            <View>
              <Text
                style={{
                  ...styles.InputLabel,
                  marginTop: ratio.heightPixel(10),
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
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(`${ScreenNames.FORGOT_PASSWORD}`);
                }}>
                <Text style={styles.ForgotText}>Forgot Password?</Text>
              </TouchableOpacity>
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
                  navigation.navigate(`${ScreenNames.SIGN_UP}`);
                }}>
                <Text
                  style={{
                    ...styles.Link,
                    fontFamily: FontFamily.Nunito_Medium,
                  }}>
                  New Here?{' '}
                  <Text style={{fontFamily: FontFamily.Nunito_Bold}}>
                    Register
                  </Text>
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogin} disabled={loading}>
                <View style={styles.Button}>
                  {!loading ? (
                    <Text style={styles.ButtonText}>Login</Text>
                  ) : (
                    <View style={styles.loading} />
                  )}
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
  OptionsContainer: {
    marginLeft: ratio.widthPixel(4),
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
    backgroundColor: Color.brown,
    width: ratio.widthPixel(144),
    height: ratio.heightPixel(60),
    borderRadius: ratio.widthPixel(7),
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
  loading: {
    color: Color.brown,
    backgroundColor: Color.brown,
    borderColor: Color.black,
    borderWidth: ratio.widthPixel(4),
    width: ratio.widthPixel(30),
    borderRadius: 999999999999999999,
    height: ratio.heightPixel(30),
  },
});

export default LoginScreen;
