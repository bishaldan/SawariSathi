import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface TransportCardProps {
  name: string;
  price: string;
  distance: string;
  time: string;
  count: string;
}

const TransportCard: React.FC<TransportCardProps> = ({ name, price, distance, time, count }) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconWrapper}>
        <Text style={styles.icon}>🚌</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.info}>
          {price} | {distance} | {time}
        </Text>
      </View>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconWrapper: {
    backgroundColor: "#FFD700",
    borderRadius: 8,
    padding: 8,
    marginRight: 10,
  },
  icon: {
    fontSize: 20,
  },
  details: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  info: {
    fontSize: 12,
    color: "#666",
  },
  count: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#444",
  },
});

export default TransportCard;
