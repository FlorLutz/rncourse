import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

export default function GoalInput({ handleAddGoal, isModalShown, closeModal }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [isInvalidInput, setIsInvalidInput] = useState(false);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function onAddGoal() {
    if (enteredGoalText.trim() === "") {
      setIsInvalidInput(true);
    } else {
      handleAddGoal(enteredGoalText);
      setIsInvalidInput(false);
      closeModal();
    }
    setEnteredGoalText("");
  }

  return (
    <Modal visible={isModalShown} animationType="slide" style={styles.modal}>
      <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/images/goal.png")}
            style={styles.image}
          />
          <TextInput
            placeholder="Your course goal!"
            style={styles.textInput}
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Cancel"
                onPress={closeModal}
                color="rgb(225 29 72)"
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Add goal"
                onPress={onAddGoal}
                color="rgb(12 74 110)"
              />
            </View>
          </View>
        </View>
        {isInvalidInput && (
          <View style={styles.error}>
            <Text style={styles.errorText}>
              ⚠️ Please provide a valid text before adding goal
            </Text>
          </View>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
  },
  mainContainer: {
    backgroundColor: "#38bdf8",
    flex: 1,
    padding: 18,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "rgb(12 74 110)",
    borderRadius: 6,
    color: "rgb(12 74 110)",
    width: "100%",
    padding: 16,
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
  error: {
    paddingTop: 12,
    alignItems: "center",
  },
  errorText: {
    color: "red",
  },
});
