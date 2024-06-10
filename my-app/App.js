import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);

  function handleInput(goal) {
    setGoalsList((goals) => [
      ...goals,
      { text: goal, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput props={handleInput} />
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={goalsList}
          renderItem={(itemData) => {
            return <GoalItem props={itemData.item} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 50,
    marginHorizontal: 20,
    backgroundColor: "#fff",

    justifyContent: "flex-start",
    height: "100%",
  },

  goalsContainer: {
    flex: 5,

    margin: 10,
  },
});
