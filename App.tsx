import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button, TextInput, Modal } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
//import { StackNavigatorProps } from '@react-navigation/stack';

import AddDishesPage from './src/AddDishesPage';
import FilteredMenuPage from './src/FilteredMenuPage';





export default function App() {

  const [Dishes, setDishes] = useState<Array<{name: string; description: string; price: number}>>([]); 

  const [NewName, setNewName] = useState(''); 
  const [NewDescription, setNewDescription] = useState('');
  const [NewPrice, setNewPrice] = useState('');

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

  const [selectedDishes, setSelectedDishes] = useState<Array<{name: String; description: String; price: number}>>([]); // State to track selected dishes 

  //Function to toggle the dish selection
  const toggleDishSelection = (dish: {name: string; description: string; price: number}) => { 
  const isSelected = selectedDishes.some(d => d.name === dish.name); 
  if (isSelected) {
    setSelectedDishes(prev => prev.filter(d => d.name !== dish.name));
  } else {
    setSelectedDishes(prev => [...prev, dish]);
  }
};

  


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
        <Text style={styles.WelcomeText}> Welcome, Christofell, let's plan together a well-balanced meal.</Text>
        <Text> Click down below to add the dishes</Text>
        <Button title='Add Dish' onPress={() => setModalVisible(true)}/>

        <Modal visible={modalVisible} onRequestClose={closeModal}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.Title}> Add Dish Details</Text>
              <TextInput
                style={styles.input}
                onChangeText={setNewName}
                value={NewName}
                placeholder="Enter the dish name"
                />

              <TextInput 
              style={styles.input}
              onChangeText={setNewDescription}
              value={NewDescription}
              placeholder="Enter the dish description"
              />

              <TextInput
              style={styles.input}
              onChangeText={setNewPrice}  
              value={NewPrice}
              placeholder="Enter the dish price"
              keyboardType= "numeric" 
              />

              <View style={styles.modalButtons}>
                <Button title="Cancel" onPress={closeModal}/>
                <Button title="Add Dish" onPress={addDish}/>
              </View>
            </View>
          </View>
        </Modal>

        {Dishes.map((dish, index) => {
  const isSelected = selectedDishes.some(d => d.name === dish.name);
  return (
    <TouchableOpacity
      key={index}
      onPress={() => toggleDishSelection(dish)}
      style={[
        styles.dishItem,
        isSelected && styles.selectedDishItem
      ]}
    >
      <Text style={styles.dishName}>• {dish.name}</Text>
      <Text style={styles.dishDescription}>{dish.description}</Text>
      <Text style={styles.dishPrice}>Price: ${dish.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );
})}

{/* ✅ Show total selected dishes at the bottom */}
<Text style={{ fontWeight: 'bold', marginTop: 20 }}>
  Selected dishes: {selectedDishes.length}
</Text>
 

       



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
  modalOverlay:{
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  modalContent:{
    width: 'auto',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10, 
  },
  Title: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 15, 
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
     
  }, 
  dishItem: {
  padding: 15,
  marginVertical: 8,
  backgroundColor: '#f0f0f0',
  borderRadius: 8,
  width: '90%',
},
selectedDishItem: {
  backgroundColor: '#4CAF50',
},
dishName: {
  fontWeight: 'bold',
  fontSize: 16,
},
dishDescription: {
  fontStyle: 'italic',
  color: '#555',
},
dishPrice: {
  color: '#333',
  marginTop: 4,
},

}
);
