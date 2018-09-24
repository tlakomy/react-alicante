import React from "react";
import { Animated, asset, View } from "react-360";
import Entity from "Entity";
import Easing from "Easing";

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

export default class earth extends React.Component {
    rotation = new Animated.Value(0);

    spin() {
        this.rotation.setValue(0);
        Animated.timing(this.rotation, {
            toValue: 360,
            duration: 4000,
            easing: Easing.linear
        }).start();
    }

    stop() {
        Animated.timing(this.rotation).stop();
    }

    render() {
        return (
            <View>
                <AnimatedEntity
                    style={{
                        transform: [
                            { translate: [0, 50, -70] },
                            { scale: 0.08 },
                            { rotateY: this.rotation },
                            { rotateX: 30 },
                            { rotateZ: 10 }
                        ]
                    }}
                    onEnter={this.spin.bind(this)}
                    onExit={this.stop.bind(this)}
                    source={{
                        obj: asset("earth.obj"),
                        mtl: asset("earth.mtl")
                    }}
                />
            </View>
        );
    }
}
