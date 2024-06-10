import { View, Text, StyleSheet, Button } from "react-native";

export default function GoalItem({ props }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "purple",
    borderRadius: 5,
    marginVertical: 5,
    paddingLeft: 10,
  },
  goalText: {
    color: "white",
    marginVertical: 5,
    // paddingLeft: 10,
  },
});
