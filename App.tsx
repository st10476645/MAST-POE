import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigatorProps } from '@react-navigation/stack';

import AddDishesPage from './src/AddDishesPage';
import FilteredMenuPage from './src/FilteredMenuPage';




export default function App() {


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
  }// Probably need string and int but not sure yet 


  <NavigationContainer >
    <Stack.Navigator>
      <Stack.Screen name="AddDishesPage" component={AddDishesPage} />
      <Stack.Screen name="FilteredMenuPage" component={FilteredMenuPage} />
    </Stack.Navigator>
  </NavigationContainer>

  return (





    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.WelcomeText}>Welcome Christofell, let's plan together a well-balanced meal.</Text>

       

        <TouchableOpacity
          style={styles.Filterbutton}
          onPress={togglecoursesFilter}>
          <Text style={styles.FilterbuttonText}>Filter</Text>
          <Text style={styles.arrow}>{coursesFilter ? "▼" : "►"}</Text> {/* Arrow changes based on state */}
          {coursesFilter && (
            <View>
              {/* <TouchableOpacity>Main Course</TouchableOpacity>
              <TouchableOpacity>Desserts</TouchableOpacity> */}
              <Button title="Starters" onPress={() => { }} />
              <Button title="Main Course" onPress={() => { }} />
              <Button title="Desserts" onPress={() => { }} /> 
            </View>
          )}
        </TouchableOpacity>
      </View>  


        <TextInput
          style={styles.input}
          placeholder="Dish Name"
          onChangeText={newText => setDishname(newText)}
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="Dish Description"
          onChangeText={newText => setDishDescription(newText)}
          keyboardType="default"
        />
        <TextInput
          style={styles.input}
          placeholder="Dish Price"
          onChangeText={newText => setPrice(newText)}
          keyboardType="numeric"
        />
        <Button title="Add to menu" onPress={handleAdding} />




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
