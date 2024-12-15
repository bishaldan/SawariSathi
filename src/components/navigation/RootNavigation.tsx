import { Stack } from "expo-router";
import React from "react";

const RootNavigation = () => {
  return (
    <Stack>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack>
  );
};

export default RootNavigation;
