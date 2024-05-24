import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ goalText, handleDelete, goalId }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }} //pressed feedback fpr android
        onPress={() => handleDelete(goalId)}
        style={(pressData) => pressData.pressed && styles.pressedItem} //pressed feedback for iOS
      >
        <Text style={styles.goalText}>{goalText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "rgb(12 74 110)",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
