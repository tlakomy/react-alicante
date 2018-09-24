import React from "react";
import { Animated, asset, View } from "react-360";
import Entity from "Entity";
import Easing from "Easing";

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

export default class rabbit extends React.Component {
    rotation = new Animated.Value(0);
    jumpValue = new Animated.Value(0);

    spin() {
        this.rotation.setValue(0);
        Animated.timing(this.rotation, {
            toValue: 360,
            duration: 4000,
            easing: Easing.linear
        }).start(() => this.spin());
    }

    jump(value) {
        let currentVal = value === 20 ? 0 : 20;
        Animated.timing(this.jumpValue, {
            toValue: currentVal,
            duration: 500
        }).start(() => this.jump(currentVal));
    }

    componentDidMount() {
        this.spin();
        this.jumpValue.setValue(0);
        setTimeout(() => this.jump(), Math.random() * 1000);
    }

    render() {
        return (
            <View>
                <AnimatedEntity
                    style={{
                        transform: [
                            { translateY: this.jumpValue },
                            { translateZ: -800 },
                            { rotateY: this.rotation },
                            { rotateX: -90 }
                        ]
                    }}
                    source={{ gltf2: asset("rabbit.gltf") }}
                />
            </View>
        );
    }
}
