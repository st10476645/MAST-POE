import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
//import { StackNavigatorProps } from '@react-navigation/stack';

import AddDishesPage from './src/AddDishesPage';
import FilteredMenuPage from './src/FilteredMenuPage';
import { Modal } from 'react-native/types_generated/index';




export default function App() {

  const [Dishes, setDishes] = useState<Array<{name: String; description: String; price: number}>>([]); 

  const [NewName, setNewName] = useState('');
  const [NewDescription, setNewDescription] = useState('');
  const {NewPrice, setNewPrice} = useState('');

  // State to manage modal visibility.(false = pop up closed, true = pop up open)
  const [modalVisible, setModalVisible] = React.useState(false); 

  const closeModal = () => {
    setModalVisible(false);
     setNewName("");
     setNewDescription("");
     setNewPrice("");
  }; 

  const addDish = () => { 
    if (NewName && NewDescription && NewPrice) {
      setDishes ([...Dishes, {name: NewName, description: NewDescription, price: parseFloat(NewPrice)}]);
      setNewName(""); 
      setNewDescription("");
      setNewPrice("");
      setModalVisible(false);
    }
  }; 
  
  

  const [coursesFilter, setcoursesFilter] = useState(false);

  // Function to toggle course filter visibility
  const togglecoursesFilter = () => {
    setcoursesFilter(!coursesFilter); // This changes the state from true to false and vice versa
  };
  // State to manage dishes input
  const [Dishname, setDishname] = useState('');
  const [DishDescription, setDishDescription] = useState('');
  const [DishPrice, setPrice] = useState('');

  // Function to handle adding dish (you can expand this to actually save the dish)
  const handleAdding = () => {
    console.log('Dish added:')
    // Need to add the array logic here to store the dishes 

  }

  const Stack = createStackNavigator();

  type RootStackParamList = {
    App: undefined;
    AddDishesPage: { Dishname: string; DishDescription: string; DishPrice: number; };
  }


  <NavigationContainer >
    <Stack.Navigator>
      <Stack.Screen name="AddDishesPage" component={AddDishesPage} />
      <Stack.Screen name="FilteredMenuPage" component={FilteredMenuPage} />
    </Stack.Navigator>
  </NavigationContainer>

  return (

    <ScrollView>
      <View style={styles.container}>
        <Text> Click down below to add the dishes</Text>
        <Button title='Add Dish' onPress={() => setModalVisible(true)}/>

        <Modal visible={modalVisible} onRequestClose={closeModal}>
          
          
          </Modal>  


      </View>  
       
       




        <StatusBar style="auto" />
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  WelcomeText: {
    fontSize: 15,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
    padding: 30,
  },
  AddDishesPagebutton: {
    backgroundColor: "#004aad",
    padding: 18,
    borderRadius: 30,
    marginTop: 20,
  },
  FillDishestext: {
    color: "white",
    fontSize: 14,
    textAlign: 'center',
  },
  Filterbutton: {
    backgroundColor: "#004aad",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: 200,
  },
  arrow: {
    fontSize: 18,
    color: "white",
  },
  FilterbuttonText: {
    color: "#fff",
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: "#004aad",
    borderRadius: 5,
    padding: 20,
    marginBottom: 10,
  },
});
