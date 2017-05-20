import { StyleSheet } from "react-native";
import Dimensions from "Dimensions";

const windowSize = Dimensions.get("window");

export default (opts = {}) => StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    width: windowSize.width,
    backgroundColor: opts.backgroundColor || "#aaa",
  },

  title: {
    color: "#666",
    fontSize: 48,
  },

  image: {
    height: 50,
    width: 50,
    borderRadius: 40,
    marginHorizontal: 20
  },

  info: {

  }

});
