import { React, useState } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

function Dishrow() {
  const [pressed, setPressed] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setPressed(true)}
      className="bg-white 
     border-2 rounded-lg p-4 border-gray-200 shadow-2xl"
    >
      <View className="flex-row">
        {/* Text Component */}
        <View className="flex-1">
          <Text className="text-lg mb-1">Peri peri Nuts</Text>
          <Text className="text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio nemo
            eaque, deserunt enim, repellendus ipsum nostrum voluptas
          </Text>
          <Text className="text-gray-400">$3.75</Text>
        </View>

        <View
          style={{
            border: 1,
            borderColor: "#F3F3F4",
          }}
        >
          <Image
            source={{
              uri: "https://links.papareact.com/gn7",
            }}
            className="h-20 w-20 bg-gray-300 p-4"
          ></Image>
        </View>
      </View>
      {pressed && (
        <View className="bg-white px-4">
          <View className="flex-row space-x-2 items-center pb-3">
            <TouchableOpacity>
              <MinusCircleIcon size="40" color="#00CCDD"></MinusCircleIcon>
            </TouchableOpacity>
            <Text>0</Text>
            <TouchableOpacity>
              <PlusCircleIcon size="40" color="#00CCDD"></PlusCircleIcon>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}

export default Dishrow;
