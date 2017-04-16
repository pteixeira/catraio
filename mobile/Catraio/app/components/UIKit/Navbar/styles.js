import { StyleSheet } from "react-native";

const defaults = {
  height: 50,
};

export default (overrides = {}) => {
  const o = { ...defaults, ...overrides };

  return StyleSheet.create({
    navbar: {
      flex: 0,
      flexDirection: "row",
      height: o.height,
    },

    button: {
      flex: 1,
      height: o.height,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ccc",
      borderRightWidth: 1,
      borderRightColor: "#aaa",
    },

    lastButton: {
      borderRightWidth: 0,
    },

    text: {
      color: "#444",
      fontSize: 16,
      fontWeight: "700",
    },

    textActive: {
      textDecorationLine: "underline",
      color: "#666",
    },
  });
}
