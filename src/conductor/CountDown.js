export default class CountDown
{
    constructor(wndw, index) {
        this.index = 5 * index;
        this.total = 5 * index;
        this.window = wndw;
    }

    show() {
        this.initDisplay();
        this.decreaseAndShow();
    }

    initDisplay() {
        this.div = this.window.document.createElement('div');
        this.div.style.position = 'absolute';
        this.div.style.right = '0';
        this.div.style.bottom = '0';
        this.div.style.backgroundColor = 'currentColor';
        this.div.style.height = '5px';

        this.window.document.body.appendChild(this.div);
    }

    decreaseAndShow() {
        // TODO use css animations instead
        if (this.index > 0) {
            this.div.style.width = (this.index / this.total * 100) + '%';
            --this.index;
            setTimeout(() => this.decreaseAndShow(), 200);
        }
    }
}