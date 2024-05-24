import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ goalText, handleDelete, goalId }) {
  return (
    <Pressable onPress={() => handleDelete(goalId)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{goalText}</Text>
      </View>
    </Pressable>
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
