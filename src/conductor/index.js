import WidgetController from './WidgetController'

window.addEventListener("load", start);

function start() {
	new WidgetController(window).start();
}
