import { Pressable, Text, View, StyleSheet, Platform } from "react-native";

function CategoryGridTitle({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPresed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerItem, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTitle;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white", // Aplicar siempre un fondo para que se vean los estilos de encima
    shadowColor: "black", // Aplicar estilo sombras y cuadrados para IOS
    shadowOpacity: 0.25, // Aplicar estilo sombras y cuadrados para IOS
    shadowOffset: { width: 0, height: 2 }, // Aplicar estilo sombras y cuadrados para IOS
    shadowRadius: 8, // Aplicar estilo sombras y cuadrados para IOS
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPresed: {
    opacity: 0.5,
  },
  innerItem: {
    flex: 1,
    padding: 16,
    borderRadius: 8, // Borde para IOS
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
