import { types, flow } from 'mobx-state-tree';
import axios from 'axios';

const Todo = types.model({
    id: types.identifierNumber,
    title: types.string,
    completed: types.boolean,
});

const TodoStore = types
    .model({
        todos: types.array(Todo),
        status: types.optional(types.enumeration(['idle', 'pending', 'success', 'error']), 'idle'),
    })
    .actions((self) => ({
        fetchTodos: flow(function* () {
            self.status = 'pending';
            try {
                const response = yield axios.get('https://jsonplaceholder.typicode.com/todos');
                self.todos = response.data;
                self.status = 'success';
            } catch (error) {
                console.error('Error fetching todos:', error);
                self.status = 'error';
            }
        }),

        addTodo: flow(function* (title: string) {
            const newTodo = {
                id: self.todos.length + 1,
                title,
                completed: false,
            };
            self.todos.push(newTodo);
            self.status = 'success';
        }),

    }));

export default TodoStore.create({
    todos: [],
});