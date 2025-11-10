import React from 'react'

function Text({ children }: { children: string }) {
  const message = children.split('\n').map((str, idx, array) => {
    const isLast = idx === array.length - 1

    return (
      <React.Fragment key={idx}>
        {str}
        {!isLast && <br />}
      </React.Fragment>
    )
  })

  return <div>{message}</div>
}

export default Text
