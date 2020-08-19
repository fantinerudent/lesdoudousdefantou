import React from "react"

const Slider = ({ srcImg }) => {
  const indexLoop = () => {
    for (let i = 1; i < srcImg.lenght + 1; i++) {
      return i
    }
  }
  return (
    <>
      <div className="img-products-container">
        {srcImg &&
          srcImg.map((img, i) => {
            return (
              <a href={img} target="_blank">
                <img className="img-slide" src={img} />
              </a>
            )
          })}
      </div>
      <span
        style={{
          alignSelf: "flex-end",
          marginRight: "20px",
          fontStyle: "italic",
        }}
      >
        Cliquez-sur sur l'image pour l'agrandir{" "}
      </span>
    </>
  )
}

export default Slider
