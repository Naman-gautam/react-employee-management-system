import React from 'react'

const Taskcontext = (props) => {
  console.log("this is ")
  console.log(props)
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Taskcontext
