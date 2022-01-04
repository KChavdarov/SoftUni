function baloons() {
    function Balloon(color, gasWeight) {
        this.color = color;
        this.gasWeight = gasWeight;
    }

    function PartyBalloon(color, gasWeight, ribbonColor, ribbonLength) {
        Balloon.call(this, color, gasWeight);
        Object.defineProperty(this, 'ribbon', {
            set(value) {
                this._ribbon = value;
            },
            get() {
                return this._ribbon;
            }
        });
        this.ribbon = {
            color: ribbonColor,
            length: ribbonLength,
        };
    }
    PartyBalloon.prototype = Object.create(Balloon.prototype);

    function BirthdayBalloon(color, gasWeight, ribbonColor, ribbonLengt, text) {
        PartyBalloon.call(this, color, gasWeight, ribbonColor, ribbonLengt);
        Object.defineProperty(this, 'text', {
            set(value) {
                this._text = value;
            },
            get() {
                return this._text;
            }
        });
        this.text = text;
    }
    BirthdayBalloon.prototype = Object.create(PartyBalloon.prototype);

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    };
}


// function baloons() {
//     class Balloon {
//         constructor(color, gasWeight) {
//             this.color = color;
//             this.gasWeight = gasWeight;
//         }
//     }

//     class PartyBalloon extends Balloon {
//         constructor(color, gasWeight, ribbonColor, ribbonLengt) {
//             super(color, gasWeight);
//             this._ribbon = {
//                 color: ribbonColor,
//                 length: ribbonLengt,
//             };
//         }
//         get ribbon() {
//             return this._ribbon;
//         }
//     }

//     class BirthdayBalloon extends PartyBalloon {
//         constructor(color, gasWeight, ribbonColor, ribbonLengt, text) {
//             super(color, gasWeight, ribbonColor, ribbonLengt);
//             this._text = text;
//         }
//         get text() {
//             return this._text;
//         }
//     }

//     return {
//         Balloon,
//         PartyBalloon,
//         BirthdayBalloon,
//     };
// }