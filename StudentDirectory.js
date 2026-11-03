
import React, { useState } from 'react';

import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';

import StudentCard from './StudentCard';

// STUDENTS ARRAY
const students = [
  {
    id: "s1",
    name: "Ana Cruz",
    year: "3rd Year",
    photoUrl: "https://i.pravatar.cc/100?img=1"
  },
  {
    id: "s2",
    name: "Bea Santos",
    year: "2nd Year",
    photoUrl: "https://i.pravatar.cc/100?img=2"
  },
  {
    id: "s3",
    name: "Cid Ramos",
    year: "4th Year",
    photoUrl: "https://i.pravatar.cc/100?img=3"
  },
  {
    id: "s4",
    name: "Dex Alonzo",
    year: "1st Year",
    photoUrl: "https://i.pravatar.cc/100?img=4"
  },
  {
    id: "s5",
    name: "Eli Tan",
    year: "3rd Year",
    photoUrl: "https://i.pravatar.cc/100?img=5"
  },
];

// STUDENT DIRECTORY COMPONENT
export default function StudentDirectory() {
  const [studentList, setStudentList] = useState(students);
  const [query, setQuery] = useState("");

  const filteredStudents = studentList.filter(
    (student) =>
      student.name.toLowerCase().includes(query.toLowerCase())
  );

  const toggleFlag = (id) => {
    setStudentList((previousStudents) =>
      previousStudents.map((student) =>
        student.id === id
          ? { ...student, flagged: !student.flagged }
          : student
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Student Directory
      </Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search student name..."
        value={query}
        onChangeText={setQuery}
      />

      <ScrollView>
        {filteredStudents.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            year={student.year}
            photoUrl={student.photoUrl}
            flagged={!!student.flagged}
            onToggleFlag={toggleFlag}
          />
        ))}

        {filteredStudents.length === 0 && (
          <Text style={styles.noResults}>
            No student found.
          </Text>
        )}
      </ScrollView>
    </View>
  );
}

// STYLESHEET
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F5FA",
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#222222",
  },
  searchInput: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    marginBottom: 15,
  },
  noResults: {
    textAlign: "center",
    marginTop: 20,
    color: "#666666",
  },
});
    
