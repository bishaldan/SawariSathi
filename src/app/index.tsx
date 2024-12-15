// import React, { useState } from "react";
// import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import Header from "../components/Header";
// import LocationDropdown from "../components/LocationDropdown";
// import TransportList from "../components/TransportList";

// const HomeScreen = () => {
//   const [myLocation, setMyLocation] = useState("");
//   const [searchDestination, setSearchDestination] = useState("");
//   const [showResults, setShowResults] = useState(false);
//   const [imageHeight, setImageHeight] = useState(new Animated.Value(500)); // Animated image height
//   const [lastPress, setLastPress] = useState<number>(0);
//   const transports = [
//     { name: "Riddhi Siddhi", buses: "20 Buses", price: "Rs. 20", distance: "4.3 Km", time: "6:00am - 8:00pm" },
//     { name: "Nepal Yatayat", buses: "33 Buses", price: "Rs. 20", distance: "4.3 Km", time: "6:00am - 8:00pm" },
//     { name: "Nepal Tempo", buses: "13 Tempos", price: "Rs. 20", distance: "4.3 Km", time: "6:00am - 8:00pm" },
//     { name: "Nepal MicroBus", buses: "17 Microbus", price: "Rs. 20", distance: "4.3 Km", time: "6:00am - 8:00pm" },
//   ];

//   // Handle Search
//   const handleSearch = () => {
//     if (myLocation && searchDestination) {
//       setShowResults(true);

//       // Animate the image height
//       Animated.timing(imageHeight, {
//         toValue: 150,
//         duration: 500,
//         useNativeDriver: false,
//       }).start();
//     } else {
//       alert("Please select both My location and Search Destination");
//     }
//   };

//   // Reset Functionality
//   const handleReset = () => {
//     setMyLocation(""); // Clear location
//     setSearchDestination(""); // Clear destination
//     setShowResults(false); // Hide results

//     // Reset image height
//     Animated.timing(imageHeight, {
//       toValue: 500,
//       duration: 500,
//       useNativeDriver: false,
//     }).start();
//   };
//   // Double Click Handler
//   const handleDoubleClick = () => {
//     const time = new Date().getTime(); // Current time
//     const DOUBLE_PRESS_DELAY = 100; // Double-click threshold in milliseconds

//     if (time - lastPress < DOUBLE_PRESS_DELAY) {
//       // Detected double-click
//       handleReset(); // Call the reset function
//     }
//     setLastPress(time); // Update the last press time
//   };

//   return (
//     <View style={styles.container}>
//       {/* Animated Header Image */}
//       <Animated.View style={[styles.imageContainer, { height: imageHeight }]}>
//         <Header />
//       </Animated.View>

//       {/* Main Content */}
//       <View style={styles.content}>
//         <Text style={styles.sectionTitle}>
//           {showResults ? "Search Results" : "Where are you traveling today?"}
//         </Text>

//         {/* Dropdowns */}
//         <LocationDropdown
//           placeholder="My location"
//           options={[
//             { label: "Koteshwor", value: "koteshwor" },
//             { label: "Putalisadak", value: "putalisadak" },
//             { label: "New Road", value: "newroad" },
//           ]}
//           onValueChange={setMyLocation}
//           selectedValue={myLocation}
//         />
//         <LocationDropdown
//           placeholder="Search Destination"
//           options={[
//             { label: "Koteshwor", value: "koteshwor" },
//             { label: "Putalisadak", value: "putalisadak" },
//             { label: "New Road", value: "newroad" },
//           ]}
//           onValueChange={setSearchDestination}
//           selectedValue={searchDestination}
//         />

//         {/* Search Button */}
//         <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
//           <Text style={styles.searchButtonText}>Search</Text>
//         </TouchableOpacity>

//         {/* Transport List */}
//         {showResults && (
//           <>
//             <TransportList transports={transports} />
//           </>
//         )}
//       </View>

//       {/* Bottom Navigation */}
//       <View style={styles.bottomNav}>
//         <TouchableOpacity onPress={handleReset}>
//           <Ionicons name="home-outline" size={24} color="#5A8DEE" />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Ionicons name="time-outline" size={24} color="#333" />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Ionicons name="location-outline" size={24} color="#333" />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <Ionicons name="person-outline" size={24} color="#333" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//   },
//   imageContainer: {
//     width: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//     overflow: "hidden",
//   },
//   content: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingVertical: 20,
//     backgroundColor: "#FEF7E5",
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     marginTop: -30,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 20,
//     color: "#333",
//   },
//   searchButton: {
//     backgroundColor: "#5A8DEE",
//     paddingVertical: 12,
//     borderRadius: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 10,
//   },
//   searchButtonText: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   bottomNav: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     paddingVertical: 15,
//     backgroundColor: "#fff",
//     borderTopWidth: 1,
//     borderColor: "#ddd",
//   },
// });

// export default HomeScreen;


import HomeScreen from "../screens/HomeScreen";

export default HomeScreen;
