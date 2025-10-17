import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native';


export default function AddDishesPage({ navigation }: { navigation: any }) {

const  [coursesFilter, setcoursesFilter] = useState(false); // State to manage course filter visibility

// Function to toggle course filter visibility
const togglecoursesFilter = () => {
    setcoursesFilter(!coursesFilter); // This changes the state from true to false and vice versa
};



    return (
<ScrollView>        

    <View>
       <Text>Choose a course type a fill the dish details below.</Text>
       <TouchableOpacity
        style={styles.Filterbutton} 
          onPress={togglecoursesFilter}>
            <Text style={styles.FilterbuttonText}>Filter</Text>
            <Text>{coursesFilter ?"▼" : "►"}</Text> {/* Arrow changes based on state */}
       </TouchableOpacity>
         {coursesFilter && ( 
              <View>
                <Text>Starters</Text>
                <Text>Main Course</Text>
                <Text>Desserts</Text>
              </View>
         )}
           
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
    Filterbutton: { 
    backgroundColor: "#004aad",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  FilterbuttonText: {
    color: "#fff",
    fontSize: 18,
  }
});
