import React, { Children, useState } from "react"

import Branch from "./Branch"

const Tree = () => {
   const initialState = [
      {
         id: 1,
         label: "parent",
         children: [
            {
               id: 5,
               label: "child",
            },
         ],
      },
   ]

   const [data, setData] = useState(initialState)
   const [count, setCount] = useState(2)

   const handleClick = (id) => {
      //add parent
      setCount(count + 1)
      const newData = { id: count, label: "parent" }
      const updateData = [...data, newData]
      setData(updateData)
   }

   const handleClickChild = (level) => {
      const newData = {
         id: count,
         label: "mememem",
         children: [{ id: count, label: "mememem" }],
      }

      //   setData((current) => [...current, newData])
      console.log(level)
      let temp_state = [...data]

      // 2. Make a shallow copy of the element you want to mutate
      let temp_element = [...temp_state[0].children]

      // 3. Update the property you're interested in
      temp_element.push(newData)
      // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
      temp_state[0].children = temp_element

      // 5. Set the state to our new copy
      setData(temp_state)
   }

   return (
      <>
         {data.map((item) => (
            <Branch
               key={item.id}
               item={item}
               level={0}
               handleClick={handleClick}
               handleClickChild={handleClickChild}
            />
         ))}
      </>
   )
}

export default Tree
