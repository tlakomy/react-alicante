import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-360";

export default class cylinder extends React.Component {
    render() {
        return <View style={styles.panel} />;
    }
}

const styles = StyleSheet.create({
    panel: {
        // Fill the entire surface
        width: 4000,
        height: 600,
        backgroundColor: "rgba(128, 0, 3, 0.45)",
        justifyContent: "center",
        alignItems: "center"
    }
});


