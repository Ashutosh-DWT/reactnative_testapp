import React, {useState} from 'react';
// import type {Node} from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [isTouched, setIsTouched] = useState(false);

  const touchHandler = () => {
    setIsTouched(false);
  };

  return (
    <View
      style={{
        flex: 1,
        // justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#5e66ff',
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 40,
        }}>
        Todo List
      </Text>
      <Button
        color="black"
        title="Add New Task"
        onPress={() => setIsTouched(true)}
      />
      {isTouched ? <TodoForm isTouched={touchHandler} /> : <TodoList />}
    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: 'black',
  },
});

export default App;
