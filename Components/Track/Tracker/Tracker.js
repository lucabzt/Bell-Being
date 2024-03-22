import React, { useState } from 'react';
import { View, Text, FlatList, StatusBar, StyleSheet, TouchableOpacity, Linking, TouchableWithoutFeedback } from 'react-native';
import { CheckBox } from 'react-native-elements';

const Tracker = ({setN, n}) => {
  const initialTodos = [
    { id: 1, text: 'Article on Habit-Formation', completed: false, score: 2 , url: 'https://www.psychologytoday.com/us/basics/habit-formation'},
    { id: 2, text: 'Article on Work-Environments', completed: false, score: 4, url: 'https://factorialhr.com/blog/how-to-create-a-healthy-work-environment/'},
    { id: 3, text: 'Go for a Walk', completed: false, score: 2},
    { id: 4, text: 'Go to Event "Bowling" on Friday', completed: false, score: 6},
  ];
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (id) => {
    setTodos(
        todos.map(todo => {
          if (todo.id === id) {
            let newN = n + (todo.completed ? -n : todo.score/2);
            setN((newN > 8 ? 8 : newN < 1 ? 1 : newN));
            return { ...todo, completed: !todo.completed }; // Toggle completed status
          }
          return todo; // Return unmodified todo for non-matching ids
        }))};

  const openUrl = async (url) => {
    const isSupported = await Linking.canOpenURL(url);

    if (isSupported) {
      await Linking.openURL(url);
    } else {
      console.log(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <TouchableWithoutFeedback onPress={() => setN(1)}>
        <Text style={styles.title}>Habit Tracker</Text>
      </TouchableWithoutFeedback>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <CheckBox
              checked={item.completed}
              onPress={() => toggleTodo(item.id)}
              checkedColor='rgba(248, 94, 43, 0.48)' // colorTomato when checked
              uncheckedColor='#868686' // Assuming a different color when unchecked, adjust as necessary
              containerStyle={styles.checkBoxContainer}
            />
            <Text style={[styles.todoText, item.completed && styles.completedTodoText]}>{item.text}</Text>
            <View style={styles.linkAndScoreContainer}>
              {item.url && (
                <TouchableOpacity onPress={() => openUrl(item.url)}>
                  <Text style={styles.link}>Open Link</Text>
                </TouchableOpacity>
              )}
              <Text style={[styles.score, item.completed && styles.completedScore]}>
                {item.score.toString()}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    padding: 8,
    alignSelf: 'stretch',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left', // Align to the left
    marginVertical: 16,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    /* justifyContent: 'space-between', // This should already push children to the edges */
    width: '100%', // Ensure the todo item stretches
  },
  linkAndScoreContainer: {
    marginLeft: 'auto', // Align to the right
    flexDirection: 'row', // Keep link and score side by side
    alignItems: 'center', // Align items vertically
    justifyContent: 'space-between',
    gap: 12,
    // If you need space between the link and the score, you can adjust here
  },
  checkBoxContainer: {
    padding: 0, // Minimize padding to ensure alignment
    margin: 0, // Remove margin to align left
    backgroundColor: 'transparent', // Remove default background
    borderWidth: 0, // Remove border
  },
  todoText: {
    fontSize: 18,
    marginLeft: 8,
  },
  completedTodoText: {
    color: 'rgba(248, 94, 43, 0.48)', // colorTomato for completed items
    textDecorationLine: 'line-through', // Optional: Adds a line-through style for completed items
  },
  score: {
    marginLeft: "auto", // Align to the right
    marginRight: 8, // Add margin to the right
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    color: '#0000FF', // Example link color
    textDecorationLine: 'underline', // Underline to indicate this is a link
    marginLeft: "auto"
  },
  completedScore: {
    color: 'rgba(248, 94, 43, 0.48)', // colorTomato for completed items
  },
  // Add other styles as needed
});

export default Tracker;


// import React, { useState } from 'react';
// import { View, Text, FlatList, StatusBar, StyleSheet } from 'react-native';
// import { CheckBox } from 'react-native-elements';

// const Tracker = () => {
//   const initialTodos = [
//     { id: 1, text: 'Read a book', completed: false, score: 2 },
//     { id: 2, text: 'Go for a walk', completed: false, score: 4 },
//   ];

//   const [todos, setTodos] = useState(initialTodos);

//   const toggleTodo = (id) => {
//     setTodos(
//       todos.map(todo =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };