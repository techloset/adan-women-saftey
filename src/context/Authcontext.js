import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [authData, setAuthData] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const storedData = await AsyncStorage.getItem('auth');
        const token = await AsyncStorage.getItem('token');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          setAuthData({...parsedData, token});
        }
      } catch (error) {
        console.error('Error checking login status: ', error);
      }
    };

    checkLoginStatus();
  }, [setAuthData]);

  const contextValue = React.useMemo(
    () => ({authData, setAuthData}),
    [authData, setAuthData],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
