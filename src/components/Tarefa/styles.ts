import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333333",
    marginBottom: 6,
    borderRadius: 7.5,
    paddingBottom: 16,
    paddingEnd: 12,
    paddingStart: 12,
    paddingTop: 14,
    flexDirection: "row",
  },
  containerFinished: {
    backgroundColor: "#262626",
  },
  infosContainer: {
    flex:1,
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  createdAt: {
    color: "#808080",
    fontSize: 12,
    marginBottom: 6
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#4EA8DE',
    marginEnd: 12,
    alignItems: "center",
    justifyContent: "center"
  },
  finishedRadio: {
    borderWidth: 0,
    backgroundColor: "#5E60CE"
  },
  tarefa: {
    color: "#F2F2F2",
    flex: 1,
  },
  tarefaFinished: {
    color: "#808080",
    textDecorationLine: 'line-through'
  },
  delete: {
    justifyContent: "center"
  },
});
