"use strict";

import React from "react";
import earth from "./earth";
import {
    AppRegistry,
    Animated,
    asset,
    Environment,
    NativeModules,
    staticResourceURL,
    VrButton,
    Model,
    PointLight,
    Text,
    Image,
    View,
    Prefetch
} from "react-360";

const { VideoModule } = NativeModules;

const flags = ["poland.png", "italy.png", "ukraine.jpg", "iceland.png", "uk.png"];

const panoramas = [
    "poland.jpg",
    "italy.png",
    "ukraine.jpg",
    "iceland.jpg",
    "london.jpg"
];

class vr_headset_demo extends React.Component {
    constructor() {
        super();
        this.state = {
            hoveredPhoto: 0,
            rotation: 0,
            hideButton: false,
            activeCountry: null
        };
    }

    hover(index) {
        this.setState({
            hoveredPhoto: index
        });
    }

    selectCountry(index) {
        if (index !== null) {
            Environment.setBackgroundImage(asset(panoramas[index]), {
                format: "2D"
            });
        } else {
            Environment.setBackgroundImage(asset("chess-world.jpg"), {
                format: "2D"
            });
        }

        this.setState({
            activeCountry: this.state.activeCountry ? null : index
        });
    }

    createFlagButtons() {
        return flags
            .filter((photo, index) => {
                return this.state.activeCountry !== null
                    ? this.state.activeCountry === index
                    : true;
            })
            .map((photo, index) => {
                let transform;
                if (this.state.activeCountry) {
                    transform = [{ translate: [2000, 0, -3] }];
                } else {
                    transform = [
                        { scale: this.state.hoveredPhoto === index ? 1.45 : 1 }
                    ];
                }

                return (
                    <Animated.View
                        key={"key" + index}
                        style={{
                            margin: 20,
                            transform: transform
                        }}
                        onEnter={this.hover.bind(this, index)}
                    >
                        <VrButton
                            onClick={this.selectCountry.bind(
                                this,
                                this.state.activeCountry ? null : index
                            )}
                        >
                            <Image
                                style={{
                                    marginTop: 100,
                                    marginLeft: 100,
                                    borderRadius: 10,
                                    borderWidth: 2,
                                    width: 480,
                                    height: 240
                                }}
                                source={asset(`flags/${photo}`)}
                            />
                        </VrButton>
                    </Animated.View>
                );
            });
    }

    getChangeBackgroundButton() {
        return this.state.activeCountry === 0 &&
            this.state.hideButton === false ? (
            <VrButton
                onClick={() => {
                    Environment.setBackgroundVideo("myplayer");
                    VideoModule.resume("myplayer"); // Start playback

                    this.setState({
                        hideButton: true
                    });
                }}
            >
                <View
                    style={{
                        padding: 20,
                        backgroundColor: "#000000",
                        borderColor: "#639dda",
                        borderWidth: 2
                    }}
                >
                    <Text
                        style={{
                            fontSize: 50
                        }}
                    >
                        What's up with the static background?
                    </Text>
                </View>
            </VrButton>
        ) : null;
    }

    render() {
        return (
            <View>
                {panoramas.map((item, index) => (
                    <Prefetch key={index} source={asset(`${item}`)} />
                ))}
                <PointLight intensity={5} style={{ color: "white" }} />
                <View
                    style={{
                        opacity: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    {this.createFlagButtons()}
                    {this.getChangeBackgroundButton()}
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent("vr_headset_demo", () => vr_headset_demo);
AppRegistry.registerComponent("earth", () => earth);
