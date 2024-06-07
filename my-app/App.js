import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput}></TextInput>
      <Button title="Click"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    alignItems: "center",

    justifyContent: "space-between",
    flexDirection: "row",
    height: "50%",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "80%",
    placeholder: "Input something",
  },
});
