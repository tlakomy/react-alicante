import {VRInstance} from 'react-vr-web';
import {Module} from 'react-vr-web';
import * as THREE from 'three';
import * as ReactVR from 'react-vr-web';
import * as OVRUI from 'ovrui';

function merge(foo, bar) {
  const merged = {};
  for (const each in bar) {
    if (foo.hasOwnProperty(each) && bar.hasOwnProperty(each)) {
      if (typeof foo[each] === 'object' && typeof bar[each] === 'object') {
        merged[each] = merge(foo[each], bar[each]);
      } else {
        merged[each] = bar[each];
      }
    } else if (bar.hasOwnProperty(each)) {
      merged[each] = bar[each];
    }
  }
  for (const each in foo) {
    if (!(each in bar) && foo.hasOwnProperty(each)) {
      merged[each] = foo[each];
    }
  }
  return merged;
}


class RCTTestDom extends ReactVR.RCTBaseView {
  constructor(guiSys: GuiSys) {
    super();
    this.view = new OVRUI.UIView(guiSys);
    const tagString = `
    <a-scene embedded arjs='trackingMethod: best;'>
      <a-anchor hit-testing-enabled='true'>
        <a-box position='0 0.5 0' material='opacity: 0.5; side: double; color: blue;'>
          <a-torus-knot radius='0.26' radius-tubular='0.05'>
            <a-animation attribute="rotation" to="360 0 0" dur="3000" easing='linear' repeat="indefinite"></a-animation>
          </a-torus-knot>
        </a-box>
      </a-anchor>
      <a-camera-static/>
    </a-scene>
    `;

    const range = document.createRange();
    // make the parent of the first div in the document becomes the context node
    range.selectNode(document.getElementsByTagName("div").item(0));
    this.newContent = range.createContextualFragment(tagString);

    document.body.appendChild(this.newContent);

    this.view.add(document.querySelector('a-scene').object3D);
  }

  discard() {
    super.discard();
    document.body.removeChild(this.newContent);
    this.newContent = null;
  }

  static describe() {
    return merge(super.describe(), {
      // declare the native props sent from react to runtime
      NativeProps: {
      },
    });
  }
}

function init(bundle, parent, options) {
  // Create a scene so we can add to it; otherwise the VRInstance creates one.
  const scene = new THREE.Scene();

  const vr = new VRInstance(bundle, 'CubeSample', parent, {
    cursorVisibility: 'visible',
    customViews: [{name: 'TestDom', view: RCTTestDom}],
    scene: scene,
  });

  vr.render = function(timestamp) {
  };

  // Begin the animation loop
  vr.start();
  return vr;
}

window.ReactVR = {init};