import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./styles";

type Props = {
  tarefa: string;
  onCheck: () => void;
  onUncheck: () => void;
  onRemove: () => void;
};

export function Tarefa({ tarefa, onUncheck, onCheck, onRemove }: Props) {
  const [localFinished, setLocalFinished] = useState(false);

  const toggleFinished = () => {
    setLocalFinished(!localFinished);
    !localFinished ? onCheck() : onUncheck();
  };

  const getDate = () => {
    const specificDate = new Date();
    const year = specificDate.getFullYear();
    const month = String(specificDate.getMonth() + 1).padStart(2, "0");
    const day = String(specificDate.getDate()).padStart(2, "0");
    const hours = String(specificDate.getHours()).padStart(2, "0");
    const minutes = String(specificDate.getMinutes()).padStart(2, "0");
    return `${year}/${month}/${day} ${hours}:${minutes}`;
  };

  const toggleRemove = () => {
    if (localFinished) {
      onUncheck();
    }
    onRemove();
  };

  return (
    <View style={[styles.container, localFinished && styles.containerFinished]}>
      <View style={styles.infosContainer}>
        <Text style={styles.createdAt}> {`Created at: ${getDate()}`}</Text>
        <View style={styles.row}>
          <TouchableOpacity onPress={toggleFinished}>
            <View style={[styles.radio, localFinished && styles.finishedRadio]}>
              {localFinished && (
                <AntDesign name="check" size={12} color="white" />
              )}
            </View>
          </TouchableOpacity>
          <Text style={[styles.tarefa, localFinished && styles.tarefaFinished]}>
            {tarefa}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.delete} onPress={toggleRemove}>
        <MaterialCommunityIcons
          name="delete-forever-outline"
          size={28}
          color="#808080"
        />
      </TouchableOpacity>
    </View>
  );
}
