import { Text, View } from "react-native";
import type { ProductItemProps } from "./types";

export default function ProductItem({ item }: ProductItemProps) {
  return (
    <View key={item.id}>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );
}
