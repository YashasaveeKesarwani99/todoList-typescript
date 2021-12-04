import React,{ useRef } from 'react'
import './Styles.css'

type props = {
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleChange : (e: React.FormEvent)=> void;
}

const InputField = ({todo,setTodo,handleChange}:props)=>{

    const inputRef = useRef<HTMLInputElement>(null)

    return(
        <form
      className="input"
      onSubmit={(e)=>{
          handleChange(e)
          inputRef.current?.blur()
        }}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a Todo"
        className="input__box"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
    )
}

export default InputField;