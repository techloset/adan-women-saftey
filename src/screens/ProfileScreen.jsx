import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  PermissionsAndroid,
} from 'react-native';
import {Color, FontFamily} from '../style/gobalStyle';
import ratio from '../libs/ratio';

import {useAuth} from '../context/Authcontext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {useToast} from 'react-native-toast-notifications';

const ProfileScreen = ({navigation}) => {
  const {authData, setAuthData} = useAuth();
  const [updatedName, setName] = useState(authData.name);
  const [updatedEmail, setEmail] = useState(authData.email);

  const signOut = async () => {
    try {
      setAuthData('');
      AsyncStorage.removeItem('auth');
    } catch (error) {
      console.error(error);
    }
  };

  const openGallery = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );

      if (granted) {
        const result = await launchImageLibrary(options);
        if (!result.didCancel && !result.error) {
          let data = result.assets[0];
          let newfile = {
            uri: data.uri,
            type: `test/${data.uri.split('.')[1]}`,
            name: `test.${data.uri.split('.')[1]}`,
          };

          handleUploadImage(newfile);
        } else {
          toast.show('Please select a file to upload');
        }
      } else {
        toast.show('You need to give camera permission to work');
      }
    } catch (error) {
      console.error('Error opening gallery:', error);
    }
  };
  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={Color.brown} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}>
        <View>
          <Text style={styles.Header}>Profile</Text>
          <View style={styles.Profile}>
            <Image source={require('../assets/images/Profile.png')} />
            <Image
              source={require('../assets/images/edit.png')}
              style={styles.EditImage}
            />
          </View>
          <View style={styles.Container}>
            <Text style={styles.ContainerHeader}>Name</Text>
            <TextInput style={styles.ContainerInput} value={updatedName} />
          </View>
          <View style={styles.Container}>
            <Text style={styles.ContainerHeader}>Email</Text>
            <TextInput style={styles.ContainerInput} value={updatedEmail} />
          </View>
          <TouchableOpacity onPress={signOut}>
            <View style={styles.Button}>
              <Text style={styles.ButtonText}>Log Out</Text>
            </View>
          </TouchableOpacity>
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
    marginBottom: ratio.heightPixel(18),
    width: ratio.widthPixel(269),
    height: ratio.heightPixel(68),
    marginHorizontal: 'auto',
    alignSelf: 'center',
  },
  Profile: {
    width: ratio.widthPixel(194),
    height: ratio.heightPixel(189),
    borderRadius: 9999999999999999999999999999999999,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto',
    alignSelf: 'center',
    position: 'relative',
    marginBottom: ratio.heightPixel(51),
  },
  EditImage: {
    width: ratio.widthPixel(32),
    height: ratio.heightPixel(32),
    borderRadius: 9999999999999999999999999999999999,
    position: 'absolute',
    bottom: ratio.heightPixel(11),
    right: ratio.widthPixel(12),
  },
  Container: {
    marginLeft: ratio.widthPixel(28),
    marginBottom: ratio.heightPixel(16),
  },
  ContainerHeader: {
    color: Color.black,
    fontFamily: FontFamily.Nunito_Bold,
    fontSize: ratio.fontPixel(18),
    marginLeft: ratio.widthPixel(4),
    marginBottom: ratio.heightPixel(7),
  },
  ContainerInput: {
    width: ratio.widthPixel(355),
    height: ratio.heightPixel(50),
    borderRadius: ratio.widthPixel(10),
    backgroundColor: Color.brown,
    textAlign: 'center',
    color: Color.black,
    fontFamily: FontFamily.Nunito_SemiBold,
    fontSize: ratio.fontPixel(20),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  Button: {
    marginTop: ratio.heightPixel(92),
    width: ratio.widthPixel(120),
    height: ratio.heightPixel(43),
    borderRadius: ratio.widthPixel(7),
    marginLeft: ratio.widthPixel(264),
    backgroundColor: Color.pink,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    color: Color.brown,
    fontFamily: FontFamily.Nunito_Bold,
    fontSize: ratio.fontPixel(20),
  },
});

export default ProfileScreen;
