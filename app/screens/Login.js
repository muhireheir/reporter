import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import navigations from '../utils/navigation';
import LinearGradient from 'react-native-linear-gradient';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../utils/colors';

const Login = () => {
  const navigation = useNavigation();
  const goToHome = () => {
    navigation.navigate(navigations.HOME);
  };

  return (
    <SafeAreaView style={styles.main}>
      <LinearGradient
        colors={['#419ff1', '#1287ed']}
        style={styles.linearGradient}>
        <Text style={styles.title}>SIGN IN</Text>
        <View style={styles.loginWrapper}>
          <View style={styles.inputControl}>
            <Text style={styles.text}>Email</Text>
            <View style={styles.control}>
              <MCI
                name="email"
                size={23}
                color="#fff"
                style={styles.emailIcon}
              />
              <TextInput
                // onChangeText={val => updateState({name: 'email', value: val})}
                placeholderTextColor="#fff"
                placeholder="Email"
                style={styles.input}
              />
            </View>
          </View>

          <View style={styles.inputControl}>
            <Text style={styles.text}>Password</Text>
            <View style={styles.control}>
              <MCI
                name="shield-key"
                size={23}
                color="#fff"
                style={styles.emailIcon}
              />
              <TextInput
                secureTextEntry
                // onChangeText={val =>
                //   updateState({name: 'password', value: val})
                // }
                placeholderTextColor="#fff"
                placeholder="Password"
                style={styles.input}
              />
            </View>
          </View>
          <View style={styles.forgot}>
            <Text style={styles.text}>Forgot Password ?</Text>
          </View>
          <View style={styles.inputControl}>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.btnText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Login;

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.PRIMARY,
  },
  main: {
    flex: 1,
  },
  loginWrapper: {
    width: '90%',
    height: '60%',
  },
  input: {
    width: '87%',
    color: '#fff',
    height: '100%',
    paddingLeft: 9,
    fontFamily: 'Quicksand-Medium',
  },
  control: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#419ff1',
    borderRadius: 5,
    elevation: 0.7,
    color: '#fff',
    shadowOffset: {width: 10, height: 20},
    shadowColor: '#fff',
    marginTop: 5,
  },
  emailIcon: {},
  inputControl: {
    width: '100%',
    marginTop: 17,
  },
  text: {
    color: '#fff',
    fontFamily: 'Quicksand-Medium',
    fontSize: 14,
  },
  Button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
    color: '#fff',
    shadowOffset: {width: 10, height: 20},
    shadowColor: '#419ff1',
    marginTop: 3,
  },
  btnText: {
    color: '#419ff1',
    fontFamily: 'Quicksand-Bold',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Quicksand-Bold',
    color: '#fff',
  },
  forgot: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
});
