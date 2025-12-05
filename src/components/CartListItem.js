import { View, Text, Image, StyleSheet } from "react-native";

const CartListItem = ({ cartItem }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: cartItem.product.image }} style={styles.image} />

      <View style={styles.details}>
        <Text style={styles.name}>{cartItem.product.name}</Text>
        <Text style={styles.price}>${cartItem.product.price}</Text>
        <Text>Quantity: {cartItem.quantity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", padding: 10 },
  image: { width: 80, height: 80, marginRight: 10 },
  details: { justifyContent: "center" },
  name: { fontWeight: "bold" },
  price: { marginVertical: 5 },
});

export default CartListItem;
