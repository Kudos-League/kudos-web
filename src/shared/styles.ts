import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    gap: 10,
    fontWeight: "bold",
  },
  errorMessage: {
    color: "red",
    fontWeight: "bold",
    borderRadius: 5,
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 8,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 12,
    color: "#666",
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "left",
  },
});
