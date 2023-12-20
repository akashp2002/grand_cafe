import React from 'react'

function CustomButton({
    backgroundcolor,
    color,
    buttonText

}
) {
  return (
    <div>
          <button
        style={{ backgroundColor: backgroundcolor }}
        className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >{buttonText}</button>
    </div>
  )
}

export default CustomButton