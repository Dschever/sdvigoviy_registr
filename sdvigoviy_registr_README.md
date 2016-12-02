Вызов
var ds=P0,
    st=P1,
    sh=P2,
    mr=P3,
    oe=P4;
var reg = require('sdvigoviy_registr').connect({ds:ds,st:st,sh:sh,mr:mr,oe: oe},1,true);
mr, oe, 1, true не обязательны, но тогда
mr+5v oe gnd
1-число регистров, если не писать будет 1, может быть много
true - можно не писать будет тру, если false, то не будут создоваться глобальные переменные удобно если много регистров
Можно изменять масив внутри reg._arr_pin и использовать метод reg.PinUpdate()
Остольные методы
reg.Reset() сбросить
reg.HI_Z() переключение HI-Z
R0.write(1)или true включит пин q0
R0.write(0)или false выключит q0
 
