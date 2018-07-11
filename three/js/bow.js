var container, stats, controls;
var camera, scene, renderer, light;

var clock = new THREE.Clock();

var mixers = [];

init();
animate();

function init() {

    container = document.createElement('div');
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.set(100, 75, 300);

    controls = new THREE.OrbitControls(camera);
    controls.target.set(0, 100, 0);
    controls.update();

    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xa0a0a0, 200, 800);

    light = new THREE.HemisphereLight(0xE8EAF6, 0x1A237E);
    light.position.set(300, 500, 300);
    scene.add(light);

    light = new THREE.DirectionalLight(0xffffff);
    light.position.set(-500, 500, 500);
    light.castShadow = true;
    light.shadow.camera.top = 180;
    light.shadow.camera.bottom = -100;
    light.shadow.camera.left = -120;
    light.shadow.camera.right = 120;
    scene.add(light);

    var grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000);
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    scene.add(grid);

    // model
    var loader = new THREE.FBXLoader();
    loader.load('model/character.fbx', function (object) {

        object.mixer = new THREE.AnimationMixer(object);
        mixers.push(object.mixer);

        var action = object.mixer.clipAction(object.animations[0]);
        action.setLoop(THREE.LoopOnce);
        action.enabled = true;
        action.clampWhenFinished = true;
        action.play();

        object.traverse(function (child) {

            if (child.isMesh) {

                child.castShadow = true;
                child.receiveShadow = true;

            }

        });

        scene.add(object);

    });

    renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);


}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}

//

function animate() {

    requestAnimationFrame(animate);

    if (mixers.length > 0) {

        for (var i = 0; i < mixers.length; i++) {

            mixers[i].update(clock.getDelta());

        }

    }

    renderer.render(scene, camera);


}