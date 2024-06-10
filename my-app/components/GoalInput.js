import { View, StyleSheet, Button, TextInput } from "react-native";
import { useState } from "react";

function GoalInput({ props }) {
  const [goal, setGoal] = useState("");

  function handleButtonPress() {
    props(goal);
  }

  function handleChangeText(goal) {
    setGoal(goal);
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Input something"
        onChangeText={handleChangeText}
      />
      <Button title="Add Goal" onPress={handleButtonPress}></Button>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "80%",
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
});
