import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [listOfCourseGoals, setListOfCourseGoals] = useState([]);

  function addGoalHandler(newGoal) {
    // possible, but better way would be to use an arrow function as done below:
    // setListOfCourseGoals([enteredGoalText, ...listOfCourseGoals]);
    setListOfCourseGoals((currentListOfCourseGoals) => [
      ...currentListOfCourseGoals,
      { text: newGoal, key: Math.random().toString() },
    ]);
    // console.log(listOfCourseGoals);
  }

  return (
    <View style={styles.appContainer}>
      <View>
        <Text style={styles.headline}>React Course Goals App</Text>
      </View>
      <GoalInput handleAddGoal={addGoalHandler} style={styles.goalInputComp} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={listOfCourseGoals}
          renderItem={(itemData) => {
            return <GoalItem goalText={itemData.item.text} />;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
  },
  headline: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "rgb(12 74 110)",
    marginBottom: 36,
  },
  goalsContainer: {
    flex: 8,
  },
});
