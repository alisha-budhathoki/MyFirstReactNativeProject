import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/component_screen";
import ListScreen from "./src/screens/list_screen"
import ImageScreen from "./src/screens/image_screen";
import CounterScreen from "./src/screens/counter_screen";
import ColorScreen from "./src/screens/color_screen";
import SquareScreen from "./src/screens/square_screen";
import TextScreen from "./src/screens/text_input_screen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    ImageView: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Sqaure: SquareScreen,
    TextScreen: TextScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
