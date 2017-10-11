/**
 * @file entry file
 * @author jady
 */

import App from './App.san';

{{#router}}
import routes from './routes';
import {Router} from 'san-router';
{{/router}}

const app = new App();
{{#router}}
const router = new Router();
{{/router}}

app.attach(document.getElementById('app'));

{{#router}}
routes.forEach(route => router.add(route));
router.start();
{{/router}}

// hmr 更新逻辑
if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.data = {app{{#router}}, router{{/router}}};

    // 接受热更新的依赖数组
    module.hot.accept([{{#router}}'./routes', {{/router}}'./App.san'], () => {

        // 销毁旧的app
        module.hot.data.app.dispose();
        // 停止router并销毁
        module.hot.data.router.stop();
        // 这里要注意，router中存活的组件实例和App是没有父子关系的
        // 所以要手动dispose
        {{#router}}
        module.hot.data.router.routeAlives.forEach(item => {
            item.component.dispose();
        });
        module.hot.data.router = null;
        {{/router}}

        // 创建新的app和router
        const app = new App();
        {{#router}}
        const router = new Router();
        {{/router}}
        app.attach(document.getElementById('app'));
        {{#router}}
        routes.forEach(route => router.add(route));
        router.start();
        {{/router}}

        // app传递给module.hot.data以便下次更新时销毁
        module.hot.data = {app{{#router}}, router{{/router}}};
    });
}
