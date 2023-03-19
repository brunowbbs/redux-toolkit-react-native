import { Button, FlatList, SafeAreaView, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";

import { fetchProducts } from "../../../store/reducers/product";
import ProductItem from "./components/product-item";

export default function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const { productList, error, loading } = useSelector(
    (state: RootState) => state.product
  );

  function renderLoading() {
    if (!loading) {
      return null;
    }

    return <Text>Loading...</Text>;
  }

  function renderError() {
    if (!error) {
      return null;
    }

    return <Text>Erro ao buscar dados.</Text>;
  }

  function renderProductsList() {
    if (productList.length === 0) {
      return null;
    }

    return (
      <FlatList
        data={productList}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => <ProductItem item={item} />}
      />
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, margin: 20 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {renderLoading()}
        {renderError()}
        {renderProductsList()}
        <Button
          title="Buscar produtos"
          onPress={() => dispatch(fetchProducts())}
        />
      </View>
    </SafeAreaView>
  );
}
