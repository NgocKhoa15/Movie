import React from 'react'
import "./index.scss";

// Nhiệm vụ: Bọc nội dung bên trong
// => padding 2 bên sao cho phù hợp với mọi thiết bị
// 
function Container({children}) {
  return (
    <div className='container'>{children}</div>
  )
}

export default Container