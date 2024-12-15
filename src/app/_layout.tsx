import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      {/* Home screen without the header */}
      <Stack.Screen
        name="index"
        options={{
          headerShown: false, // Hide the header
        }}
      />
    </Stack>
  );
};

export default RootLayout;
