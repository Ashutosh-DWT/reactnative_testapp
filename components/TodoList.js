import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = () => {
  return (
    <View style={styles.main}>
      <TodoItem />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 100,
  },
});

export default TodoList;
