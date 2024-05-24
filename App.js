import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.appContainer}>
        <View>
          <Text style={styles.headline}>React Course Goals App</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Your course goal!" style={styles.textInput} />
          <Button title="Add goal" />
        </View>
        <View style={styles.goalsContainer}>
          <Text>List of goals...</Text>
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
    color: "blue",
    textDecorationLine: "underline",
    marginBottom: 36,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
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
});
