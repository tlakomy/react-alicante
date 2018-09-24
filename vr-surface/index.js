import React from "react";
import { AppRegistry, asset, StyleSheet, Image, Text, View } from "react-360";
import cylinder from "./cylinder";

const HEIGHT = 600;
const WIDTH = 350;

const images = [
    "hawkeye.png",
    "thor.png",
    "blackwidow.png",
    "hulk.png",
    "pacman.png",
    "captainamerica.png",
    "pikachu.png"
];

export default class panel extends React.Component {
    render() {
        return (
            <View style={styles.panel}>
                <View style={styles.imageBox}>
                    <Image
                        style={styles.image}
                        source={asset(images[this.props.index])}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        width: WIDTH,
        height: HEIGHT,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: WIDTH,
        height: HEIGHT,
    },
    imageBox: {
        padding: 20,
        backgroundColor: "#000",
        borderColor: "#639dda",
        borderWidth: 2
    }
});

AppRegistry.registerComponent("panel", () => panel);
AppRegistry.registerComponent("cylinder", () => cylinder);
