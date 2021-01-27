import { useState } from 'react'
const initList = [
  { label: 'text1', id: 111, done: false },
  { label: 'text2', id: 222, done: true },
  { label: 'text3', id: 333, done: false },
]
function App() {
  const [list, setList] = useState(initList)
  const [color, setColor] = useState(false)
  const [elemToEdit, setElemToEdit] = useState(null)
  const [newValue, setnewValue] = useState('')
  const style = {
    backgroundColor: color ? 'blue' : 'yellow'
  }
  const editHanler = (id) => {
    console.log(' PARAM=>', id);
    setElemToEdit(id)
    setnewValue(list.find(item => item.id === id).label)
  }
  const changeHandler = ({ target }) => {
    console.log('===>', target.value);
    setnewValue(target.value)
  }
  const addHandler = () => {
    console.log('  newValue -->>', newValue);
    setList(pre => pre.map(item => item.id === elemToEdit ? { ...item, label: newValue } : item))
    setnewValue('')
    setElemToEdit(null)
  }
  return (
    <div className="App" style={style} >
      <h1>elemToEdit : {elemToEdit}</h1>
      <h1>newValue : {newValue}</h1>
      <ul>
        {list.map(({ label, id, done }) => <li
          className={done ? "done" : null}
          key={id}>
          {id === elemToEdit ? <>
            <input onChange={changeHandler} value={newValue} />
            <button onClick={addHandler}>ADD</button>
          </> : <span>
              {label}
            </span>}
          <button onClick={() => editHanler(id)}>EDIT</button>
        </li>)}
      </ul>
    </div>
  );
}
export default App;
