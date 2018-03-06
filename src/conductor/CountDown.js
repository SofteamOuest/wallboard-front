const TIMEOUT = 200;

export default class CountDown
{
    constructor(wndw, duration) {
        this.window = wndw;

        let initialWidth = 100;        
        this.width = initialWidth;
        this.timeout = TIMEOUT;
        this.increment = this.timeout * initialWidth / duration;
    }

    show() {
        this.initDisplay();
        this.decreaseAndShow();
    }

    initDisplay() {
        this.div = this.window.document.createElement('div');
        this.div.style.position = 'fixed';
        this.div.style.right = '0';
        this.div.style.bottom = '0';
        this.div.style.backgroundColor = 'currentColor';
        this.div.style.height = '5px';

        this.window.document.body.appendChild(this.div);
    }

    decreaseAndShow() {
        // TODO use css animations instead
        if (this.width > 0) {
            this.div.style.width = Math.floor(this.width) + '%';
            this.width -= this.increment;
            setTimeout(() => this.decreaseAndShow(), this.timeout);
        }
    }
}