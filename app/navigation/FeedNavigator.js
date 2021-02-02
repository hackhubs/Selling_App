import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={ListingsScreen} />
    <Stack.Screen name="Details" component={ListingDetailsScreen} />
  </Stack.Navigator>
);
export default FeedNavigator;
