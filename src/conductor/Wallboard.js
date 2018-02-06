const TIMEOUT = 10 * 1000;

export default class Wallboard {
    constructor(wndw) {
        this.timeout = TIMEOUT;
        this.window = wndw;
    }

    show(url) {
        setTimeout(() => this.window.location.assign(url), this.timeout);
    }
}