import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    padding: 24,
  },
  textHeaderContainer: {
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  subText: {
    marginTop: -12.5,
    fontWeight: "200",
    color: "#FFF"
  },
  headerContainer: {
    marginTop: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  textTo: {
    color: "#4EA8DE",
    fontSize: 48,
    fontFamily: "Inter-Bold",
  },
  textDo: {
    color: "#5E60CD",
    fontSize: 48,
    fontFamily: "Inter-Bold",
  },
  inputContainer: {
    marginTop: 36,
    marginBottom: 36,
    width: "100%",
    flexDirection: "row",
  },
  iconInsert: {
    color: "#FFF",
    fontSize: 24,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#333333",
    borderRadius: 7.5,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
    marginRight: 6
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 7.5,
    backgroundColor: "#5E60CE",
    alignItems: "center",
    justifyContent: "center",
  },
  informationsContainer: {
    marginBottom: 18,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  created: {
    color: "#4EA8DE",
    fontSize: 16,
    fontFamily: "Inter-Bold",
  },
  finished: {
    color: "#8284FA",
    fontSize: 16,
    fontFamily: "Inter-Bold",
  }
});
