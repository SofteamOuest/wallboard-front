import WidgetList from './WidgetList';

const WIDGET_API = 'http://localhost:5000/api/widgets';

export default class WidgetListService {
    getList() {
        return new Promise((resolve, reject) =>
            fetch(WIDGET_API)
                .then(response => response.json())
                .then(response =>
                    resolve(new WidgetList(response.map(el => el.uri))))
                .catch(reason => reject(reason)));
    }
}