// HomeNavigator.tsx
import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SettingsScreen from "../screens/home/SettingsScreen";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "@screens/home/HomeScreen";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import ProfileScreen from "@screens/home/ProfileScreeen";
import * as SystemUI from "expo-system-ui";
import { colors } from "@constants/colors";
import RoutinesScreen from "@screens/home/RoutinesScreen";
const Tab = createBottomTabNavigator();

export default function HomeNavigator() {
  useEffect(() => {
    SystemUI.setBackgroundColorAsync("transparent");
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000000",
          borderTopWidth: 0,
          elevation: 0, 
          position: "absolute",
          bottom:16,
          right: 16,
          left: 16,
          borderRadius: 10,
        },
        tabBarInactiveTintColor: "gray",
        tabBarActiveTintColor: colors.primary,
        tabBarBackground: () => (
          <BlurView
            tint="dark"
            intensity={100}
            style={StyleSheet.absoluteFillObject}
          />
        ),
      }}
    >
      {/* PERFIL */}
      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      
      {/* MENSAJES */}
      <Tab.Screen
        name="Mensajes"
        component={RoutinesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="mail-outline" size={size} color={color} />
          ),
        }}
      />

      {/* HOME */}
      <Tab.Screen 
        name="Inicio"
        component={HomeScreen}
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      {/* RUTINAS */}
      <Tab.Screen
        name="Rutinas"
        component={RoutinesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="barbell-outline" size={size} color={color} />
          ),
        }}
      />

      {/* CONFIGURACION */}
      <Tab.Screen
        name="Config"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
