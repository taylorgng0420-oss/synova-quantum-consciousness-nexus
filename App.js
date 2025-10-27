import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import QuantumScreen from './src/screens/QuantumScreen';
import NeuralScreen from './src/screens/NeuralScreen';
const Stack = createStackNavigator();
export default function App() {
return (
&lt;NavigationContainer&gt;
&lt;Stack.Navigator
initialRouteName="Home"
screenOptions={{
headerStyle: { backgroundColor: '#0A0E27' },
headerTintColor: '#00D9FF',
headerTitleStyle: { fontWeight: 'bold' },
}}
B. app.json
C. App.js
&gt;
&lt;Stack.Screen
name="Home"
component={HomeScreen}
options={{ title: '🌟 Synova AI' }}
/&gt;
&lt;Stack.Screen
name="Quantum"
component={QuantumScreen}
options={{ title: '⚛️ Quantum Processing' }}
/&gt;
&lt;Stack.Screen
name="Neural"
component={NeuralScreen}
options={{ title: '🧠 Mind Interface' }}
/&gt;
&lt;/Stack.Navigator&gt;
&lt;/NavigationContainer&gt;
);
}
