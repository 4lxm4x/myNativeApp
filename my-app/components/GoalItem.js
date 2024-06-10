import { View, Text, StyleSheet, Button, Pressable } from "react-native";

export default function GoalItem({ goal, onDelete }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "yellow" }}
        onPress={onDelete.bind(this, goal.id)}
        style={({ pressed }) => pressed && styles.itemPressed}
      >
        <Text style={styles.goalText}>{goal.text}</Text>
      </Pressable>
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
    // paddingLeft: 10,
  },
  goalText: {
    color: "white",
    marginVertical: 5,
    marginLeft: 0,
    paddingLeft: 10,
  },
  itemPressed: {
    opacity: 0.5,
  },
});
