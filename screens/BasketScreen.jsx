import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import {
  ArrowLeftIcon,
  XCircleIcon,
  XMarkIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import BasketItems from "./components/BasketItems";

export default function BasketScreen() {
  var navigation = useNavigation();
  return (
    <SafeAreaView className="bg-gray-100 pt-9 flex-1">
      <View
        className="bg-white relative
      items-center pb-4 pt-4 justify-center shadow-xl"
      >
        <Text className="text-3xl font-extrabold">Basket</Text>
        <Text className="text-xs text-center text-gray-500">
          Resturant Name
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute right-5  rounded-full p-2 bg-[#00CCDD]"
        >
          <XMarkIcon size="20" color="white" />
        </TouchableOpacity>
      </View>

      <View className="bg-white mt-4 p-2 my-5 flex-row space-x-4 items-center">
        <Image
          className="h-12 w-12 bg-gray-300 p-4 rounded-full"
          source={{
            uri: "https://links.papareact.com/wru",
          }}
        />
        <Text className="flex-1 font-extrabold text-lg">Delivery in 50-75</Text>
        <TouchableOpacity>
          <Text className="text-[#00CCDD] font-bold text-md">Change</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={true}
        className="p-2 pt-4 divide-y divide-gray-200"
      >
        <BasketItems />
        <BasketItems />
        <BasketItems />
        <BasketItems />
        <BasketItems />
        <BasketItems />
        <BasketItems />
        <BasketItems />
        <BasketItems />
        <BasketItems />
        <BasketItems />
        <BasketItems />
        <BasketItems />
        <BasketItems />
        <BasketItems />
        <BasketItems />
      </ScrollView>

      <View className="p-5 bg-white mt-5 space-y-4">
        <View className="flex-row justify-between">
          <Text className="text-gray-400">Sub Total</Text>
          <Text className="text-gray-400">$3.50</Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-gray-400">Delivery Fee</Text>
          <Text className="text-gray-400">$1.00</Text>
        </View>
        {/* Total */}
        <View className="flex-row justify-between">
          <Text>Total</Text>
          <Text className="font-extrabold">$4.50</Text>
        </View>

        <TouchableOpacity className="rounded-lg bg-[#00CCDD] p-4">
          <Text className="text-center text-white text-lg font-bold">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
