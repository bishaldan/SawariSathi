// import React from "react";
// import { View, Text, StyleSheet, ImageBackground, Dimensions } from "react-native";

// // Get screen dimensions
// const { width, height } = Dimensions.get("window");

// const Header = () => {
//   return (
//     <ImageBackground
//       source={require("../assets/images/highway-through-rocky-canyon.jpg")} // Update the image path and extension
//       style={styles.headerBackground}
//       resizeMode="cover"
//     >
//       <View style={styles.overlay}>
//         <View style={styles.headerTextContainer}>
//           <Text style={styles.title}>SawariSathi</Text>
//           <Text style={styles.subtitle}>Your travel guide for the city</Text>
//         </View>
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   headerBackground: {
//     width: "100%",
//     height: height * 0.6, // Makes the image cover 45% of the screen height
//     justifyContent: "center",
//   },
//   overlay: {
//     flex: 1,
//     backgroundColor: "rgba(0, 0, 0, 0.3)", // Dark semi-transparent overlay
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   headerTextContainer: {
//     alignItems: "center",
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: "bold",
//     color: "#fff",
//     textAlign: "center",
//   },
//   subtitle: {
//     fontSize: 18,
//     color: "#fff",
//     marginTop: 5,
//     textAlign: "center",
//   },
// });

// export default Header;

import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const Header = () => {
  return (
    <ImageBackground
      source={require("../assets/images/highway-through-rocky-canyon.jpg")}
      style={styles.image}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>SawariSathi</Text>
        <Text style={styles.subtitle}>Your travel guide for the city</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: { flex: 1, justifyContent: "center", alignItems: "center" },
  overlay: { backgroundColor: "rgba(0, 0, 0, 0.3)", padding: 10 },
  title: { color: "#fff", fontSize: 32, fontWeight: "bold" },
  subtitle: { color: "#fff", fontSize: 18 },
});

export default Header;
