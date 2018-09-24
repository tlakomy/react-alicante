// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

import { VRInstance } from "react-vr-web";
import * as SimpleRaycaster from "simple-raycaster";

function init(bundle, parent, options) {
  const vr = new VRInstance(bundle, "HelloVR", parent, {
    raycasters: [
      SimpleRaycaster // Add SimpleRaycaster to the options
    ],
    cursorVisibility: "auto", // Add cursorVisibility
    ...options
  });
  vr.start();
  return vr;
}

window.ReactVR = { init };
