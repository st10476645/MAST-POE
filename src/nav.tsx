import { Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import  AddDishesPage  from './AddDishesPage'; 

const Stack = createStackNavigator();

export default function Nav() {
    return (
        <Text>This will become the navigation bar.</Text>
         );
}