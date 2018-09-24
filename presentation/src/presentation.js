// Import React
import styled from "styled-components";
import React from "react";

// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    Cite,
    Code,
    CodePane,
    Deck,
    Image,
    Heading,
    ListItem,
    List,
    Layout,
    Fit,
    Fill,
    Quote,
    Slide,
    Magic,
    Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

const CustomImage = styled(Image)`
    position: absolute;
    max-height: none !important;
    top: -200px;
`;

// Require CSS
require("normalize.css");

const theme = createTheme(
    {
        primary: "black",
        secondary: "#03A9FC",
        tertiary: "#009D99",
        quarternary: "#03A9FC"
    },
    {
        primary: "Open Sans Condensed",
        secondary: "Helvetica"
    }
);

const images = {
    virtualboy: require("./assets/virtualboy.jpg"),
    gearvr: require("./assets/gearvr.jpg"),
    tv: require("./assets/tv.jpg"),
    uber: require("./assets/uber.jpg"),
    vr: require("./assets/vr.jpg"),
    amazon: require("./assets/amazon.gif"),
    facebook: require("./assets/facebook.gif"),
    github: require("./assets/github.gif"),
    reddit: require("./assets/reddit.gif"),
    youtube: require("./assets/youtube.gif"),
    twitter: require("./assets/twitter.gif"),
    frameworks: require("./assets/frameworks.png"),
    renderers: require("./assets/renderers.png"),
    ardefinition: require("./assets/ardefinition.png"),
    airforce: require("./assets/airforce.jpg"),
    mark: require("./assets/mark.jpg"),
    marker: require("./assets/marker.jpg"),
    marker2: require("./assets/marker2.png"),
    less: require("./assets/less-logo.png"),
    hiro: require("./assets/hiro.png"),
    arjs: require("./assets/arjs.jpg"),
    elon: require("./assets/elon.gif"),
    reactar: require("./assets/reactar.png"),
    custom_marker: require("./assets/custom_marker.png"),
    mario: require("./assets/mario.gif"),
    yolo: require("./assets/yolo.gif"),
    hellovr: require("./assets/hellovr.png"),
    hololens: require("./assets/hololens.jpg"),
    expensive: require("./assets/expensive.png"),
    axis: require("./assets/axis.png"),
    hololens_video: require("./assets/hololens.mp4"),
    vr_beka: require("./assets/vr_beka.jpg"),
    past: require("./assets/past.jpg"),
    olx: require("./assets/olx.png"),
    explore: require("./assets/explore.jpg"),
    layer: require("./assets/layer.jpg"),
    react: require("./assets/react.jpg"),
    fuck: require("./assets/fuck.jpg"),
    surface: require("./assets/surface.jpg"),
    future: require("./assets/future.jpg"),
    senor: require("./assets/senor.jpg"),
    eurovision: require("./assets/eurovision.png"),
    jquery: require("./assets/jquery.png"),
    pikachu: require("./assets/pikachu.jpg"),
    pokemon_go: require("./assets/pokemon_go.jpg"),
    pokemon_ar: require("./assets/pokemon_ar.jpg"),
    coursea_01: require("./assets/coursea_01.png"),
    coursea_02: require("./assets/coursea_02.png"),
    first_slide: require("./assets/first_slide.png"),
    second_slide: require("./assets/second-slide.jpeg"),
    lakomy: require("./assets/lakomy.png")
};

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck
                transition={["fade"]}
                progress="bar"
                transitionDuration={500}
                theme={theme}
            >
                <Slide bgImage={images.first_slide.replace("/", "")} />
                <Slide bgImage={images.second_slide.replace("/", "")} />
                <Slide bgColor="#2153E9">
                    <Heading caps textColor="white">
                        Journey through VR and AR with React
                    </Heading>
                    <Text fontSize="50px" textColor="white" margin="50px 0 0 0">
                        Tomasz Łakomy
                    </Text>
                    <Image
                        fit
                        bgColor="#2153E9"
                        src={images.olx.replace("/", "")}
                        height="200"
                        margin={0}
                    />
                </Slide>
                <Slide bgImage={images.senor.replace("/", "")} />
                <Slide bgColor="#2153E9">
                    <Heading caps textColor="white">
                        Journey through VR and AR with React
                    </Heading>
                    <Text fontSize="50px" textColor="white" margin="50px 0 0 0">
                        Tomasz Łakomy
                    </Text>
                    <Image
                        fit
                        bgColor="#2153E9"
                        src={images.olx.replace("/", "")}
                        height="200"
                        margin={0}
                    />
                </Slide>
                <Slide bgDarken={0.75} bgImage={images.past.replace("/", "")}>
                    <Heading fit caps textColor="white">
                        Let's go back to the past
                    </Heading>
                </Slide>
                <Slide>
                    <Heading
                        size={2}
                        fit
                        textColor="secondary"
                        textFont="primary"
                    >
                        What was the Web like 5 years ago?
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem margin="10px 0 0 0">IE8 😤</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem margin="10px 0 0 0">PWA? 🤔</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem margin="10px 0 0 0">
                                CSS Grid? 🤨
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem margin="10px 0 0 0">
                                Styled components? 💅
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem margin="10px 0 0 0">
                                Centering stuff in CSS? 🤯
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem margin="10px 0 0 0">jQuery 😍</ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide>
                    <Heading fit textColor="secondary">
                        Some things haven't changed that much
                    </Heading>
                </Slide>
                <Slide>
                    <Appear>
                        <CustomImage src={images.amazon.replace("/", "")} />
                    </Appear>
                    <Appear>
                        <CustomImage src={images.github.replace("/", "")} />
                    </Appear>
                    <Appear>
                        <CustomImage src={images.facebook.replace("/", "")} />
                    </Appear>
                    <Appear>
                        <CustomImage src={images.twitter.replace("/", "")} />
                    </Appear>
                    <Appear>
                        <CustomImage src={images.reddit.replace("/", "")} />
                    </Appear>
                    <Appear>
                        <CustomImage src={images.youtube.replace("/", "")} />
                    </Appear>
                </Slide>
                <Slide>
                    <Heading fit textColor="secondary">
                        The Web can be so much more
                    </Heading>
                </Slide>
                <Slide
                    bgDarken={0.75}
                    bgImage={images.explore.replace("/", "")}
                >
                    <Heading fit textColor="secondary">
                        It's fun to explore
                    </Heading>
                </Slide>
                <Slide bgImage={images.future.replace("/", "")} />
                <Slide bgDarken={0.8} bgImage={images.mark.replace("/", "")}>
                    <Heading fit textColor="secondary">
                        Future is weird
                    </Heading>
                </Slide>
                <Slide bgImage={images.elon.replace("/", "")} />
                <Slide bgImage={images.uber.replace("/", "")} />
                <Slide bgImage={images.tv.replace("/", "")} />
                <Slide bgImage={images.gearvr.replace("/", "")} />
                <Slide>
                    <Heading fit textColor="secondary">
                        Back to the Web
                    </Heading>
                </Slide>
                <Slide>
                    <Heading fit textColor="secondary">
                        In 2018, we can do more
                    </Heading>
                </Slide>
                <Slide
                    bgDarken={0.2}
                    bgImage={images.jquery.replace("/", "")}
                />
                <Slide bgDarken={0.6} bgImage={images.react.replace("/", "")}>
                    <Heading fit textColor="secondary">
                        React
                    </Heading>
                </Slide>
                <Slide>
                    <Image
                        fit
                        src={images.renderers.replace("/", "")}
                        height="580"
                        margin={0}
                    />
                    <Cite textColor="secondary">
                        https://github.com/chentsulin/awesome-react-renderer
                    </Cite>
                </Slide>
                <Magic>
                    <Slide>
                        <Heading textColor="secondary">React</Heading>
                    </Slide>
                    <Slide>
                        <Heading textColor="secondary">
                            React for AR and VR
                        </Heading>
                    </Slide>
                    <Slide>
                        <Heading textColor="secondary">
                            Let's start with AR
                        </Heading>
                    </Slide>
                </Magic>
                <Magic>
                    <Slide>
                        <Heading textColor="secondary">AR</Heading>
                    </Slide>
                    <Slide>
                        <Heading textColor="secondary">
                            Augmented Reality
                        </Heading>
                    </Slide>
                </Magic>
                <Slide>
                    <Image
                        fit
                        src={images.ardefinition.replace("/", "")}
                        height="600"
                        margin={0}
                    />
                </Slide>
                <Slide bgImage={images.pokemon_go.replace("/", "")} />
                <Slide bgImage={images.pokemon_ar.replace("/", "")} />
                <Slide bgImage={images.pikachu.replace("/", "")} />
                <Slide bgDarken={0.75} bgImage={images.layer.replace("/", "")}>
                    <Heading fit textColor="secondary">
                        A layer on top of real world
                    </Heading>
                </Slide>
                <Slide bgDarken={0.75} bgImage={images.marker.replace("/", "")}>
                    <Heading fit textColor="secondary">
                        Marker-based AR
                    </Heading>
                </Slide>
                <Slide>
                    <Image
                        fit
                        src={images.hiro.replace("/", "")}
                        height="600"
                        margin={0}
                    />
                </Slide>
                <Slide bgImage={images.arjs.replace("/", "")} />
                <Magic>
                    <Slide>
                        <Heading textColor="secondary">ReactAR</Heading>
                    </Slide>
                    <Slide>
                        <Heading textColor="secondary">React-Web-AR</Heading>
                    </Slide>
                </Magic>
                <Slide>
                    <Image
                        fit
                        src={images.reactar.replace("/", "")}
                        height="580"
                        margin={0}
                    />
                    <Cite textColor="secondary">
                        Source: Nitin Tulswani
                        https://github.com/nitin42/React-Web-AR
                    </Cite>
                </Slide>
                <Slide>
                    <Heading
                        size={2}
                        fit
                        textColor="secondary"
                        textFont="primary"
                    >
                        A React wrapper for AR.js
                    </Heading>
                </Slide>
                <Slide>
                    <CodePane
                        lang="jsx"
                        theme="dark"
                        contentEditable="true"
                        textSize={16}
                        source={`import React, { Component } from 'react';

import { AFrameRenderer, Marker } from 'react-web-ar';

class App extends Component {
    render() {
        return (
          <AFrameRenderer>
            <Marker parameters={{ preset: "hiro" }}>
              <a-box color="blue">
                <a-animation
                  attribute="rotation"
                  to="360 0 0"
                  dur="2000"
                  easing="linear"
                  repeat="indefinite"
                />
              </a-box>
            </Marker>
          </AFrameRenderer>
        )
    }
}

export default App;
`}
                    />
                </Slide>
                <Slide>
                    <Heading fit textColor="secondary">
                        Experimental and work in progress 🚧
                    </Heading>
                </Slide>
                <Slide bgImage={images.yolo.replace("/", "")} />
                <Slide>
                    <Heading fit textColor="secondary">
                        Custom markers
                    </Heading>
                </Slide>
                <Slide bgImage={images.custom_marker.replace("/", "")} />
                <Slide>
                    <CodePane
                        lang="javascript"
                        textSize={30}
                        theme="dark"
                        contentEditable="true"
                        source={`<Marker parameters={{ 
            preset: 'custom',
            type: 'pattern',
            patternUrl: './olx.patt', 
            url: './olx.patt'
          }}>`}
                    />
                </Slide>
                <Slide>
                    <Heading fit textColor="secondary">
                        Let's go further
                    </Heading>
                </Slide>
                <Slide>
                    <Appear fid="1">
                        <Heading size={2} caps fit textColor="secondary">
                            Virtual Reality
                        </Heading>
                    </Appear>
                    <Image
                        fit
                        src={images.vr_beka.replace("/", "")}
                        height="500"
                        margin={0}
                    />
                </Slide>
                <Magic>
                    <Slide>
                        <Heading size={2} textColor="secondary">
                            Virtual Reality
                        </Heading>
                    </Slide>
                    <Slide>
                        <Heading size={2} textColor="secondary">
                            Virtual Reality on Web
                        </Heading>
                    </Slide>
                    <Slide>
                        <Heading size={3} textColor="secondary">
                            Virtual Reality with React
                        </Heading>
                    </Slide>
                </Magic>
                <Magic>
                    <Slide>
                        <Heading size={2}>What is ReactVR?</Heading>
                    </Slide>
                    <Slide>
                        <Heading size={2}>What was ReactVR?</Heading>
                    </Slide>
                </Magic>

                <Slide>
                    <Heading fit textColor="secondary">
                        ReactVR was killed on May 2nd
                    </Heading>
                </Slide>
                <Slide bgColor="black">
                    <Heading
                        size={2}
                        fit
                        textColor="secondary"
                        textFont="primary"
                    >
                        Thank you!
                    </Heading>
                </Slide>

                <Slide>
                    <Heading size={2} fit>
                        React 360
                    </Heading>
                    <Heading size={2} fit>
                        Create exciting 360 and VR experiences using React
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={2} fit>
                        Getting started 🤔
                    </Heading>
                </Slide>
                <Slide bgImage={images.coursea_01.replace("/", "")} />
                <Slide bgImage={images.coursea_02.replace("/", "")} />
                <Slide bgColor="black">
                    <Layout>
                        <Code size={2} fit textColor="secondary">
                            npm install -g react-360-cli
                        </Code>
                    </Layout>
                    <Layout>
                        <Code size={2} fit textColor="secondary">
                            react-360 init HelloVR
                        </Code>
                    </Layout>
                    <Layout>
                        <Code size={2} fit textColor="secondary">
                            cd HelloVR
                        </Code>
                    </Layout>
                    <Layout>
                        <Code size={2} fit textColor="secondary">
                            npm start
                        </Code>
                    </Layout>
                </Slide>
                <Slide bgImage={images.hellovr.replace("/", "")} />
                <Slide>
                    <CodePane
                        lang="javascript"
                        textSize={16}
                        contentEditable="true"
                        source={`export default class HelloVR extends React.Component {
    render() {
        return (
            <View style={styles.panel}>
                <View style={styles.greetingBox}>
                    <Text style={styles.greeting}>
                        Welcome to React 360
                    </Text>
                </View>
            </View>
            );
        }
    };
    
    const styles = StyleSheet.create({
        // define custom styles for your components
    });
    
    AppRegistry.registerComponent('HelloVR', () => HelloVR);`}
                    />
                </Slide>
                <Slide>
                    <Heading size={2} fit>
                        Runtime
                    </Heading>
                </Slide>
                <Slide bgColor="black" textColor="secondary">
                    <Heading
                        size={2}
                        fit
                        textColor="secondary"
                        textFont="primary"
                    >
                        Each React 360 application is made up of two pieces:
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>your React application</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                the code that turns your React components into
                                3D elements
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide bgColor="black">
                    <Heading size={2} textColor="secondary" textFont="primary">
                        We refer to this second piece as the "runtime"
                    </Heading>
                </Slide>
                <Slide
                    bgDarken={0.75}
                    bgImage={images.surface.replace("/", "")}
                >
                    <Heading fit caps textColor="secondary">
                        Surfaces
                    </Heading>
                </Slide>
                <Slide bgColor="black">
                    <Heading size={1} textColor="secondary" textFont="primary">
                        Surfaces
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>
                                allow you to add 2D interfaces to your 3D space
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>defined in the runtime</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                React components are attached to them
                            </ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>
                                Two types:
                                <List margin="10px 0 0 0">
                                    <Appear>
                                        <ListItem margin="0 0 0 30px">
                                            Cylinder Surface
                                        </ListItem>
                                    </Appear>
                                    <Appear>
                                        <ListItem margin="0 0 0 30px">
                                            Flat Surface
                                        </ListItem>
                                    </Appear>
                                </List>
                            </ListItem>
                        </Appear>
                    </List>
                </Slide>
                <Slide>
                    <Heading fit caps textColor="secondary">
                        3D objects
                    </Heading>
                </Slide>
                <Slide>
                    <CodePane
                        lang="javascript"
                        textSize={16}
                        contentEditable="true"
                        source={`
    // to reference a GLTF2 model
    <Entity source={{gltf2: asset('myModel.gltf')}} />
    
    // to reference an untextured OBJ model
    <Entity source={{obj: asset('myModel.obj')}} />
    
    // to reference an OBJ with matching MTL file
    <Entity source={{obj: asset('myModel.obj'), mtl: asset('myModel.mtl')}} />
    `}
                    />
                </Slide>
                <Slide>
                    <Heading fit caps textColor="secondary">
                        Events
                    </Heading>
                </Slide>
                <Slide bgColor="black" textColor="secondary">
                    <Heading
                        size={2}
                        fit
                        textColor="secondary"
                        textFont="primary"
                    >
                        Supported Input Events
                    </Heading>
                    <List>
                        <Appear>
                            <ListItem>onEnter</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>onExit</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>onMove</ListItem>
                        </Appear>
                        <Appear>
                            <ListItem>onInput</ListItem>
                        </Appear>
                        <Appear>
                            <List>
                                <ListItem margin="0 0 0 30px">
                                    MouseInputEvent
                                </ListItem>
                                <Appear>
                                    <ListItem margin="0 0 0 30px">
                                        KeyboardInputEvent
                                    </ListItem>
                                </Appear>
                                <Appear>
                                    <ListItem margin="0 0 0 30px">
                                        TouchInputEvent
                                    </ListItem>
                                </Appear>
                                <Appear>
                                    <ListItem margin="0 0 0 30px">
                                        GamepadInputEvent
                                    </ListItem>
                                </Appear>
                            </List>
                        </Appear>
                    </List>
                </Slide>
                <Slide bgColor="black">
                    <Heading
                        size={2}
                        fit
                        textColor="secondary"
                        textFont="primary"
                    >
                        Allright, that's cool but...
                    </Heading>
                </Slide>
                <Slide bgImage={images.vr.replace("/", "")} bgDarken={0.5}>
                    <Heading size={2} fit textColor="white">
                        Where's the VR?!
                    </Heading>
                </Slide>
                <Slide bgColor="black">
                    <Heading
                        size={2}
                        fit
                        textColor="secondary"
                        textFont="primary"
                    >
                        🎉 THE DEMO 🎉
                    </Heading>
                </Slide>
                <Slide bgColor="black">
                    <Heading
                        size={2}
                        fit
                        textColor="secondary"
                        textFont="primary"
                    >
                        What if I wanted to do both?
                    </Heading>
                </Slide>
                <Slide
                    bgImage={images.hololens.replace("/", "")}
                    bgDarken={0.5}
                >
                    <Heading size={2} fit textColor="white">
                        Hololens
                    </Heading>
                </Slide>
                <Slide>
                    <Image
                        fit
                        src={images.expensive.replace("/", "")}
                        height="500"
                        margin={0}
                    />
                </Slide>
                <Slide>
                    <Heading size={2} caps fit textFont="primary">
                        👷‍♀️🚧 Warning: Prototype ahead! 🚧👷‍♂️
                    </Heading>
                </Slide>
                <Slide>
                    <Heading size={2} caps fit textFont="primary">
                        The Web offers us unlimited possibilities 🌐
                    </Heading>
                </Slide>
                <Slide bgColor="black">
                    <Heading
                        size={2}
                        caps
                        fit
                        textColor="secondary"
                        textFont="primary"
                    >
                        And it's waiting for us to explore them 😎
                    </Heading>
                </Slide>
                <Slide bgColor="black">
                    <Heading
                        size={2}
                        fit
                        textColor="secondary"
                        textFont="primary"
                    >
                        Thank you!
                    </Heading>
                </Slide>
            </Deck>
        );
    }
}
