import React, {useEffect, useState} from 'react';
import {Alert, View, StyleSheet, TextInput, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import {validateEmail} from '../../utils/stringUtils';
import { navigate } from '../../navigation/NavigationService';

const Login = props => {
  const [data, setData] = useState({
    email: '',
    password: '',
    error: '',
  });

  //Sign in
  const signIn = () => {
    if(validate()){
      auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        console.log('User account created & signed in!');
        navigate('Home');
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        Alert.alert('Please check Email or Password')
      });
    }
   else{
    Alert.alert('Please check Email or Password')
   }
  };

  const validate = () => {
    if (data.email === '' || data.password === '') {
      return false;
    } else if (!validateEmail(data.email)) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email Address"
        style={styles.textStyle}
        secureTextEntry={false}
        value={data.email}
        onChangeText={text =>
          setData({
            ...data,
            email: text,
          })
        }
      />

      <TextInput
        placeholder="Password"
        style={styles.textStyle}
        secureTextEntry={true}
        value={data.password}
        onChangeText={text =>
          setData({
            ...data,
            password: text,
          })
        }
      />

      <View style={styles.buttonStyle}>
        <Button title="Sign In" onPress={signIn} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    padding: 10,
  },
  textStyle: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  buttonStyle: {
    marginTop: 20,
  },
});

export default Login;
