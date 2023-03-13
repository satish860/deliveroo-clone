import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const BasketItems = () => {
  return (
    <View className="bg-white flex-row items-center space-x-3 px-5 py-2 border-b border-gray-200">
      <Text className="text-[#00CCDD] font-bold text-md">3 *</Text>

      <Image
        className="h-12 w-12  rounded-full"
        source={{
          uri: "https://links.papareact.com/gn7",
        }}
      />
      <Text className="text-lg font-bold flex-1">DishName</Text>

      <Text className="text-gray-600">$3.75</Text>
      <TouchableOpacity>
        <Text className="text-[#00CCDD] font-bold text-sm">Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketItems;
