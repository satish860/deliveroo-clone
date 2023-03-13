import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../../features/basketSlice";

function BasketPopup() {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="mx-5 bg-[#00CCDD] rounded-lg flex-row p-4 items-center space-x-2"
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] px-2">
          {items.length}
        </Text>
        <Text className="text-white font-extrabold text-lg text-center flex-1">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          ${basketTotal}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default BasketPopup;
