import React from "react";
import { ScrollView, Text, View } from "react-native";
import { ArrowLeftIcon, ArrowRightIcon } from "react-native-heroicons/solid";
import Resturant from "./Resturant";

function FeaturedRow({ id, title, description }) {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCDD"></ArrowRightIcon>
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <Resturant
          title="Yo China"
          imgurl="https://links.papareact.com/gn7"
          rating="4.5"
          genre="chinese"
        ></Resturant>

        <Resturant
          title="Yo China"
          imgurl="https://links.papareact.com/gn7"
          rating="4.5"
          genre="chinese"
        ></Resturant>

        <Resturant
          title="Yo China"
          imgurl="https://links.papareact.com/gn7"
          rating="4.5"
          genre="chinese"
        ></Resturant>
      </ScrollView>
    </View>
  );
}

export default FeaturedRow;
