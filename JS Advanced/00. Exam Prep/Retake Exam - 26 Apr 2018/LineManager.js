class LineManager {
    constructor(stops) {
        this.stops = stops;
        this.currentStop = this.stops[0];
        this.duration = 0;
        this.delay = 0;
    }

    set stops(value) {
        if (value.some(a => typeof a.name != 'string' || a.name == '')) {
            throw new Error('name cannot be an empty string');
        }
        if (value.some(a => typeof a.timeToNext != 'number' || a.timeToNext < 0)) {
            throw new Error('time must be a positive number');
        }
        this._stops = value;
    }
    get stops() {
        return this._stops;
    }

    get atDepot() {
        return this.currentStop == this.stops[this.stops.length - 1];
    }

    get nextStopName() {
        let nextStopIndex = this.stops.indexOf(this.currentStop) + 1;
        if (nextStopIndex >= this.stops.length) {
            return 'At depot.';
        }
        return this.stops[nextStopIndex].name;
    }

    get currentDelay() {
        return this.delay;
    }


    arriveAtStop(minutes) {
        if (minutes < 0) {
            throw new Error('minutes cannot be negative');
        }
        if (this.currentStop == this.stops[this.stops.length - 1]) {
            throw new Error('no more stops left');
        }
        this.delay += minutes - this.currentStop.timeToNext;
        let nextStopIndex = this.stops.indexOf(this.currentStop) + 1;
        this.currentStop = this.stops[nextStopIndex];
        this.duration += minutes;
        return !(this.currentStop == this.stops[this.stops.length - 1]);
    }

    toString() {
        let output = [this.atDepot ? 'Course completed' : 'Line summary'];
        if (!this.atDepot) { output.push(`- Next stop: ${this.nextStopName}`); }
        output.push(`- Stops covered: ${this.stops.indexOf(this.currentStop)}`);
        output.push(`- Time on course: ${this.duration} minutes`);
        output.push(`- Delay: ${this.delay} minutes`);
        return output.join('\n');
    }
}

// let mgr = new LineManager([{name: 'depot', timeToNext: 1}]);

// Initialize a line manager with correct values
const man = new LineManager([
    { name: 'Depot', timeToNext: 4 },
    { name: 'Romanian Embassy', timeToNext: 2 },
    { name: 'TV Tower', timeToNext: 3 },
    { name: 'Interpred', timeToNext: 4 },
    { name: 'Dianabad', timeToNext: 2 },
    { name: 'Depot', timeToNext: 0 },
]);

// Travel through all the stops until the bus is at depot
while (man.atDepot === false) {
    console.log(man.toString());
    man.arriveAtStop(4);
    // console.log(man.nextStopName);
}

console.log(man.toString());

// // // Should throw an Error (minutes cannot be negative)
// // man.arriveAtStop(-4);
// // // Should throw an Error (last stop reached)
// // man.arriveAtStop(4);

// // Should throw an Error at initialization
// const wrong = new LineManager([
//     { name: 'Stop', timeToNext: { wrong: 'Should be a number' } }
// ]);