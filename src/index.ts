import { WebGLRenderer } from "three/src/renderers/WebGLRenderer";
import { ARButton } from "three/examples/jsm/webxr/ARButton";
import { createScene } from "./scene";
import {
  browserHasImmersiveArCompatibility,
  displayIntroductionMessage,
  displayUnsupportedBrowserMessage,
} from "./utils/domUtils";

import "./styles.css";

function initializeXRApp() {
  const { devicePixelRatio, innerHeight, innerWidth } = window;

  const renderer = new WebGLRenderer({ antialias: true, alpha: true });

  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(devicePixelRatio);

  renderer.xr.enabled = true;

  document.body.appendChild(renderer.domElement);

  document.body.appendChild(
    ARButton.createButton(renderer, { requiredFeatures: ["hit-test"] }),
  );

  displayIntroductionMessage();

  createScene(renderer);
};

async function start() {
  const isImmersiveArSupported = await browserHasImmersiveArCompatibility();

  isImmersiveArSupported
    ? initializeXRApp()
    : displayUnsupportedBrowserMessage();
}

start();
