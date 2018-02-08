export default class WidgetList {
    constructor(contentList) {
        this.contentList = contentList;
        this.currentIndex = 0;
    }

    findCurrentIndex(url) {
        if (!this.contentList.length)
            console.warn("Widget list empty. Is the backend correctly setup ?");
            
        this.currentIndex =
            Math.max(0,
                this.contentList.findIndex(el => url.indexOf(el) != -1));
    }

    getNext() {
        this.currentIndex = (this.currentIndex + 1) % this.contentList.length;
        let url = this.contentList[this.currentIndex];
        return url;
    }
}
