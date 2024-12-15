// import React from "react";
// import { View, StyleSheet } from "react-native";
// import RNPickerSelect from "react-native-picker-select";

// interface LocationDropdownProps {
//   placeholder: string;
//   options: { label: string; value: string }[];
//   onValueChange: (value: string) => void;
//   selectedValue?: string; // Allow selected value
// }

// const LocationDropdown: React.FC<LocationDropdownProps> = ({
//   placeholder,
//   options,
//   onValueChange,
//   selectedValue,
// }) => {
//   return (
//     <View style={styles.container}>
//       <RNPickerSelect
//         onValueChange={onValueChange}
//         items={options}
//         placeholder={{ label: placeholder, value: null }}
//         value={selectedValue} // Bind selected value
//         style={pickerSelectStyles}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginBottom: 15,
//     borderRadius: 10,
//     backgroundColor: "#fff",
//     borderWidth: 1,
//     borderColor: "#ddd",
//     paddingHorizontal: 10,
//   },
// });

// const pickerSelectStyles = {
//   inputIOS: {
//     fontSize: 16,
//     paddingVertical: 12,
//     paddingHorizontal: 10,
//     color: "#333",
//   },
//   inputAndroid: {
//     fontSize: 16,
//     paddingHorizontal: 10,
//     color: "#333",
//   },
// };

// export default LocationDropdown;import React from "react";
import React from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

interface Props {
  placeholder: string;
  onValueChange: (value: string) => void;
  selectedValue: string; // Add this prop to control the value
}

const LocationDropdown: React.FC<Props> = ({ placeholder, onValueChange, selectedValue }) => {
  return (
    <View style={styles.dropdownContainer}>
      <RNPickerSelect
        onValueChange={onValueChange}
        value={selectedValue || ""} // Ensure value is never null
        placeholder={{ label: placeholder, value: "" }}
        items={[
          { label: "Koteshwor", value: "koteshwor" },
          { label: "Putalisadak", value: "putalisadak" },
          { label: "New Road", value: "newroad" },
        ]}
        style={{
          inputAndroid: styles.input,
          inputIOS: styles.input,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: { marginBottom: 15 },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
});

export default LocationDropdown;
