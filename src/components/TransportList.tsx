// import React from "react";
// import { View, Text, ScrollView, StyleSheet } from "react-native";
// import TransportCard from "./TransportCard";

// interface TransportListProps {
//   transports: {
//     name: string;
//     price: string;
//     distance: string;
//     time: string;
//     buses: string;
//   }[];
// }

// const TransportList: React.FC<TransportListProps> = ({ transports }) => {
//   return (
//     <View>
//       <Text style={styles.title}>Available Transport’s</Text>
//       <ScrollView style={styles.list}>
//         {transports.map((item, index) => (
//           <TransportCard
//             key={index}
//             name={item.name}
//             price={item.price}
//             distance={item.distance}
//             time={item.time}
//             count={item.buses}
//           />
//         ))}
//       </ScrollView>
//       <Text style={styles.endText}>End of Results</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//     color: "#333",
//   },
//   list: {
//     marginVertical: 10,
//   },
//   endText: {
//     textAlign: "center",
//     fontSize: 12,
//     color: "#888",
//     marginTop: 10,
//   },
// });

// export default TransportList;




import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

interface Transport {
  name: string;
  buses: string;
  price: string;
  distance: string;
  time: string;
}

interface Props {
  transports: Transport[];
}

const TransportList: React.FC<Props> = ({ transports }) => {
  return (
    <FlatList
      data={transports}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.details}>{`${item.buses} | ${item.price} | ${item.distance}`}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 3,
  },
  name: { fontSize: 18, fontWeight: "bold", color: "#333" },
  details: { color: "#666", marginTop: 5 },
  time: { color: "#666", marginTop: 5 },
});

export default TransportList;
