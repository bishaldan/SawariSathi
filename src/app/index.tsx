import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import RecentCard from "../components/RecentCard";
import LocationDropdown from "../components/LocationDropdown"; // Import the new dropdown component
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <View style={styles.content}>
        {/* Travel Options Section */}
        <Text style={styles.sectionTitle}>Where are you traveling today?</Text>
        <View style={styles.dropdownContainer}>
          {/* Location Dropdown */}
          <LocationDropdown />

          {/* Search Destination Input */}
          <View style={styles.dropdownWrapper}>
            <Ionicons name="search-outline" size={20} color="#666" style={styles.icon} />
            <TextInput
              placeholder="Search Destination"
              style={styles.textInput}
              placeholderTextColor="#aaa" // Softer placeholder color
            />
          </View>
        </View>

        {/* Recent Section */}
        <View style={styles.recentSection}>
          <Text style={styles.sectionTitle}>Recent's</Text>
          <TouchableOpacity style={styles.arrowButton}>
            <Ionicons name="arrow-forward" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Recent Cards */}
        <RecentCard from="Koteshwor" to="Putalisadak" price={20} distance={4.3} />
        <RecentCard from="New Road" to="Bhaktapur" price={40} distance={12.1} />
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Ionicons name="home-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="time-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="location-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: "#FBF8EF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  dropdownContainer: {
    marginBottom: 30,
  },
  dropdownWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15, // Spacing between dropdowns
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadows
  },
  icon: {
    marginRight: 10, // Add spacing between the icon and input
  },
  textInput: {
    flex: 1, // Take up remaining space
    fontSize: 16,
    color: "#333",
    paddingVertical: 12, // Vertical padding for better alignment
  },
  recentSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  arrowButton: {
    padding: 5,
  },
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
