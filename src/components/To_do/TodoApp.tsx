import * as React from 'react';
import { useStore } from './store';
import { Provider } from './store';//'react-redux';//
import TodoList from './TodoList';

const Counter = React.createContext(null);

const App: React.FC = () => (
    <Provider >
        <TodoList />
    </Provider>
);

export default App;