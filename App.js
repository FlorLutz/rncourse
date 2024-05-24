import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [listOfCourseGoals, setListOfCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    // possible, but better way would be to use an arrow function as done below:
    // setListOfCourseGoals([enteredGoalText, ...listOfCourseGoals]);
    setListOfCourseGoals((currentListOfCourseGoals) => [
      ...currentListOfCourseGoals,
      enteredGoalText,
    ]);
    console.log(listOfCourseGoals);
  }

  return (
    <View style={styles.appContainer}>
      <View>
        <Text style={styles.headline}>React Course Goals App</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your course goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {listOfCourseGoals.map((goal) => (
          <View key={goal} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
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
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 8,
  },
  goalItem: {
    padding: 8,
    margin: 8,
    borderRadius: 6,
    backgroundColor: "rgb(12 74 110)",
  },
  goalText: {
    color: "white",
  },
});
