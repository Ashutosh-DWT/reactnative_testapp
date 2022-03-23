import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TodoItem = () => {
  const [item, setItem] = useState('');
  const readData = async () => {
    try {
      const todo = await AsyncStorage.getItem(STORAGE_KEY);

      if (todo !== null) {
        setItem(todo);
      }
    } catch (e) {
      alert('Failed to fetch the data from storage');
    }
  };

  useEffect(() => {
    readData();
  }, []);

  return (
    <View>
      <Text>item:{item}</Text>
    </View>
  );
};

export default TodoItem;
