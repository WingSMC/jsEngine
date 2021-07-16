var loaded = false;
var jsEngine;
import 'user_defined_js';
/*
*   should contain this:
*   @param renderTarget should be the canvas
*
*   window.onload = function() {
*       jsEngine = new EngineCore(renderTarget);
*   }
*/


class EngineCore {
    constructor(renderTarget) {
        this.contextHeight = renderTarget.height;
        this.contextWidth = renderTarget.width;
        this.gl = renderTarget.getContext("experimental-webgl") || renderTarget.getContext("webgl");
        if (!gl) {
            alert("Unable to initialize WebGL. Your browser or machine may not support it.");
            return null;
        } else {
            this.gl.clearColor(0.0, 0.0, 0.0, 1.0)
            this.gl.clear(gl.COLOR_BUFFER_BIT);
        }
    }

    start() {
        window.requestAnimationFrame(tick(0));
        var dt = 0;
        // var TOTALTIME = 0;
        var previousTime;
        var currentTime = Date.now();
        for (;;)
        {
            previousTime = currentTime;
            currentTime = Date.now();
            dt = currentTime - previousTime;
            // TOTALTIME +=dt;
            // window.requestAnimationFrame(this.update(dt).bind(this));
            tick(dt);
        }
    }

    tick(dt) {
        if (dt > 0.1) dt = 0.1;

    }

    pause() {
        if (!this.isPaused) {
            this.isPaused = true;
            this.pausedTime = Date.now();
        } else {
            this.startTime += (Date.now() - this.pausedTime);
        }
    }

    stop () {

    }
}

class UI {

}

class Level {
    constructor() {

    }
    // meshes, movables, level streaming position
}

class Camera {
    //pos / target, perspective, filter / post process
}

class RenderedAsset{
    constructor(location) {
        this.location = new Vector3(location);
        this.rotation = new Vector3();
    }
    tick() {}
    draw() {}
}

class Mesh extends RenderedAsset {
    constructor() {
        // has collision
    }
}

class MovableMesh extends Mesh {
    constructor() {
        // can move
        this.movement = new Vector3();
        this.angularspeed = new Vector3();
    }
}

class Player extends MovableMesh {
    // restricted by map bounds and recives controller input
}

class Vector3 {
    /*
    * @overload:    Vector3(Array[3])
    *               Vector3(int, int, int)
    *               Vector3(void)
    */
    constructor() {
        if (Array.isArray(arguments[0])) {
            this.X = arguments[0][0];
            this.Y = arguments[0][1];
            this.Z = arguments[0][2];
        } else if (arguments.length > 1) {
            this.X = arguments[0];
            this.Y = arguments[1];
            this.Z = arguments[2];
        } else {
            this.X = 0;
            this.Y = 0;
            this.Z = 0;
        }
    }

    /*
    * @return |Vector3|
    */
    get length() {
        return Math.sqrt(this.X * this.X + this.Y * this.Y + this.Z * this.Z);
    }

    static difference(vec1, vec2) {
        return new Vector3(vec1.X - vec2.X, vec1.Y - vec2.Y, vec1.Z - vec2.Z);
    }

    static sum(vec1, vec2) {
        return new Vector3(vec1.X + vec2.X, vec1.Y + vec2.Y, vec1.Z + vec2.Z);
    }

    static multiply(vec1, multipler) {
        if (multipler instanceof Vector3) {
            vec1.X *= multipler.X;
            vec1.Y *= multipler.Y;
            vec1.Z *= multipler.Z;
        } else {
            vec1.X *= multipler;
            vec1.Y *= multipler;
            vec1.Z *= multipler;
        }
        return vec1;
    }
}

/* Shaders

void main() {
    float vertex = vec4(0.0, 0.0, 0.0, 1.0);
}

//*/
