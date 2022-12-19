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
  import MI from 'react-native-vector-icons/MaterialIcons';
  import colors from '../utils/colors';
  
  const Signup = () => {
    const navigation = useNavigation();
    const goToHome = () => {
      navigation.navigate(navigations.HOME);
    };
  
    return (
      <SafeAreaView style={styles.main}>
        <LinearGradient
          colors={[colors.WHITE, colors.WHITE]}
          style={styles.linearGradient}>
          <Text style={styles.title}>Happy to have you here!</Text>
          <View style={styles.loginWrapper}>
          <View style={styles.inputControl}>
              <Text style={styles.text}>Email</Text>
              <View style={styles.control}>
                <MI
                  name="person"
                  size={23}
                  color={colors.PRIMARY}
                  style={styles.emailIcon}
                />
                <TextInput
                  // onChangeText={val => updateState({name: 'email', value: val})}
                  placeholderTextColor={colors.PRIMARY}
                  placeholder="First name"
                  style={styles.input}
                />
              </View>
            </View>


            <View style={styles.inputControl}>
              <Text style={styles.text}>Email</Text>
              <View style={styles.control}>
                <MI
                  name="person"
                  size={23}
                  color={colors.PRIMARY}
                  style={styles.emailIcon}
                />
                <TextInput
                  // onChangeText={val => updateState({name: 'email', value: val})}
                  placeholderTextColor={colors.PRIMARY}
                  placeholder="Last name"
                  style={styles.input}
                />
              </View>
            </View>

            <View style={styles.inputControl}>
              <Text style={styles.text}>Email</Text>
              <View style={styles.control}>
                <MI
                  name="alternate-email"
                  size={23}
                  color={colors.PRIMARY}
                  style={styles.emailIcon}
                />
                <TextInput
                  // onChangeText={val => updateState({name: 'email', value: val})}
                  placeholderTextColor={colors.PRIMARY}
                  placeholder="Email"
                  style={styles.input}
                />
              </View>
            </View>
  
            <View style={styles.inputControl}>
              <Text style={styles.text}>Password</Text>
              <View style={styles.control}>
                <MI
                  name="lock-open"
                  size={23}
                  color={colors.PRIMARY}
                  style={styles.emailIcon}
                />
                <TextInput
                  secureTextEntry
                  // onChangeText={val =>
                  //   updateState({name: 'password', value: val})
                  // }
                  placeholderTextColor={colors.PRIMARY}
                  placeholder="Password"
                  style={styles.input}
                />
              </View>
            </View>
            <View style={styles.forgot}>
              <Text style={styles.text}>Forgot Password ?</Text>
            </View>
            <View style={styles.inputControl}>
              <TouchableOpacity activeOpacity={1} style={styles.Button} onPress={goToHome}>
                <Text style={styles.btnText}>SIGNUP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </SafeAreaView>
    );
  };
  
  export default Signup;
  
  export const  styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.WHITE,
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
      color: colors.PRIMARY,
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
      backgroundColor: colors.WHITE,
      borderRadius: 5,
      elevation: 0.7,
      color: '#fff',
      shadowOffset: {width: 10, height: 20},
      shadowColor: '#fff',
      marginTop: 5,
      borderColor:colors.PRIMARY,
      borderStyle:'solid',
      borderWidth:1
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
      backgroundColor:colors.PRIMARY,
      borderRadius: 5,
      elevation:2,
      color: colors.WHITE,
      shadowOffset: {width: 10, height: 20},
  
      shadowColor: '#419ff1',
      marginTop: 3,
    },
    btnText: {
      color:colors.WHITE,
      fontFamily: 'Quicksand-Bold',
      fontWeight:'bold'
    },
    title: {
      fontSize: 25,
      fontFamily: 'Quicksand-Bold',
      color:colors.PRIMARY,
      fontWeight:'bold'
    },
    forgot: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: 8,
    },
  });
  