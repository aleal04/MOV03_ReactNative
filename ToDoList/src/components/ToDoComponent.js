import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddTodo, RemoveTodo} from '../actions/Action';
import {styles} from './ToDoStyles';
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const Todo = () => {
  const [todoValue, setTodoValue] = useState('');

  const dispatch = useDispatch();
  const data = useSelector(state => state);
  const todos = data.todos.todos;
  const addTodo = () => {
    if (todos && !todos.includes(todoValue)) {
      dispatch(AddTodo(todoValue));
      setTodoValue('');
    } else {
      alert(`${todoValue} already added in Todo List`);
    }
  };

  const removeTodo = item => {
    const todoIndex = todos.indexOf(item);
    if (todoIndex > -1) {
      dispatch(RemoveTodo(item));
    } else {
      alert(`${todoValue} is not in the Todo List`);
    }
  };

  const renderTodoList = () => {
    return (
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <View style={styles.todoView}>
            <View style={styles.todoList}>
              <Text>{item}</Text>
            </View>
            <TouchableOpacity
              style={styles.removeTodo}
              onPress={() => removeTodo(item)}>
              <Text> X </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    );
  };

  return (
    <View style={styles.main}>
      <Text style={styles.title}>To Do App</Text>
      <TextInput
        style={styles.mainInput}
        onChangeText={setTodoValue}
        placeholder={'Ingrese la actividad por realizar'}
        value={todoValue}
      />
      <Button name="increase" title="Agregar" onPress={addTodo} />
      {/* <Button title="Agregar" style={styles.buttonNavigation}></Button> */}

      <View>
        <Text style={styles.listToDo}>
          Lista
        </Text>
        {renderTodoList()}
      </View>
    </View>
  );
};

export default Todo;