/**
 * Represents a player in the riddle game.
 */
export default class Player {
    constructor(name) {
        this.name = name;
        this.arrTime = [];
        this.avg = 0;
        this.total = 0;
        this.record=0
    }

    /**
     * Records the time taken since the given start timestamp.
     * @param {number} start - Start time in milliseconds.
     */
    recordTime(start) {
        const time = +((Date.now() - start) / 1000).toFixed(2);
        this.total = +(this.total + time).toFixed(2);
        this.arrTime.push(time);
    }

    /**
     * Calculates and returns the average time.
     * @returns {number} Average time in seconds.
     */
    updatAvg() {
    this.avg = +(this.total / this.arrTime.length).toFixed(2); 
}

    // showStatus() {
    //     this.avg = this.total / this.arrTime.length;
    //     return this.avg.toFixed(2);
    // }
}
