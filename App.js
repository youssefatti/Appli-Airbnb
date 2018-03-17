import { StackNavigator } from "react-navigation";

import HomeScreen from "./src/Pages/Home/HomeScreen";
import LogInScreen from "./src/Pages/LogIn/LogInScreen";
import RoomScreen from "./src/Pages/Room/RoomScreen";

const App = StackNavigator({
  LogIn: {
    screen: LogInScreen
  },
  Home: {
    screen: HomeScreen
  },
  Room: {
    screen: RoomScreen
  }
});
console.ignoredYellowBox = ["Warning: componentWill"];
export default App;
