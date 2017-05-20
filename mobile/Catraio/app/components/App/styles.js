import { StyleSheet } from "react-native";
import Dimensions from "Dimensions";

const NAVBAR_HEIGTH = 50;
const windowSize = Dimensions.get("window");


export default StyleSheet.create({
  container: {
    flex: 1,
  },

  listContainer: {
    flex: 1,
    backgroundColor: "#999",
   },
});
