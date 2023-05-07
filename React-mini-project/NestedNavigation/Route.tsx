import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screen/Home';
import Favorite from './src/screen/Favorite';
import Profile from './src/screen/Profile';
import Basket from './src/screen/Basket';
import ProductDetail from './src/screen/ProductDetail';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native'
import { useState } from 'react'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function HomeStack({ route, navigation }: any): any {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name='HomeScreen'
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen name='ProductDetailScreen' component={ProductDetail}
                options={({ route }) => ({
                    headerTitle: '',
                    headerRight: () => (
                        <TouchableOpacity >
                            <MaterialIcons
                                name='favorite'
                                size={24}
                                color="red"
                            />
                        </TouchableOpacity>
                    ),
                })
                }
            />
        </Stack.Navigator>
    )
}

function Route() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
                <Tab.Screen name='Home' component={HomeStack}
                    options={({ route }) => ({
                        tabBarStyle: ((route) => {
                            const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                            if (routeName === 'ProductDetailScreen') {
                                return { display: "none" }
                            }
                            return
                        })(route),
                        tabBarIcon: ({ focused }) => <MaterialIcons name='home' size={26} color={focused ? '#5956E9' : 'black'} />,
                    })
                    }
                />
                <Tab.Screen
                    name='Favorite'
                    component={Favorite}
                    options={{
                        tabBarIcon: ({ focused }) => <MaterialIcons name='favorite-border' size={26} color={focused ? '#5956E9' : 'black'} />
                    }}
                />
                <Tab.Screen name='Profile' component={Profile} options={{
                    tabBarIcon: ({ focused }) => <MaterialCommunityIcons name='account' size={26} color={focused ? '#5956E9' : 'black'} />
                }} />
                <Tab.Screen name='Basket' component={Basket} options={{
                    tabBarIcon: ({ focused }) => <SimpleLineIcons name='basket' size={26} color={focused ? '#5956E9' : 'black'} />
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Route