import {createContext, useContext, usseContext} from "react"


export const TOdoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id)=> {},
    toggleTComplete: (id) => {}
})



export const useTodo = () => {
    return useContext(TOdoContext)
}


export const TodoProider = TOdoContext.Provider