# Getting Started

## Install Photo Sphere Viewer

#### With npm or yarn

```bash
npm install photo-sphere-viewer

yarn add photo-sphere-viewer
```

#### Via CDN

Photo Sphere Viewer is available on [jsDelivr](https://cdn.jsdelivr.net/npm/photo-sphere-viewer/dist/)

#### Manually

You can also [download the latest release](https://github.com/mistic100/Photo-Sphere-Viewer/releases)

## Dependencies

#### Required
 * [three.js](https://threejs.org)
 * [uEvent](https://github.com/mistic100/uEvent)

#### Optionals
 * [promise-polyfill](https://github.com/taylorhakes/promise-polyfill) for IE compatibility
 * [three/DeviceOrientationControls.js](https://github.com/mrdoob/three.js/blob/master/examples/js/controls/DeviceOrientationControls.js) for gyroscope support
 * [three/StereoEffect.js](https://github.com/mrdoob/three.js/blob/master/examples/js/effects/StereoEffect.js) for VR support
 * [NoSleep.js](https://github.com/richtr/NoSleep.js) for better VR experience


## Your first viewer

Include all JS & CSS files in your page manually or with your favorite bundler and init the viewer.

```html
<div id="viewer"></div>

<style>
  #viewer {
    width: 100vw;
    height: 50vh;
  }
</style>

<script>
  const viewer = new PhotoSphereViewer({
    container: document.querySelector('#viewer'),
    panorama: 'path/to/panorama.jpg'
  });
</script>
```

::: tip Cropped panoramas
If your image is not covering a full 360°×180° sphere, it will be deformed. You can fix it by providing [cropping data](./cropped-panorama).
:::
