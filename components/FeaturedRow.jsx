import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import { defaultImageMap } from "./Defaults";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
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
        {/* RestaurantCards.. */}
        <RestaurantCard
          id={123}
          imgUrl={defaultImageMap.profile}
          title="Yo! Elaina"
          rating={5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a test description"
          dishes={[]}
          long={21}
          lat={2}
        />
        <RestaurantCard
          id={123}
          imgUrl={defaultImageMap.profile}
          title="Yo! Elaina"
          rating={5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a test description"
          dishes={[]}
          long={21}
          lat={2}
        />
        <RestaurantCard
          id={123}
          imgUrl={defaultImageMap.profile}
          title="Yo! Elaina"
          rating={5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a test description"
          dishes={[]}
          long={21}
          lat={2}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
