import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native"; 

import  AddDishesPage  from './src/AddDishesPage'; 

const Stack = createStackNavigator();


export default function App() {

  <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="AddDishesPage" component={AddDishesPage}/>
      </Stack.Navigator>
    </NavigationContainer>

  return (

    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.WelcomeText}>Welcome Christofell, let's plan together a well-balanced meal.</Text>
      <TouchableOpacity style={styles.AddDishButton}>Fill the dish info</TouchableOpacity>
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
  },
  AddDishButton: {
    backgroundColor: "#004aad",
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
  },
});
