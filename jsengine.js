class Vector {	
    constructor() {
        if(arguments.length > 1)
            this.coords = arguments;
        else
            for(var i = 0; i < arguments[0], i++)
                this.coord.push = new Number(0);
    }
	
    get length {
        return vectorLengthCalculator(this.coords);
    }

    static vectorLengthCalculator(coords) {
        if(coords.length > 1) {
            var first = coords[0];
            coords.splice(0, 1);
            return Math.sqrt(first * first + vectorLengthCalculator(coords));
        } else {
            return coords[0] * coords[0];
        }
    }
	
    multiply(multipler) {
        if(multipler instanceof Vector)
            for(var i = 0; i < number.length; i++)
                this.coords[i] *= multipler[i];
        else
            for(var i = 0; i < this.coords.length; i++)
                this.coords[i] *= multipler;
    }
}
