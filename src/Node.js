import React from "react"

const Node = ({
   item,
   hasChildren,
   level,
   onToggle,
   handleClick,
   handleClickChild,
}) => {
   return (
      <div style={{ paddingLeft: `${level * 20}px` }}>
         {item.label} {item.id}
         {level === 0 ? (
            <button onClick={() => handleClick(item.id)}>addParent</button>
         ) : (
            <button onClick={() => handleClickChild(level)}>addchild</button>
         )}
         {hasChildren && (
            <>
               <button onClick={onToggle}>toggle</button>
            </>
         )}
      </div>
   )
}

export default Node
