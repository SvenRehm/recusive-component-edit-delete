import React from "react"
import "./Row.css"

export const Row = ({
   item,
   level,
   children,
   addData,
   handleCollapse,
   deleteData,
}) => {
   const collapse = item.collapsed ? "children collapsed" : "children"
   let paddinIndent = { paddingLeft: `${level * 40}px` }

   let childrenCheck = item.hasChildren ? <h4>yes</h4> : <h4>no</h4>

   return (
      <div key={`section-${item.id}`}>
         <div
            style={paddinIndent}
            className="row"
            onClick={() => handleCollapse(item.id, item.collapsed)}
         >
            <span>{item.text}</span>

            {childrenCheck}
            <button
               style={{
                  marginLeft: "40px",
                  zIndex: "500",
                  padding: "1em",
               }}
               onClick={() => {
                  addData(item.id, false)
                  handleCollapse(item.id)
               }}
            >
               add
            </button>

            <button
               style={{
                  marginLeft: "40px",
                  zIndex: "500",
                  padding: "1em",
               }}
               onClick={() => {
                  deleteData(item.id)
               }}
            >
               delete
            </button>
         </div>
         <div className={collapse}>{children}</div>
      </div>
   )
}
