import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryDetail from './screens/CategoryDetail';
import CategoryList from './screens/CategoryList';
import Home from './screens/Home';
import AddCategoryScreen from './screens/AddCategoryPage';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='AddCategoryScreen' component={AddCategoryScreen} />
        <Stack.Screen name='CategoryList' component={CategoryList} />
        <Stack.Screen name='CategoryDetail' component={CategoryDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
