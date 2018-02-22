import WidgetList from './WidgetList';

const WIDGET_API = process.env.WIDGET_API + '/api/widgets';

export default class WidgetListService {
    getList() {
        return new Promise((resolve, reject) =>
            fetch(WIDGET_API)
                .then(response => response.json())
                .then(response =>
                    resolve(new WidgetList(response.map(el => el.uri))))
                .catch(reason => reject(`Could not fetch widget list: ${reason}`)));
    }
}