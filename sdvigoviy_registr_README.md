Вызов
var ds=P0,
    st=P1,
    sh=P2,
    mr=P3,
    oe=P4;
var reg = require('sdvigoviy_registr').connect({DataPin:ds, LatchPin:st, ClockPin:sh, ResetPin:mr, OutputEnablePin: oe}, 1, true);
mr, oe, 1, true не обязательны, но тогда
mr+5v oe gnd необходимо подключить
1-число регистров, если не писать будет 1, может быть много
true - можно не писать будет тру, если false, то не будут создоваться глобальные переменные удобно если много регистров
Можно изменять масив внутри reg._arr_pin и использовать метод reg.PinUpdate()
Остольные методы
reg.Reset() сбросить
reg.Hi_z() переключение HI-Z
Q0.write(1)или true включит пин q0
Q0.write(0)или false выключит q0
Q0.toggle() переключить, был включен-выключить, был выключен-включить

Подключать регистры последовательно через q7' на ds как в инструкции. тогда при
var reg = require('sdvigoviy_registr').connect({ds:ds,st:st,sh:sh,mr:mr,oe: oe},2,true);
будет от Q0 до Q15 и используються так же,
при подключении большого количества регистров, лучше использовать false при вызове библиотеки
и тогда активировать их все можно влияя на reg._arr_pin
for (i=0; i <reg._arr_pin.length;i++ ){
   reg._arr_pin [i]=1;//или тру
}
reg.PinUpdate ();
порядковый номер в массиве _arr_pin сопоставин номеру пина, Q0=q0....Q7=q7...Q8=q0 следующего регистра Q15=q7 второго регистра и т.д.
