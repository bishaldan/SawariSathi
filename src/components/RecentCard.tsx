import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

type RecentCardProps = {
  from: string;
  to: string;
  price: number;
  distance: number;
};

const RecentCard: React.FC<RecentCardProps> = ({ from, to, price, distance }) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <MaterialIcons name="place" size={24} color="#007bff" />
        <Text style={styles.text}>
          {from} → {to}
        </Text>
      </View>
      <View style={styles.detailsRow}>
        <Text style={styles.detailsText}>Rs. {price}</Text>
        <Ionicons name="navigate" size={16} color="#666" />
        <Text style={styles.detailsText}>{distance} Km</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  detailsText: {
    fontSize: 14,
    color: "#666",
    marginLeft: 5,
  },
});

export default RecentCard;
