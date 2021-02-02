import React from "react";
import { StyleSheet, Image, ScrollView, View } from "react-native";
import * as yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  AppCheckBox,
} from "../components/form";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

const validationSchema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().required().email().label("Email"),
  phone: yup.string().required().label("Phone"),
  password: yup.string().required().min(4).label("Password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Confirm Password must match the Password")
    .required("Confirm Password is required"),
  check: yup.bool().oneOf([true], "Accept Terms & Conditions is required"),
});

function RegisterScreen({ navigation }) {
  return (
    <ScrollView>
      <Screen style={{ padding: 7 }}>
        <Image source={require("../assets/icon.png")} style={styles.logo} />
        <AppForm
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
            check: false,
            name: "",
            phone: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="name"
            placeholder="Name"
            icon="account-box-outline"
            name="name"
          />
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
            placeholder="Phone Number"
            icon="card-account-phone-outline"
            textContentType="telephoneNumber"
            keyboardType="phone-pad"
            name="phone"
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
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Confirm Password"
            icon="account-check-outline"
            secureTextEntry
            textContentType="password"
            name="confirmPassword"
          />

          <AppCheckBox
            checkedIcon="check-box"
            iconType="material"
            uncheckedIcon="check-box-outline-blank"
            title="Agree to terms and conditions"
            checkedTitle="You agreed to our terms and conditions"
            name="check"
          />
          <SubmitButton title="Register" />
        </AppForm>
        <View style={{ flexDirection: "row" }}>
          <AppText>Already have an account ?</AppText>
          <ListItem
            title="Sign In"
            style1={{ color: colors.subtitle, fontSize: 20, marginTop: -12 }}
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </Screen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 60,
    alignSelf: "center",
    bottom: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginTop: 18,
    alignItems: "center",
  },
});

export default RegisterScreen;
