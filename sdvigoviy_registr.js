var SuperRegistr = function(opts, i, tr){
	opts = opts || {};
    	i = i || 1;
   	tr = tr || true;
    	this._arr_pin = create_pin(i, this, tr);
	this._ds = opts.ds;
	this._st = opts.st;
  	this._sh = opts.sh;
	this._mr = opts.mr;
  	this._oe = opts.oe;
	this._hi_z = false;
    	if(this._mr!=undefined) this._mr.write(1);
   	if(this._oe!=undefined) this._oe.write(0);
};
var SuperPin = function(p, registr){
	this._pin = p;
	this._registr = registr;
};
SuperRegistr.prototype.PinUpdate = function (){
	for (var i = this._arr_pin.length-1; i >=0 ; i--) {
		if(this._arr_pin[i] == true ){
			this._ds.write(1);
			this._sh.write(1);
			this._sh.write(0);
			this._ds.write(0);
		}else if(this._arr_pin[i] == false){
			this._ds.write(0);
			this._sh.write(1);
			this._sh.write(0);
		}else{
			console.log("Error Arr_Pin[i]");
			this._ds.write(0);
			this._sh.write(1);
			this._sh.write(0);
		}
	}
	this._st.write(1);
	this._st.write(0);
};

SuperPin.prototype.write = function(on_off){
	if(on_off == true){
		this._registr._arr_pin[this._pin]=1;
		this._registr.PinUpdate();
	}else if(on_off == false){
                this._registr._arr_pin[this._pin]=0;
		this._registr.PinUpdate();
	}else{
		console.log("Error    write(true) or false, 1,0");
	}
};

SuperRegistr.prototype.Reset = function (){
  if(this._mr!=undefined){
    	this._mr.write(0);
	this._st.write(1);
	this._st.write(0);
    	this._mr.write(1);
  }else if(this._mr==undefined){
  	for (var i=0; this._arr_pin.length>i; i++) {
  		this._arr_pin[i] = 0;
  	}
  	this._st.write(1);
	this._st.write(0);
  }else{
  	console.log("Error  | mr |  Error");
  }
};

SuperRegistr.prototype.Hi_z = function (){
	if(this._mr!=undefined){
		if(this._hi_z == false){
			this._hi_z = true;
			this._oe.write(1);
		}else if(this._hi_z == true){
			this._hi_z = false;
			this._oe.write(0);
		}
	}else{
		console.log("Error  | oe |  Error");
	}
};

function create_pin(i, registr, tr){
	var arr_pin=[];
	for(p=0;p<i*8;p++){
        	arr_pin.push(0);
  		if(tr == true)global["Q"+p] = new SuperPin(p, registr); 
	}
	return arr_pin;
};

exports.connect = function(opts, i, tr){
	return new SuperRegistr(opts, i, tr);
};
