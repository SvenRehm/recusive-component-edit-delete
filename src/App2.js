import React, { useState, useEffect } from "react"
import { Row } from "./Row"

const initialState = [
   { id: 1, text: "Fruits", parentId: 0, collapsed: false },
   { id: 2, text: "Colors", parentId: 0, collapsed: false },
   { id: 3, text: "Cities", parentId: 0, collapsed: false },
   { id: 4, text: "Citrus", parentId: 1, collapsed: false },
   { id: 5, text: "Stone fruits", parentId: 1, collapsed: false },
   { id: 6, text: "Berries", parentId: 1, collapsed: false },
   { id: 7, text: "Orange", parentId: 4, collapsed: false },
   { id: 8, text: "Grapefruit", parentId: 4, collapsed: false },
   { id: 9, text: "Lime", parentId: 4, collapsed: false },
]

const App = () => {
   const [data, setData] = useState(initialState)
   const [currId, setCurrId] = useState(10)
   useEffect(() => {
      setData((prev) =>
         prev.map((item) => ({
            ...item,
            hasChildren: prev.filter((i) => i.parentId === item.id).length > 0,
         }))
      )
   }, [currId])

   const addData = (id, collapse) => {
      const newData = {
         id: currId + 2,
         text: "title",
         parentId: id,
         collapsed: collapse,
      }

      setData([...data, newData])
      setData((prevState) => {
         const newState = prevState.map((obj) => {
            if (obj.id === id) {
               return { ...obj, collapsed: false }
            }
            return obj
         })

         return newState
      })
      setCurrId((prev) => {
         return prev + 1
      })
   }

   const deleteData = (id) => {
      const newList = data.filter((item) => item.id !== id)
      setData(newList)
      setData((prev) =>
         prev.map((item) => ({
            ...item,
            hasChildren: prev.filter((i) => i.parentId === item.id).length > 0,
         }))
      )
   }

   const handleCollapse = (itemid) => {
      setData((prevState) => {
         const newState = prevState.map((obj) => {
            if (obj.id === itemid) {
               return { ...obj, collapsed: !obj.collapsed }
            }
            return obj
         })

         return newState
      })
   }

   const Tree = ({ data, parentId = 0, level = 0 }) => {
      const items = data
         .filter((item) => item.parentId === parentId)
         .sort((a, b) => (a.text > b.text ? 1 : -1))

      if (!items.length) return null

      return (
         <>
            {items.map((item) => (
               <Row
                  key={item.id}
                  item={item}
                  level={level}
                  addData={addData}
                  handleCollapse={handleCollapse}
                  deleteData={deleteData}
               >
                  <Tree data={data} parentId={item.id} level={level + 1} />
               </Row>
            ))}
         </>
      )
   }

   return (
      <>
         <div className="app">
            <Tree data={data} />
         </div>
      </>
   )
}

export default App
