import React from 'react';
import { View, StyleSheet, Image, FlatList } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import * as yup from 'yup';

import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppCheckBox,
} from '../components/form';

const menuItems = [
  {
    title: 'Facebook',
    icon: { name: 'facebook-with-circle', color: '#4267B2' },
  },
  { title: 'Google', icon: { name: 'google--with-circle', color: '#DB4437' } },
  { title: 'Twitter', icon: { name: 'twitter-with-circle', color: '#1DA1F2' } },
];

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(4).label('Password'),
  check: yup.bool().oneOf([true], 'Accept Terms & Conditions is required'),
});

function LoginScreen() {
  state = {
    checked: false,
  };
  return (
    <Screen style={{ padding: 7 }}>
      <Image source={require('../assets/icon.png')} style={styles.logo} />
      <AppForm
        initialValues={{ email: '', password: '', check: false }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email"
          icon="email-outline"
          textContentType="emailAddress"
          keyboardType="email-address"
          name="email"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
          icon="account-lock-outline"
          secureTextEntry
          textContentType="password"
          name="password"
        />

        <AppCheckBox
          checkedIcon="check-box"
          iconType="material"
          uncheckedIcon="check-box-outline-blank"
          title="Agree to terms and conditions"
          checkedTitle="You agreed to our terms and conditions"
          name="check"
        />

        <View style={styles.button}>
          <SubmitButton title="Login" />
          <ListItem
            title="Forget Password "
            onPress={() => console.log('Forget Password')}
          />
          <AppText
            style={{
              fontSize: 22,
              top: 12,
            }}
          >
            Sign in with
          </AppText>
        </View>
      </AppForm>

      <View style={{ alignItems: 'center', marginTop: 40 }}>
        <FlatList
          data={menuItems}
          horizontal={true}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => console.log('sign in')}
              IconComponent={
                <Entypo
                  name={item.icon.name}
                  size={53}
                  color={item.icon.color}
                />
              }
            />
          )}
        />
        <View style={{ flexDirection: 'row' }}>
          <AppText>Don't have an account ?</AppText>
          <ListItem
            title="Sign Up"
            style1={{ color: colors.subtitle, fontSize: 20, marginTop: -12 }}
            onPress={() => console.log('Sign up')}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginTop: 35,
    bottom: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginTop: 18,
    alignItems: 'center',
  },
});

export default LoginScreen;
