import { useState } from 'react';
import { atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import Button from './Button';
import ToDoItem from './ToDoItem';

function ToDoList() {

    const fontSizeState = atom({
        key: 'fontSizeState',
        default: 20,
    });

    const fontSizeLabelState = selector({
        key: 'fontSizeLabelState',
        get: ({ get }) => {
            const fontSize = get(fontSizeState)
            const unit = 'px'

            return `${fontSize}${unit}`
        }
    });

    const toDoListState = atom({
        key: 'toDoListState',
        default: []
    });

    const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    const fontSizeLabel = useRecoilValue(fontSizeLabelState);

    const toDoList = useRecoilState(toDoListState);
    const [inputValue, setInputValue] = useState('jason');
    const setToDoList = useSetRecoilState(toDoListState);

    const addItem = () => {
        console.log('saving!')
        // setToDoList((oldToDoList) => [
        //     ...oldToDoList,
        //     {
        //         id: getId(),
        //         text: inputValue,
        //         isComplete: false,
        //     },
        // ]);
        // setInputValue('');
    };

    const handleOnChange = (e) => {
        console.log(e.target.value);
        // setInputValue(value);
    };

    return (
        <div>
            <h1 style={{ fontSize }}>To Do List component</h1>
            <p>Current font size is {fontSizeLabel}</p>

            <Button setFontSize={setFontSize} fontSize={fontSize} /><br /><br />

            <input type="text" value={inputValue} onChange={handleOnChange} />
            <button onClick={addItem}>Save</button>

            {toDoList.map((toDoItem) => (
                <ToDoItem key={toDoItem.id} item={toDoItem} />
            ))}
        </div>
    );
}

let id = 0;
function getId() {
    return id++;
}

export default ToDoList;