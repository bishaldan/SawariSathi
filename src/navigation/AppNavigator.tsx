import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import TransportDetailsScreen from "../screens/TransportDetailsScreen";

export type RootStackParamList = {
  Home: undefined;
  TransportDetails: {
    transport: {
      name: string;
      buses: string;
      price: string;
      distance: string;
      time: string;
    };
  };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="TransportDetails"
        component={TransportDetailsScreen}
        options={{ title: "Transport Details" }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
