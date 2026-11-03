import React from 'react';

import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';

// STUDENT CARD COMPONENT
export default function StudentCard({
  id,
  name,
  year,
  photoUrl,
  flagged,
  onToggleFlag,
}) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: photoUrl }}
        style={styles.studentImage}
      />

      <View style={styles.studentInfo}>
        <Text style={styles.studentName}>
          {name}
        </Text>

        <Text style={styles.studentYear}>
          {year}
        </Text>

        <Pressable
          onPress={() => onToggleFlag(id)}
          style={({ pressed }) => [
            styles.flagButton,
            flagged && styles.flaggedButton,
            pressed && styles.pressedButton,
          ]}
        >
          <Text style={styles.flagText}>
            {flagged ? "Flagged" : "Flag for Advising"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

// STYLESHEET
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 12,
    marginBottom: 12,
    borderRadius: 12,
  },
  studentImage: {
    width: 65,
    height: 65,
    borderRadius: 35,
    marginRight: 15,
  },
  studentInfo: {
    flex: 1,
  },
  studentName: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#222222",
  },
  studentYear: {
    fontSize: 14,
    color: "#666666",
    marginVertical: 5,
  },
  flagButton: {
    backgroundColor: "#2563EB",
    padding: 9,
    borderRadius: 7,
    alignSelf: "flex-start",
  },
  flaggedButton: {
    backgroundColor: "#16A34A",
  },
  pressedButton: {
    opacity: 0.6,
  },
  flagText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
