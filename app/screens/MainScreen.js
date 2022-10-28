import React from "react";
import {
    ImageBackground,
    StyleSheet,
    View,
    Image,
    Text,
    Button,
} from "react-native";

function MainScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={{ uri: require("../assets/colorEffect.jpg") }}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={{ uri: require("../assets/placeholder-logo.png") }}
                />

                <Text>Lorem Ipsum</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.loginContainer}>
                    <Button
                        title={"Entrar"}
                        color={"#4fa095"}
                        style={styles.loginButton}
                    />
                </View>
                <View style={styles.registerContainer}>
                    <Button
                        title={"Criar Conta"}
                        color={"#bad1c2"}
                        style={styles.registerButton}
                    />
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        fontFamily: "industrial-sans",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loginContainer: {
        borderRadius: 20,
        width: "100%",
        height: 70,
        backgroundColor: "#4fa095",
        margin: 10,
        justifyContent: "center",
        alignSelf: "center",
    },
    registerContainer: {
        borderRadius: 20,
        width: "100%",
        height: 70,
        backgroundColor: "#bad1c2",
        margin: 10,
        justifyContent: "center",
        alignSelf: "center",
    },
    logo: {
        width: 100,
        height: 100,
        position: "absolute",
        top: 70,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    buttonContainer: {},
    registerButton: {
        alignSelf: "center",
    },
    loginButton: {
        alignSelf: "center",
    },
});

export default MainScreen;
