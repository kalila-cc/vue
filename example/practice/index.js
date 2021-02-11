var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello, Vue!',
    },
});
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '这是一个标题',
    },
});
var app3 = new Vue({
    el: '#app-3',
    data: {
        char: 'C',
        loginType: 'username',
        newLoginType: 'username',
        newNewLoginType: 'username',
    },
    methods: {
        changeLoginType: function () {
            if (this.loginType === 'username')
                this.loginType = 'email';
            else
                this.loginType = 'username';
        },
        changeNewLoginType: function () {
            if (this.newLoginType === 'username')
                this.newLoginType = 'email';
            else
                this.newLoginType = 'username';
        },
        changeNewNewLoginType: function () {
            if (this.newNewLoginType === 'username')
                this.newNewLoginType = 'email';
            else
                this.newNewLoginType = 'username';
        },
    },
});
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {
                id: 1,
                text: '2021-01-12 脑与认知科学'
            },
            {
                id: 2,
                text: '2021-01-15 计算机系统（3）',
            },
            {
                id: 3,
                text: '2021-01-18 最优化方法',
            },
        ],
    },
});
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'dDdD',
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        },
    },
    created: function () {
        console.log('#app-5 has been created');
    },
    mounted: function () {
        console.log('#app-5 has been mounted');
    },
    updated: function () {
        console.log('#app-5 has been updated');
    },
});
app5.$watch('message', function (newVal, oldVal) {
    console.log(`${oldVal} -> ${newVal}`);
});
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: '这是一条信息',
    },
});
Vue.component('todo-item', {
    props: ['todo'],
    /*
        可以是以下格式
        type 可以自定义，也可以是下列原生构造函数中的一个：
            String
            Number
            Boolean
            Array
            Object
            Date
            Function
            Symbol
        props: {
            propA: Number,
            propB: [Number, String],
            propC: {
                type: String,
                required: true,
            },
            propD: {
                type: Number,
                default: 100,
            },
            propE: {
                type: Object,
                default: function () {
                    return { message: 'hello' };
                },
            },
            propF: {
                validator: function (value) {
                    return ['success', 'warning', 'danger'].indexOf(value) !== -1;
                },
            },
        }
        prop 会在一个组件实例创建之前进行验证
        所以实例的 property (如 data、computed 等) 在 default 或 validator 函数中是不可用的
    */
    template: `
        <li>
            {{ todo.text }}
        </li>
    `,
});
Vue.component('blog-post', {
    /*
        可以自定义 v-model
        model: {
            prop: 'prop-name',
            event: 'event-name',
        },
    */
    props: ['post'],
    template: `
        <div class="blog-post">
            <h3> {{ post.title }} </h3>
            <button @click="$emit('enlarge-text-1')">
                Enlarge text 1
            </button>
            <button @click="$emit('enlarge-text-2', 2)">
                Enlarge text 2
            </button>
            <button @click="$emit('enlarge-text-3', 3)">
                Enlarge text 3
            </button>
            <div v-html="post.content"></div>
        </div>
    `,
});
Vue.component('custom-input', {
    props: ['value'],
    template: `
        <input
            :value="value"
            @input="$emit('input', $event.target.value)"
        >
    `
});
Vue.component('custom-article', {
    props: ['article'],
    template: `
        <div>
            <slot name="title">
                <p> {{ article.title }} </p>
            </slot>
            <slot name="default">
                <p> {{ article.content }} </p>
            </slot>
            <slot name="note">
                <p> {{ article.note }} </p>
            </slot>
        </div>
    `,
})
var app7 = new Vue({
    el: '#app-7',
    data: {
        postFontSize: 20,
        groceryList: [
            { id: 0, text: '数学' },
            { id: 1, text: '编程' },
            { id: 2, text: '音乐' }
        ],
        posts: [
            {
                id: 1,
                content: `<div> text <div>`,
            }
        ],
        searchText: 'enter something',
        article: {
            title: 'TITLE',
            content: 'CONTENT',
            note: 'NOTE',
        },
    },
    methods: {
        onEnlargeText: function (enlargeAmount) {
            this.postFontSize += enlargeAmount;
        },
    },
});
var app8 = new Vue({
    el: '#app-8',
    data: {
        message: '这是一条再也不会更新的信息',
    },
});
var app9 = new Vue({
    el: '#app-9',
    data: {
        rawHTML: '<text style="color: red"> 这里有一些红色的字 </text>',
    },
});
var app10 = new Vue({
    el: '#app-10',
    data: {
        isButtonDisabled: false,
    },
});
var app11 = new Vue({
    el: '#app-11',
    data: {
        numbers: [1, 2, 3],
    },
});
var app12 = new Vue({
    el: '#app-12',
    data: {
        url: 'https://cn.vuejs.org/v2/guide/syntax.html',
    },
});
var app13 = new Vue({
    el: '#app-13',
    data: {
        eventname: 'click',
        attrname: 'href',
        url: app12.$data.url,
    },
    methods: {
        doSomeThing: function (event) {
            console.log(event);
        },
    },
});
var app14 = new Vue({
    el: '#app-14',
    data: {
        message: 'One Message',
    },
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('');
        },
    },
});
var app15 = new Vue({
    el: '#app-15',
    data: {
        firstName: 'kalila',
        lastName: 'cc',
    },
    computed: {
        fullName: {
            get: function () {
                return this.firstName + ' ' + this.lastName;
            },
            set: function (val) {
                [this.firstName, this.lastName] = val.split(' ');
            },
        },
    },
    watch: {
        fullName: function (newVal, oldVal) {
            console.log(`${oldVal} -> ${newVal}`);
        },
    },
});
var app16 = new Vue({
    el: '#app-16',
    data: {
        hasXAttr: true,
        doNotHasXAttr: false,
        classObject: {
            hasYAttr: true,
            doNotHasYAttr: false,
        },
        classA: 'A',
        classB: 'B',
        classC: true,
        classD: 'D',
    },
    computed: {
        computedClassObject: function () {
            return {
                hasZAttr: this.hasXAttr && this.classObject.hasYAttr,
                doNotHasZAttr: this.doNotHasXAttr || this.classObject.doNotHasYAttr,
            };
        },
    }
});
Vue.component('template-1', {
    props: ['template-index'],
    template: '<div class="original-class"> template-index: {{ templateIndex }} </div>',
});
var app17 = new Vue({
    el: '#app-17',
    data: {
        templateIndex: 1,
    },
});
var app18 = new Vue({
    el: '#app-18',
    data: {
        styleA: {
            'color': 'red',
        },
        styleB: {
            'color': 'blue',
        },
        styleC: {
            'font-size': '30px',
        },
    },
});
var app19 = new Vue({
    el: '#app-19',
    data: {
        counter: 0,
    },
    methods: {
        addSelf: function () {
            this.counter += this.counter;
        },
        say: function (msg) {
            alert(msg);
        },
        warn: function (msg, event) {
            console.warn(event);
            alert(msg);
        },
        doSomeThing: function (msg) {
            console.log(msg);
        },
        keyCode: function (event) {
            console.log('press enter');
            console.log(event);
        },
    },
});
var app20 = new Vue({
    el: '#app-20',
    data: {
        massageInput: 'This is a massage for input',
        massageTextarea: 'This is a massage for textarea',
        massageInputNumber: 0,
        app20checked: false,
        checkedNames: [],
        picked: 'None',
        selected: 'None',
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' },
        ],
        multipleSelected: [],
        selectedObject: {},
    },
});
var app21 = new Vue({
    el: '#app-21',
    data: {
        show1: true,
        msg1: '淡入淡出',
        show2: true,
        msg2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.',
        isOn1: true,
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        rowList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        nextItem: 11,
        matrix: Array(100).fill(0).map((item, index) => index + 1),
    },
    methods: {
        isPrimary: function (number) {
            if (number === 2)
                return true;
            if (number < 2 || (number & 1) === 0)
                return false;
            let limit = Math.round(Math.sqrt(number));
            let mark = Array(number + 1).fill(true);
            for (let i = 3; i <= limit; i += 2) {
                if (mark[i]) {
                    for (let j = i << 1; j <= number; j += i) {
                        mark[j] = false;
                    };
                };
            };
            return mark[number];
        },
        randomIndex() {
            return Math.floor(Math.random() * (this.rowList.length));
        },
        onShuffleList: function () {
            this.list = this.list.$shuffled();
        },
        onShuffleRowList: function () {
            this.rowList = this.rowList.$shuffled();
        },
        onShuffleMatrix: function () {
            this.matrix = this.matrix.$shuffled();
        },
        onAddItem: function () {
            this.rowList.splice(this.randomIndex(), 0, this.nextItem++);
        },
        onRemoveItem: function () {
            this.rowList.splice(this.randomIndex(), 1);
        },
    },
});
/*
    注册一个全局自定义指令 `v-focus`
    bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
    inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
    update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
    componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用
    unbind：只调用一次，指令与元素解绑时调用
*/
Vue.directive('focus', {

    inserted: function (el) {
        el.focus();
    },
});
Vue.directive('demo', {
    bind: function (el, binding, vnode) {
      var s = JSON.stringify
      el.innerHTML =
        'name: '       + s(binding.name) + '<br>' +
        'value: '      + s(binding.value) + '<br>' +
        'expression: ' + s(binding.expression) + '<br>' +
        'argument: '   + s(binding.arg) + '<br>' +
        'modifiers: '  + s(binding.modifiers) + '<br>' +
        'vnode keys: ' + Object.keys(vnode).join(', ')
    }
});
var app22 = new Vue({
    el: '#app-22',
    data: {
        message: 'Hello!',
    },
    /*
        指令钩子函数会被传入以下参数：
            el：指令所绑定的元素，可以用来直接操作 DOM。
            binding：一个对象，包含以下 property：
                name：指令名，不包括 v- 前缀。
                value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
                oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
                expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
                arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
                modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
            vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
            oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
        除了 el 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 dataset 来进行
        在很多时候，你可能想在 bind 和 update 时触发相同行为，而不关心其它的钩子。比如这样写：
            Vue.directive('name', function (el, binding) {...})
    */
});
setTimeout(() => { window.scrollTo(0, document.documentElement.scrollHeight); }, 200);