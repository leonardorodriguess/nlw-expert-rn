import { CategoryButton } from "@/components/categoty-button";
import { Header } from "@/components/header";
import { FlatList, View } from "react-native";

import { CATEGORIES } from "@/utils/data/products";

export default function Home() {
  return (
    <View className="bg-slate-900 flex-1 pt-8">
      <Header title="Faça o seu pedido" cardQuantityItems={1} />

      <FlatList 
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({item }) => <CategoryButton title={item} />}
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />
    </View>
  );
}
