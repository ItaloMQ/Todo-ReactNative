import React from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { styles } from "./styles";

type Props = {
    texto: string
    cor: string;
    valor: number
  };

export function Quantidade({ texto, cor, valor } : Props) {
  return (
    <View style={styles.container}>
        <Text style={[styles.textQuantidade, { color: cor }]}>{texto}</Text>
        <View style={styles.numeroContainer}>
            <Text style={styles.numero}>{valor}</Text>
        </View>
    </View>
  );
}