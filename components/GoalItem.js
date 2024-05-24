import { StyleSheet, View, Text } from "react-native";

export default function GoalItem({ goalText }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{goalText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
