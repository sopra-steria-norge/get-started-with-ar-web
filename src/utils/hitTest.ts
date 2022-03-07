import { WebGLRenderer, XRFrame, XRHitTestSource } from "three";

let hitTestSource: XRHitTestSource;
let hitTestSourceRequested = false;

export function handleXRHitTest(
  renderer: WebGLRenderer,
  frame: XRFrame,
  onHitTestResultReady: (hitPoseMatrix: Float32Array) => void,
  onHitTestResultEmpty: () => void,
) {
  // TODO: Implement hit-testing logic.
};
