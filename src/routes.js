/**
 * @file route config
 * @author jady
 */

import Moon from './components/Moon.san';
import Sun from './components/Sun.san';
import san from 'san';

export default [
    {
        rule: '/',
        Component: san.defineComponent({
            template: '<p>欢迎</p>'
        }),
        target: '#content'
    },
    {
        rule: '/moon',
        Component: Moon,
        target: '#content'
    },
    {
        rule: '/sun',
        Component: Sun,
        target: '#content'
    }
];
