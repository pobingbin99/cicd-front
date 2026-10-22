import {memo} from 'react';
import "./TodoItem.css";
import {useDispatch} from 'react-redux';
import {updateTodo, deleteTodo} from '../redux/store';

const TodoItem = ({id, isDone, content, date}) => {
    const dispatch = useDispatch();

    console.log("TodoItem call...");

    const onChangeCheckbox = () => {
        dispatch(updateTodo(id));
    };

    return (
        <div className="TodoItem">
            <input
                type="checkbox"
                checked={isDone}
                onChange={onChangeCheckbox}
            />

            <div className="content">{content}</div>

            <div className="date">
                {new Date(date).toLocaleString()}
            </div>

            <button onClick={() => dispatch(deleteTodo(id))}>
                삭제 🗑️
            </button>
        </div>
    );
};

export default memo(TodoItem);