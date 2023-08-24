import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { styles } from "./styles";
import { Quantidade } from "../../components/Quantidade";
import { Tarefa } from "../../components/Tarefa";
//New deploy!
export function Home() {
  const [tarefas, setTarefas] = useState<string[]>([]);
  const [tarefaName, setTarefaName] = useState("");
  const [criadas, setCriadas] = useState(0);
  const [concluidas, setConcluidas] = useState(0);

  function handleTarefaAdd() {
    if (tarefaName == ""){
      return Alert.alert("Warning!","You canno't add a empty task.");
    }

    const existingTarefa = tarefas.find((tarefa) => tarefa === tarefaName);

    if (existingTarefa) {
      return Alert.alert("Warning!", "This task already exist.");
    }

    setTarefas((prevState) => [...prevState, tarefaName]);
    setTarefaName("");
    setCriadas((prevState) => prevState + 1);
  }

  function handleTarefaCheck() {
    setConcluidas((prevState) => prevState + 1);
  }

  function handleTarefaUncheck() {
    setConcluidas((prevState) => prevState - 1);
  }

  function handleTarefaRemove(tarefa: string) {
    setTarefas((prevState) => prevState.filter((item) => tarefa !== item));
    setCriadas((prevState) => prevState - 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.textHeaderContainer}>
          <Text style={styles.textTo}>to</Text>
          <Text style={styles.textDo}>do</Text>
        </View>
        <Text style={styles.subText}>do your life to you;</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your day's tasks here"
          placeholderTextColor="#808080"
          onChangeText={setTarefaName}
          value={tarefaName}
        />
        <TouchableOpacity style={styles.button} onPress={handleTarefaAdd}>
          <Ionicons
            style={styles.iconInsert}
            name="md-add"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.informationsContainer}>
        <Quantidade texto="Created" cor="#4EA8DE" valor={criadas} />
        <Quantidade texto="Finished" cor="#8284FA" valor={concluidas} />
      </View>
      <FlatList
        data={tarefas}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Tarefa
            tarefa={item}
            onCheck={handleTarefaCheck}
            onUncheck={handleTarefaUncheck}
            onRemove={() => handleTarefaRemove(item)}
            key={item}
          />
        )}
      ></FlatList>
    </View>
  );
}
