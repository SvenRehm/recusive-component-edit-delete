import "./App.css"
import { useState } from "react"
import Tree from "./Tree"

const App = () => {
   const initialState = [
      {
         id: 1,
         title: "title",
         indentLevel: 0,
         children: [{ id: 1, title: "title" }],
      },
   ]

   const [count, setCount] = useState(1)
   const [data, setData] = useState(initialState)

   const handleClick = (id) => {
      const newData = { id: id, title: "title" }
      const updateData = [...data, newData]
      setData(updateData)
      setCount(id + 1)
   }

   const handleDelete = (id) => {
      console.log(id)
      const removeItem = data.filter((data) => {
         return data.id !== id
      })

      setData(removeItem)
   }

   const Item = ({ index, item, indentLevel }) => {
      return (
         <div>
            <li key={index} style={{ paddingLeft: `${indentLevel * 10}px` }}>
               <div>
                  {item.title} {item.id}
               </div>

               <button onClick={() => handleDelete(item.id)}>delete</button>
               <button onClick={() => handleClick(count + 1)}>add</button>
            </li>
         </div>
      )
   }
   const allListItems = data.map((item, index) => (
      <Item item={item} index={index} />
   ))

   return (
      <>
         <div className="app">
            {/* <Tree />  */}
            <ul>{allListItems}</ul>
         </div>
      </>
   )
}

export default App
