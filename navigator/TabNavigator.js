import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackRoutes, TabRoutes } from './Routes';
import HomeScreen from '../screens/HomeScreen';
import SectionScreen from '../screens/SectionScreen';
import CoursesScreen from '../screens/CoursesScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";
const hideOnScreens = [StackRoutes.SECTION];

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator
            screenOptions={{
            presentation: 'containedModal',
            headerShown: false,
            }}
        >
            <HomeStack.Screen 
                name={StackRoutes.HOME} 
                component={HomeScreen}
            />
            <HomeStack.Screen 
                name={StackRoutes.SECTION} 
                component={SectionScreen}
            />
        </HomeStack.Navigator>
    )
};

const CoursesStack = createNativeStackNavigator();
const CoursesStackScreen = () => {
    return (
        <CoursesStack.Navigator
            screenOptions={{
            presentation: 'containedModal',
            headerShown: false,
            }}
        >
            <CoursesStack.Screen 
                name={StackRoutes.COURSES} 
                component={CoursesScreen}
            />
        </CoursesStack.Navigator>
    )
};

const ProjectsStack = createNativeStackNavigator();
const ProjectsStackScreen = () => {
    return (
        <ProjectsStack.Navigator
            screenOptions={{
            presentation: 'containedModal',
            headerShown: false,
            }}
        >
            <ProjectsStack.Screen 
                name={StackRoutes.PROJECTS} 
                component={ProjectsScreen}
            />
        </ProjectsStack.Navigator>
    )
};

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: hideOnScreens.includes(getFocusedRouteNameFromRoute(route) ?? route.name) ? { display: 'none' } : {},
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    // if (route.name === TabRoutes.HOME) {
                    // iconName = focused ? 'home' : 'home-outline';
                    // } else if (route.name === TabRoutes.COURSES) {
                    // iconName = focused ? 'book' : 'book-outline';
                    // } else if (route.name === TabRoutes.PROJECTS) {
                    // iconName = focused ? 'briefcase' : 'briefcase-outline';
                    // }

                    switch (route.name) {
                        case TabRoutes.HOME:
                            iconName = 'home';
                            break;
                        case TabRoutes.COURSES:
                            iconName = 'albums';
                            break;
                        case TabRoutes.PROJECTS:
                            iconName = 'folder';
                            break;
                        default:
                            iconName = 'home'
                            break;
                    }

                    return <Ionicons name={iconName} size={26} color={focused ? activeColor : inactiveColor} />;
                },
                tabBarActiveTintColor: activeColor,
                tabBarInactiveTintColor: inactiveColor,
            })}
        >
            <Tab.Screen name={TabRoutes.HOME} component={HomeStackScreen} />
            <Tab.Screen name={TabRoutes.COURSES} component={CoursesStackScreen} />
            <Tab.Screen name={TabRoutes.PROJECTS} component={ProjectsStackScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigator;