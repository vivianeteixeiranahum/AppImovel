import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
const Stack = createStackNavigator();
function Routes() {
 return (
 <NavigationContainer>
 <Stack.Navigator>
 <Stack.Screen
 name="home"
 component={Home}
 options={{
 title: "ALUGUE",
 headerTitleStyle: {
 fontFamily: "Montserrat_700Bold",
 },
 headerRight: () => (
 <Pressable style={{ marginRight: 15 }}>
 <Feather name="shopping-bag" size={24} color="black" />
 </Pressable>
 ),
 }}
 />
 <Stack.Screen
 name="detail"
 component={Detail}
 options={{
 title: "Detalhe",
 headerTitleStyle: {
 fontFamily: "Montserrat_700Bold",
 },
 headerRight: () => (
 <Pressable style={{ marginRight: 15 }}>
 <Feather name="shopping-bag" size={24} color="black" />
 </Pressable>
 ),
 }}
 />
 </Stack.Navigator>
 </NavigationContainer>
 );
}
export default Routes;
