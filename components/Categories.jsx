import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import { defaultImageMap } from "./Defaults";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* CategoryCard */}
      <CategoryCard imgUrl={defaultImageMap.profile} title="Testing 1" />
      <CategoryCard imgUrl={defaultImageMap.profile} title="Testing 2" />
      <CategoryCard imgUrl={defaultImageMap.profile} title="Testing 3" />
      <CategoryCard imgUrl={defaultImageMap.profile} title="Testing 4" />
      <CategoryCard imgUrl={defaultImageMap.profile} title="Testing 5" />
      <CategoryCard imgUrl={defaultImageMap.profile} title="Testing 6" />
      <CategoryCard imgUrl={defaultImageMap.profile} title="Testing 7" />
    </ScrollView>
  );
};

export default Categories;
