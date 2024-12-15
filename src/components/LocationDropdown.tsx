import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Ionicons } from "@expo/vector-icons";

const LocationDropdown = () => {
  const [selectedLocation, setSelectedLocation] = useState("");

  return (
    <View style={styles.dropdownWrapper}>
      <RNPickerSelect
        onValueChange={(value) => setSelectedLocation(value)}
        items={[
          { label: "Kathmandu", value: "kathmandu" },
          { label: "Lalitpur", value: "lalitpur" },
          { label: "Bhaktapur", value: "bhaktapur" },
        ]}
        placeholder={{
          label: "My location",
          value: null,
          color: "#aaa", // Placeholder text color
        }}
        style={{
          inputAndroid: styles.dropdown,
          inputIOS: styles.dropdown,
          placeholder: styles.placeholder,
        }}
        value={selectedLocation}
        Icon={() => <Ionicons name="chevron-down" size={20} color="#666" style={styles.chevron} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownWrapper: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: "center",
  },
  dropdown: {
    fontSize: 16,
    color: "#333",
    paddingVertical: 8,
  },
  placeholder: {
    color: "#aaa",
    fontSize: 16,
  },
  chevron: {
    position: "absolute",
    right: 10, // Align the chevron to the far right
    top: "40%",
  },
});

export default LocationDropdown;
