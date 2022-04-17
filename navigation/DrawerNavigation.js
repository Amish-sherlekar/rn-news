import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import ExploreScreen from '../Screens/ExploreScreen';
import SavedNews from '../Screens/SavedNews';
import { Ionicons } from '@expo/vector-icons';
import TopTabNavigation from './TopTabNavigation';
import StackNavigation from './StackNavigation';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={props => <CustomDrawer {...props} />}
                screenOptions={{
                    headerShown: false,
                    drawerActiveBackgroundColor: '#ad0194',
                    drawerActiveTintColor: '#fff',
                    drawerInactiveTintColor: '#ffe',
                    drawerLabelStyle: {
                        marginLeft: -25,
                        fontFamily: 'Fira Code iScript',
                        fontSize: 15,
                    },
                    drawerStyle: {
                        width: '85%',
                        backgroundColor: '#202020',
                    },
                }}>
                <Drawer.Screen
                    name="Home"
                    component={StackNavigation}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="home" size={35} color={color} />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="SavedNews"
                    component={SavedNews}
                    options={{
                        drawerIcon: ({ color }) => (
                        <Ionicons name="ios-save" size={35} color={color} />
                        ),
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}