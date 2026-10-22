import "./List.css";
import {useState, useMemo} from "react";
import {useSelector} from "react-redux";
import TodoItem from "./TodoItem.jsx";

function List() {
    const [search, setSearch] = useState("");

    const todos = useSelector((state) => state.todo.items);

    const { totalCount, doneCount, notDoneCount } = useMemo(() => {
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return { totalCount, doneCount, notDoneCount };
    }, [todos]);

    const getFilteredData = () => {
        if (search === "") {
            return todos;
        }

        return todos.filter((todo) => {
            return todo.content.toLowerCase().includes(search.toLowerCase());
        });
    };

    const filteredTodos = getFilteredData();

    return (
        <div className="List">
            <h4>Todo List 🌸</h4>

            <div className="todo-stats">
                <div className="stat-item">
                    <span className="stat-label">전체 🎀</span>
                    <b className="stat-count">{totalCount}</b>
                </div>
                <div className="stat-item done">
                    <span className="stat-label">완료 ✨</span>
                    <b className="stat-count">{doneCount}</b>
                </div>
                <div className="stat-item not-done">
                    <span className="stat-label">미완료 🌷</span>
                    <b className="stat-count">{notDoneCount}</b>
                </div>
            </div>

            <input
                placeholder="검색어를 입력해주세요."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="todos_wrapper">
                {filteredTodos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            {...todo}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default List;