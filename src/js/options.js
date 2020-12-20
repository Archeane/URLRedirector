/*import React from 'react';
import ReactDOM from 'react-dom';

import NewUrl from "./components/NewUrl";

const App = () => {

}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app')
)
*/

window.onload = () => {
    new Vue({
    el: "#app",
    data: {
        groups: [{
            name: "work",
            children: [{
                name: "pr",
                abbv: "p",
                shortcuts: [1, 2, 3]
            }, {
                name: "rfc",
                abbv: "r",
                shortcuts: ["design", "adwords", "marketo"]
            }],
            keywordChildren: [],
            isDefault: false,
            abbv: "w"
        }, {
            name: "todo - today",
            keywordChildren: [1, 2, 3],
            children: [],
            isDefault: true,
            abbv: "tt"
        }, {
            name: "today - week",
            keywordChildren: [1, 2, 3, 4],
            children: [],
            isDefault:false,
            abbv:"tw"
        }],
        shortcuts: [],
        selectedGroup: null,
        selectedSubgroups: []
    },
    created() {
        console.log(this.groups);

        // $('.ui.dropdown').dropdown();
        // chrome.storage.sync.get(["shortcuts", "groups"], result => {
        //     this.shortcuts = result.shortcuts || [];
        //     this.groups = result.groups || [];
        //     console.log(this.shortcuts);
        //     console.log(this.groups);
        // })
    },
    methods: {
        onGroupChange(event){
            console.log(event.target.value)
            console.log(this.selectedGroup);
        }
    }
})
}
