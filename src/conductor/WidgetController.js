import WidgetListService from './WidgetListService'
import Wallboard from './Wallboard'

export default class WidgetController {
    constructor(wndw) {
        this.window = wndw;
    }

    start() {
        new WidgetListService().getList().then(
            widgetList => {
                widgetList.findCurrentIndex(this.window.location.href);
                new Wallboard(this.window).show(widgetList.getNext());
            }
        )
    }
}