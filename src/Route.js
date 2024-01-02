import { Text, View, StatusBar } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SectionList from './Screens/SectionList/SectionList'
const Stack = createNativeStackNavigator();

function MyDrawer() {
     
      return (
            <>
                  <StatusBar
                        backgroundColor="#3C567B"
                        // barStyle="dark-content"
                        hidden={false}
                        translucent
                  />
                  <NavigationContainer>
                        <Stack.Navigator>
                              <Stack.Screen name="SectionList" component={SectionList} options={{ headerShown: false }} />
                        </Stack.Navigator>
                  </NavigationContainer>
            </>
      );
}

export default (MyDrawer)
