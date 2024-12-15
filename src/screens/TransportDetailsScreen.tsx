import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigationTypes";

type TransportDetailsRouteProp = RouteProp<RootStackParamList, "TransportDetails">;

const TransportDetailsScreen: React.FC = () => {
  const route = useRoute<TransportDetailsRouteProp>();
  const { transport } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{transport.name}</Text>
      <Text style={styles.info}>Buses: {transport.buses}</Text>
      <Text style={styles.info}>Price: {transport.price}</Text>
      <Text style={styles.info}>Distance: {transport.distance}</Text>
      <Text style={styles.info}>Operating Time: {transport.time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10, color: "#333" },
  info: { fontSize: 18, marginBottom: 5, color: "#555" },
});

export default TransportDetailsScreen;
