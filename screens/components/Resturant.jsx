import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Image, Text, View } from "react-native";
import { StarIcon, MapPinIcon } from "react-native-heroicons/solid";

function Resturant({
  id,
  imgurl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) {
  const navigate = useNavigation();
  const HandlePress = () => {
    navigate.navigate("ResturantInfo",{
      imgurl
    });
  };

  return (
    <TouchableOpacity
      onPress={() => HandlePress()}
      className="bg-white mr-3 shadow"
    >
      <Image
        source={{
          uri: imgurl,
        }}
        className="h-36 w-64 rounded-sm"
      ></Image>
      <View className="px-1 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row space-x-2 items-center">
          <StarIcon color="green" opacity="0.5" size="22"></StarIcon>
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="grey" opacity="0.4" size="22"></MapPinIcon>
          <Text className="text-xs text-gray-500">NearBy</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Resturant;
