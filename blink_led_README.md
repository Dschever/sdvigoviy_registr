# sdvigoviy_registr
Iskra JS библиотека для сдвигового регисьра
добавляем библиотеку с помощью 
var xxx= require("blink_led").connect([P11,P10,P0,P1,P2,P3,P4,P5,P6,P7], 120);
где arr[] массив с порядком диодов, 120-speed скорость указывать необязательно
вариант
var xxx= require("blink_led").connect([P11,P10,P0,P1,P2,P3,P4,P5,P6,P7]);

методы 
xxx.Start()
xxx.Stop()
