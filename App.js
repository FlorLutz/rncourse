import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [listOfCourseGoals, setListOfCourseGoals] = useState([]);
  const [isModalShown, setIsModalShown] = useState(false);

  function handleAddGoal(newGoal) {
    // possible, but better way would be to use an arrow function as done below:
    // setListOfCourseGoals([enteredGoalText, ...listOfCourseGoals]);
    setListOfCourseGoals((currentListOfCourseGoals) => [
      ...currentListOfCourseGoals,
      { text: newGoal, key: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setListOfCourseGoals((currentListOfCourseGoals) =>
      currentListOfCourseGoals.filter((goal) => goal.key !== id)
    );
  }

  function handleToggleModal() {
    setIsModalShown(!isModalShown);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View>
          <Text style={styles.headline}>React Course Goals App</Text>
        </View>
        <Button
          title="Add New Goal"
          color="rgb(12 74 110)"
          onPress={handleToggleModal}
        />
        <GoalInput
          handleAddGoal={handleAddGoal}
          style={styles.goalInputComp}
          isModalShown={isModalShown}
          closeModal={handleToggleModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={listOfCourseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  goalText={itemData.item.text}
                  goalId={itemData.item.key}
                  handleDelete={deleteGoalHandler}
                />
              );
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
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
