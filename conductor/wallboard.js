(function () {
	'use strict';

	const MOCK_URLS = [
		'/widgets/google-calendar/index.html',
		'/widgets/twitter/index.html',
	];

	const WIDGET_API = 'http://localhost:5000/api/widgets';

	const TIMEOUT = 10 * 1000;

	window.addEventListener("load", start);

	function start() {
		new WidgetAdapter(window).start();
	}

	class WidgetAdapter {
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

	class WidgetListService {
		getList() {
			return new Promise((resolve, reject) =>
				fetch(WIDGET_API)
					.then(response => response.json())
					.then(response =>
						resolve(new WidgetList(response.map(el => el.uri))))
					.catch(reason => reject(reason)));
		}
	}

	class WidgetList {
		constructor(contentList) {
			this.contentList = contentList;
			this.currentIndex = 0;
		}

		findCurrentIndex(url) {
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

	class Wallboard {
		constructor(wndw) {
			this.timeout = TIMEOUT;
			this.window = wndw;
		}

		show(url) {
			setTimeout(() => this.window.location.assign(url), this.timeout);
		}
	}
})();