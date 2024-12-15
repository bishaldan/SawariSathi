import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Header from "../components/Header";
import LocationDropdown from "../components/LocationDropdown";
import { RootStackParamList } from "../types/navigationTypes";
import Ionicons from "react-native-vector-icons/Ionicons";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [myLocation, setMyLocation] = useState("");
  const [searchDestination, setSearchDestination] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [imageHeight] = useState(new Animated.Value(500));

  const transports = [
    {
      name: "Riddhi Siddhi",
      buses: "20 Buses",
      price: "Rs. 20",
      distance: "4.3 Km",
      time: "6:00am - 8:00pm",
    },
    {
      name: "Nepal Yatayat",
      buses: "33 Buses",
      price: "Rs. 20",
      distance: "4.3 Km",
      time: "6:00am - 8:00pm",
    },
    {
      name: "Nepal Tempo",
      buses: "13 Tempos",
      price: "Rs. 20",
      distance: "4.3 Km",
      time: "6:00am - 8:00pm",
    },
  ];

  const handleSearch = () => {
    if (myLocation && searchDestination) {
      setShowResults(true);
      Animated.timing(imageHeight, {
        toValue: 150,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      alert("Please select both My Location and Search Destination");
    }
  };

  const handleReset = () => {
    setMyLocation("");
    setSearchDestination("");
    setShowResults(false);
    Animated.timing(imageHeight, {
      toValue: 500,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.imageContainer, { height: imageHeight }]}>
        <Header />
        {showResults && (
          <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
            <Text style={styles.resetButtonText}>Reset</Text>
          </TouchableOpacity>
        )}
      </Animated.View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>
          {showResults
            ? "Available Transport's"
            : "Where are you traveling today?"}
        </Text>

        {!showResults && (
          <>
            <LocationDropdown
              placeholder="My location"
              onValueChange={setMyLocation}
              selectedValue={myLocation} // Pass selected value
            />
            <LocationDropdown
              placeholder="Search Destination"
              onValueChange={setSearchDestination}
              selectedValue={searchDestination} // Pass selected value
            />
            <TouchableOpacity
              style={styles.searchButton}
              onPress={handleSearch}
            >
              <Text style={styles.searchButtonText}>Search</Text>
            </TouchableOpacity>
          </>
        )}

        {showResults &&
          transports.map((transport, index) => (
            <TouchableOpacity
              key={index}
              style={styles.transportItem}
              onPress={() =>
                navigation.navigate("TransportDetails", { transport })
              }
            >
              <Text style={styles.transportName}>{transport.name}</Text>
              <Text style={styles.transportInfo}>
                {transport.buses} | {transport.price} | {transport.distance}
              </Text>
              <Text style={styles.transportTime}>{transport.time}</Text>
            </TouchableOpacity>
          ))}
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={handleReset}>
          <Ionicons name="home-outline" size={24} color="#5A8DEE" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="time-outline" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="location-outline" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  imageContainer: {
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#FFD700",
  },
  resetButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#5A8DEE",
    padding: 10,
    borderRadius: 10,
  },
  resetButtonText: { color: "#fff", fontSize: 14, fontWeight: "bold" },
  content: {
    flex: 1,
    backgroundColor: "#FEF7E5",
    padding: 20,
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  searchButton: {
    backgroundColor: "#5A8DEE",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  searchButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  transportItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  transportName: { fontSize: 18, fontWeight: "bold", color: "#333" },
  transportInfo: { fontSize: 14, color: "#666" },
  transportTime: { fontSize: 12, color: "#666", marginTop: 5 },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
});

export default HomeScreen;
