import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native"; 
import {StackNavigatorProps}  from '@react-navigation/stack';

import  AddDishesPage  from './src/AddDishesPage'; 



export default function App() {


  const [coursesFilter, setcoursesFilter] = useState(false);

// Function to toggle course filter visibility
const togglecoursesFilter = () => {
    setcoursesFilter(!coursesFilter); // This changes the state from true to false and vice versa
};

const Stack = createStackNavigator();

type RootStackParamList ={ 
  App: undefined;
  AddDishesPage: {Dishname: string; DishDescription: string; DishPrice: number;};
}// Probably need string and int but not sure yet 


  <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="AddDishesPage" component={AddDishesPage}/>
      </Stack.Navigator>
    </NavigationContainer>

  return (

    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.WelcomeText}>Welcome Christofell, let's plan together a well-balanced meal.</Text>
      <TouchableOpacity style={styles.AddDishesPagebutton}>
        <Text style={styles.FillDishestext}>Fill the dish info</Text>
      </TouchableOpacity>
      <Text>Below choose the course type to display the added dishes</Text>
      <TouchableOpacity
              style={styles.Filterbutton} 
                onPress={togglecoursesFilter}>
                  <Text style={styles.FilterbuttonText}>Filter</Text>
                  <Text style={styles.arrow}>{coursesFilter ?"▼" : "►"}</Text> {/* Arrow changes based on state */}
      </TouchableOpacity>
               {coursesFilter && ( 
                    <View> {/* Button that should make the user enter the dish for each filter */}
                      <TouchableOpacity>Starters</TouchableOpacity>
                      <TouchableOpacity>Main Course</TouchableOpacity>
                      <TouchableOpacity>Desserts</TouchableOpacity>
                    </View>
               )}

      
      <StatusBar style="auto" />
    </View>
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
    color:"white",
    fontSize: 14,
    textAlign: 'center',
  }, 
   Filterbutton: { 
    backgroundColor: "#004aad",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
   
  arrow: { 
    fontSize: 18,
    color: "white",
  }, 
  FilterbuttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
