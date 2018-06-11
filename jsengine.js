class Vector {	
	constructor() 
		if(typeof arguments[0] == "Array")
			this.coord = arguments;
		else(typeof arguments[0] == "Number")
			for(var i = 0; i < arguments[0])
				this.coord.push = new Number(0);
	}
	
	get length {
		return Math.sqrt(this.X*this.X + this.Y*this.Y);
	}
	
	multiply(number) {
		if(number instanceof Vector) {
			for(var i = 0; i < number.length; i++) this.coord[i] *= number[i];
		} else {
			for(var i = 0; i < this.coords.length; i++) this.coord[i] *= number;
		}
	}
}