import ForgotPasswordScreen from '../screens/auth/forgotPasswordScreen';
import LoginScreen from '../screens/auth/loginScreen';
import NewPasswordScreen from '../screens/auth/newPasswordScreen';
import SignUpScreen from '../screens/auth/signupScreen';

import {ScreenNames} from './Screen';

const AuthNavigation = [
  {
    Name: ScreenNames.LOGIN,
    component: LoginScreen,
  },
  {
    Name: ScreenNames.SIGN_UP,
    component: SignUpScreen,
  },
  {
    Name: ScreenNames.NEW_PASSWORD,
    component: NewPasswordScreen,
  },
  {
    Name: ScreenNames.FORGOT_PASSWORD,
    component: ForgotPasswordScreen,
  },
];
export default AuthNavigation;
