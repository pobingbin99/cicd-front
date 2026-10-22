import {useEffect, useState, useRef} from 'react';
import "./Editor.css";
import {useDispatch} from 'react-redux';
import {addTodo} from '../redux/store';

const Editor = () => {
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const dispatch = useDispatch();

    useEffect(() => {
        contentRef.current.focus();
    }, []);

    const onSubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return;
        }

        dispatch(addTodo(content));

        setContent("");
        contentRef.current.focus();
    };

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            onSubmit();
        }
    };

    return (
        <div className="Editor">
            <input
                type="text"
                placeholder="오늘 할 일을 적어주세요 🌸"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                ref={contentRef}
                onKeyDown={onKeyDown}
            />
            <button onClick={onSubmit}>추가 ♡</button>
        </div>
    );
};

export default Editor;