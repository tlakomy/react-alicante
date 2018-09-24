// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Location } from "react-360-web";

function init(bundle, parent, options = {}) {
    const r360 = new ReactInstance(bundle, parent, {
        // Add custom options here
        fullScreen: true,
        ...options
    });

    // Create a location two meters in front of the user, and one meter down
    const bunnyLocation = new Location([0, 0, -2]);

    // Render to this location
    r360.renderToLocation(r360.createRoot("bunny"), bunnyLocation);

    [400, -400].forEach(location => {
        let rabbitLocation = new Location([location, 0, -20]);
        r360.renderToLocation(r360.createRoot("rabbit"), rabbitLocation);

        rabbitLocation = new Location([location, 0, 620]);
        r360.renderToLocation(r360.createRoot("rabbit"), rabbitLocation);
    });

    // Load the initial environment
    r360.compositor.setBackground(r360.getAssetURL("grasspanorama.jpg"));
}

window.React360 = { init };
