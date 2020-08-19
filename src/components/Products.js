import React from "react"
import Slider from "./Slider"

function Products() {

  const arrayOfImgMasks = [
    "../../other-masks.jpg",
    "../../lot-of-masks.jpg",
    "../../masks.jpg",
  ]
  const arrayOfImgBibs = [
    "../../bear.jpg",
    "../../umbrella.jpg",
    "../../grafic.jpg",
  ]
  const arrayOfImgStuffedAnimals = [
    "../../tiger.jpg",
    "../../sheep.jpg",
    "../../stuffedowl.jpg",
    "../../hippo.jpg",
  ]


  return (
    <>
      <div>
        <h2 className="section-title"> Les petites fabrications </h2>
        <p>
          PRODUCTS Ut ut tempor reprehenderit ut dolor exercitation et
          exercitation adipisicing occaecat sunt aliqua. Quis dolor consequat
          pariatur velit nisi. Consequat dolor non nostrud incididunt pariatur
          eu. Esse consequat enim nulla qui elit quis. Elit dolor ad amet est
          quis sint cillum incididunt quis. Officia proident minim occaecat et
          in ut et cupidatat. Sit aliquip anim sit exercitation. Esse nostrud id
          enim laborum consequat quis dolore velit ipsum pariatur quis eiusmod
          duis. Quis consectetur officia minim esse enim aliqua ullamco sit
          deserunt elit tempor irure. Cupidatat labore pariatur ipsum officia
          proident excepteur eu in ut adipisicing irure eu. Duis laborum et
          Lorem exercitation minim cillum exercitation in fugiat. Quis magna
          tempor esse commodo non culpa qui occaecat id aliqua nulla. Non et
          proident consequat laborum nisi eu ipsum mollit laborum pariatur non
          est incididunt. Ad aliquip cupidatat dolor ad duis eu enim occaecat
          incididunt labore minim veniam. Cillum laboris veniam Lorem eiusmod
          nisi aliquip ex id pariatur eu dolor do nostrud culpa.
        </p>
        <p>
          Ut ut tempor reprehenderit ut dolor exercitation et exercitation
          adipisicing occaecat sunt aliqua. Quis dolor consequat pariatur velit
          nisi. Consequat dolor non nostrud incididunt pariatur eu. Esse
          consequat enim nulla qui elit quis. Elit dolor ad amet est quis sint
          cillum incididunt quis. Officia proident minim occaecat et in ut et
          cupidatat. Sit aliquip anim sit exercitation. Esse nostrud id enim
          laborum consequat quis dolore velit ipsum pariatur quis eiusmod duis.
          Quis consectetur officia minim esse enim aliqua ullamco sit deserunt
          elit tempor irure. Cupidatat labore pariatur ipsum officia proident
          excepteur eu in ut adipisicing irure eu. Duis laborum et Lorem
          exercitation minim cillum exercitation in fugiat. Quis magna tempor
          esse commodo non culpa qui occaecat id aliqua nulla. Non et proident
          consequat laborum nisi eu ipsum mollit laborum pariatur non est
          incididunt. Ad aliquip cupidatat dolor ad duis eu enim occaecat
          incididunt labore minim veniam. Cillum laboris veniam Lorem eiusmod
          nisi aliquip ex id pariatur eu dolor do nostrud culpa.
        </p>
      </div>
      <div id="products-container">
      <h2> Les masques: </h2>
      <Slider srcImg={arrayOfImgMasks} />
      <h2> Les bavoirs : </h2>
      <Slider srcImg={arrayOfImgBibs} />
      <h2> Les doudous : </h2>
      <Slider srcImg={arrayOfImgStuffedAnimals} />
      </div>
    </>
  )
}

export default Products
