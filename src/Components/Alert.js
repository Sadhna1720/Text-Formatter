import React from 'react'

function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} Style='text-align:center; height:40px;' role="alert">
      <strong > {props.alert.type} : {props.alert.msg}</strong>
    </div>
  )
}

export default Alert