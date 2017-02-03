"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TODOS = [
    { id: 1, task: 'Walk dog', status: false },
    { id: 2, task: 'Finish website', status: true },
    { id: 3, task: 'Learn Angular 2', status: false }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'My Todo List';
        this.todos = TODOS;
    }
    AppComponent.prototype.delete = function (clickedTodo) {
        if (!clickedTodo) {
            return;
        }
        for (var i = 0; i < this.todos.length; i++) {
            console.log(this.todos[i]);
            if (this.todos[i].task == clickedTodo.task) {
                this.todos.splice(i, 1);
            }
        }
    };
    AppComponent.prototype.add = function (task) {
        task = task.trim();
        if (!task) {
            return;
        }
        var lastIndex = (this.todos.length);
        console.log(lastIndex);
        this.todos.push({ id: lastIndex + 1, task: task, status: false });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'todo-lists',
        templateUrl: './templates/todoLists.html',
        styleUrls: ['./styles/todoLists.css', '../node_modules/ng2-dnd/style.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map