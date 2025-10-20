import React, { useState } from 'react'; 
import { StyleSheet, Text, View } from 'react-native';

export default function FilteredMenuPage({ navigation }: { navigation: any }) {
    return(
        
            <View>
                <Text style={styles.Title}>Menu</Text>
            </View>
        

    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    fontSize: 24,
    fontWeight:'bold',
    padding: 20,
    color: "#004aad",
  }, 
  
});
