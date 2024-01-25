import {ToastProvider} from 'react-native-toast-notifications';
import StackNavigation from './src/navigation/StackNavigation';
import 'react-native-gesture-handler';
import {AuthProvider} from './src/context/Authcontext';

const App = () => {
  return (
    <AuthProvider>
      <ToastProvider>
        <StackNavigation />
      </ToastProvider>
    </AuthProvider>
  );
};
export default App;
