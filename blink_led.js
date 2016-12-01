var SuperWorm = function(arr, speed){
  this._n = 0;
  this._speed = speed || 60;
  this._arr = arr || [];
  this._time;
};
SuperWorm.prototype.Start = function (){
  var n = this._n;
  var arr = this._arr;
  var time = this._time;
  var speed = this._speed;
  function Hz(){
    arr[n].write(1);
  //setTimeout(function(){
    var y=n-1;
    if(y<0){
      y=arr.length-1;
    }else if(y>arr.length-1){
      y=0;
    };
    arr[y].write(0);
    n=(n+1)%10;
  //}, speed/10); 
    time = setTimeout(Hz, speed);
  };
  Hz();
};
SuperWorm.prototype.Stop = function (){
  clearTimeout(this._time);
};
exports.connect = function(arr, speed){
  return new SuperWorm(arr, speed);
};
