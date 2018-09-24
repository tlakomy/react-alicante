// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface } from "react-360-web";

function init(bundle, parent, options = {}) {
    const r360 = new ReactInstance(bundle, parent, {
        // Add custom options here
        fullScreen: true,
        ...options
    });
    const cylinder = new Surface(4000, 600, Surface.SurfaceShape.Cylinder);
    r360.renderToSurface(
        r360.createRoot("cylinder", {
            /* initial props */
        }),
        cylinder
    );

    [-1.2, -0.6, 0, 0.6, 1.2, 1.8, 2.4]
        .map(angle => {
            const panel = new Surface(350, 600, Surface.SurfaceShape.Flat);
            panel.setAngle(angle, 0);
            return panel;
        })
        .forEach((panel, index) =>
            r360.renderToSurface(
                r360.createRoot("panel", {
                    index
                }),
                panel
            )
        );

    // Load the initial environment
    r360.compositor.setBackground(r360.getAssetURL("360_world.jpg"));
}

window.React360 = { init };
