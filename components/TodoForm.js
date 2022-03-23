import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoForm = props => {
  const [task, setTask] = useState('');

  const STORAGE_KEY = '@save_todo';

  const changeHandler = e => {
    setTask(e.target.value);
  };

  const pressHandler = () => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, 'task');
        alert('Data successfully saved');
      } catch (e) {
        alert('Failed to save the data to the storage');
      }
    };

    saveData();

    props.isTouched();
  };

  return (
    <View style={styles.container}>
      <View style={styles.div}>
        <TextInput
          style={styles.input}
          placeholder="Add Task Here..."
          value={task}
          onChange={changeHandler}
        />
        <Button style={styles.btn} title="add" onPress={pressHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
  },

  div: {
    marginTop: 200,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
  },

  btn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default TodoForm;
