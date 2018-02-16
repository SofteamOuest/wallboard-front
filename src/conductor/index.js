import WidgetController from './WidgetController'

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

window.addEventListener("load", start);

function start() {
	new WidgetController(window).start();
}
