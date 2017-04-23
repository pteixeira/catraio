import { StyleSheet } from "react-native";

export default (opts = {}) => StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: opts.backgroundColor || "#aaa",
  },

  title: {
    color: "#666",
    fontSize: 48,
  },

});
