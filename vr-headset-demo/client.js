// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface, Location } from "react-360-web";
import SimpleRaycaster from "simple-raycaster";


function init(bundle, parent, options = {}) {
    const r360 = new ReactInstance(bundle, parent, {
        // Add custom options here
        fullScreen: true,
        ...options
    });

    // Render your app content to the default cylinder surface
    const myCylinderSurface = new Surface(
        4000 /* width */,
        600 /* height */,
        Surface.SurfaceShape.Cylinder /* shape */
    );
    r360.renderToSurface(
        r360.createRoot("vr_headset_demo", {
            /* initial props */
        }),
        myCylinderSurface
    );

    // Load the initial environment
    r360.compositor.setBackground(r360.getAssetURL("chess-world.jpg"));

    const earthLocation = new Location([0, 5, -2]);

    // Render to this location
    r360.renderToLocation(r360.createRoot("earth"), earthLocation);

    r360.controls.clearRaycasters();
    r360.controls.addRaycaster(SimpleRaycaster);

    const player = r360.compositor.createVideoPlayer("myplayer");
    // Instantiate the video, but do not play it yet
    player.setSource(r360.getAssetURL("puppies.mp4"), "2D");
}

window.React360 = { init };
