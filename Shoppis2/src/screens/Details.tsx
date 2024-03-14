import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { ProductDTO } from "../types/Products";
import { MaterialIcons } from "@expo/vector-icons";
import { CartContext } from "../contexts/CartContext";


const Details = ({ route }: any) => {
    const product: ProductDTO = route.params
    const { addProduct } = useContext(CartContext)
    console.log(product)
    return (
        <View style={styles.cardContainer}>
            <Image
                resizeMode="stretch"
                style={styles.image}
                source={{ uri: product.images[0] }}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>$ {product.price}</Text>
                <Text style={styles.priceTitle}>Adicionar ao carrinho</Text>
                <TouchableOpacity onPress={() => addProduct(product) } style={styles.addCart}>
                    <MaterialIcons name="add" size={40} color="#0000FF" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Details;

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        elevation: 3,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: "center",
        padding: 12,
        flex: 1
    },
    image: {
        marginTop: 60,
        width: 300,
        height: 200,
        borderRadius: 10,
        marginBottom: 60
    },
    infoContainer: {
        flex: 1,
        marginLeft: 12,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    priceTitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#4CAF50",
        textAlign: 'center',
        marginBottom: 40
    },
    addCart: {
        alignSelf: "center"
    }
});
