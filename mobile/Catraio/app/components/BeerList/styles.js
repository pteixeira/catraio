import { StyleSheet } from "react-native";
import Dimensions from "Dimensions";

const windowSize = Dimensions.get("window");

export default (opts = {}) => StyleSheet.create({

  container: {
    flex: 1,
    width: windowSize.width,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: opts.backgroundColor || "#aaa",
  },

  title: {
    color: "#666",
    fontSize: 48,
  },

  date: {
    color: "#fff",
    fontSize: 12
  },

  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center"
  },

});
