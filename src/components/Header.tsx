import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const Header = () => {
  return (
    <ImageBackground
      source={require("../assets/images/city-background.jpg")} // Replace with your image path
      style={styles.headerBackground}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>SawariSathi</Text>
          <Text style={styles.subtitle}>Your travel guide for the city</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerBackground: {
    height: 300, // Increased height
    width: 430,
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent overlay for better readability
    justifyContent: "center",
  },
  headerTextContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32, // Increased font size for better emphasis
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 18, // Adjusted font size
    color: "#fff",
    marginTop: 5,
  },
});

export default Header;
