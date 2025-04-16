import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RecentExpanses from "./src/RecentExpanses";
import AllExpenses from "./src/AllExpenses";
import ManageExpenses from "./src/ManageExpenses";
import Ionicons from "@expo/vector-icons/Ionicons";

const stack = createNativeStackNavigator();
const bottomTab = createBottomTabNavigator();

export const ExpensesTab = () => {
  return (
    <bottomTab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "red" },
        tabBarActiveTintColor: "white",
      }}
    >
      <bottomTab.Screen
        name="RecentExpenses"
        component={RecentExpanses}
        options={{
          title: "Recent Expenses",
          headerStyle: {
            backgroundColor: "red",
          },
          tabBarLabel: "recent",
          headerTitleAlign: "center",
          headerTintColor: "white",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "receipt" : "receipt-outline"}
                size={24}
                color="white"
              />
            );
          },
        }}
      />
      <bottomTab.Screen
        name="AllExpanses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          headerStyle: {
            backgroundColor: "red",
          },
          tabBarLabel: "All",
          headerTitleAlign: "center",
          headerTintColor: "white",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Ionicons
                name={focused ? "calendar" : "calendar-clear-outline"}
                size={24}
                color="white"
              />
            );
          },
        }}
      />
    </bottomTab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <stack.Screen name="BottomTab" component={ExpensesTab} />

        <stack.Screen name="ManageExpense" component={ManageExpenses} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
