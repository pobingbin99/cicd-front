import './App.css';
import {Provider} from 'react-redux';
import  store from './redux/store';

import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Header/>
                <Editor/>
                <List/>
            </div>
        </Provider>
    );
}

export default App;
