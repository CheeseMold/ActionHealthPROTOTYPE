import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
} from "react-native";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
            </View>

            <StatusBar style="auto" />
            <View style={styles.img}>
                <TouchableOpacity onPress={() => console.log("Image clicked.")}>
                    <Image
                        style={{ borderRadius: 20 }}
                        source={{
                            uri: "https://picsum.photos/200/300",
                            width: 200,
                            height: 300,
                        }}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "dodgerblue",
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        flex: 2,
        allignItems: "center",
        backgroundColor: "dodgerblue",
    },
});
