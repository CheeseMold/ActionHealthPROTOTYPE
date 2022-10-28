import { StyleSheet } from "react-native";
import MainScreen from "./app/screens/MainScreen";

export default function App() {
    return <MainScreen></MainScreen>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f6c9",
        alignItems: "center",
        justifyContent: "center",
    },
});
