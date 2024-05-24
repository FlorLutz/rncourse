import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function GoalInput({ handleAddGoal }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [isInvalidInput, setIsInvalidInput] = useState(false);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function onAddGoal() {
    if (enteredGoalText.trim() === "") {
      setIsInvalidInput(true);
    } else {
      setIsInvalidInput(false);
      handleAddGoal(enteredGoalText);
    }
    setEnteredGoalText("");
  }

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Your course goal!"
            style={styles.textInput}
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          <Button title="Add goal" onPress={onAddGoal} />
        </View>
        {isInvalidInput && (
          <View style={styles.error}>
            <Text style={styles.errorText}>
              ⚠️ Please provide a valid text before adding goal
            </Text>
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccccc",
    marginBottom: 12,
  },
  error: {
    paddingTop: 12,
    alignItems: "center",
  },
  errorText: {
    color: "red",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
