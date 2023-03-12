import { React } from "react";
import { Image, ScrollView, Text, TouchableOpacity } from "react-native";
import CategoryCard from "./CategoryCard";

function Categories() {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard img="https://links.papareact.com/gn7" text="Hello" />
      <CategoryCard img="https://links.papareact.com/gn7" text="Hello" />
      <CategoryCard img="https://links.papareact.com/gn7" text="Hello" />
      <CategoryCard img="https://links.papareact.com/gn7" text="Hello" />
      <CategoryCard img="https://links.papareact.com/gn7" text="Hello" />
      <CategoryCard img="https://links.papareact.com/gn7" text="Hello" />
      <CategoryCard img="https://links.papareact.com/gn7" text="Hello" />
      <CategoryCard img="https://links.papareact.com/gn7" text="Hello" />
    </ScrollView>
  );
}

export default Categories;
