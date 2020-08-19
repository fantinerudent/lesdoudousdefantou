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
    "../../stuffedowl.jpg",
    "../../hippo.jpg",
  ]

  return (
    <>
      <div>
        <h2 className="section-title"> Les petites fabrications </h2>
      </div>
      <div id="products-container">
        <h2> Les masques: </h2>
        <p>
          Parce que c'est la grande préoccupation de l'année. 2020 nous aura
          donné une nouvelle façon d'exprimer notre style et notre personnalité.
          J'ai commencé à coudre des masques en tissus lavable, en suivant les
          normes AFNOR. Des centaines en quelques semaines, j'ai pu mettre à
          profit mes compétences pour aider les personnes qui n'avaient pas
          accès aux masques (pénurie ou manque de moyen financier) en en mettant
          à disposition sur l'appui de fenêtre. Il était crucial pour moi de
          participer à mon échelle, à quelque chose d'utile durant cette période
          singulière.
          <br />
          <br />
          Maintenant c'est avec un grand régal et beaucoup de joie que je vois
          mes petits masques, fait avec Amour, vivre au travers de mes
          amis/collègues/membres de ma famille. Mon souhait était de pimper les
          transports en communs.
        </p>
        <Slider srcImg={arrayOfImgMasks} />
        <h2> Les bavoirs : </h2>
        <p>
          Au final, c'était les "Doudous de Fantou", à cause de ces dits
          Doudous, et puis... Ma marque de fabrique sont devenus les bavoirs.
          Beaucoup plus agréables à réaliser, adaptable, personnalisable à
          l'infini, ils font de bons cadeaux de naissances et sont méga
          résistants. Pour la petite histoire, j'ai du coudre le premier en
          2010, ma belle-soeur qui est assistante-maternelle l'utilise encore et
          le lave hyper souvent.
        </p>
        <Slider srcImg={arrayOfImgBibs} />
        <h2> Les doudous : </h2>
        <p>
          Les doudous sont nés de la naissance de mon neveu Augustin en 2010.
          Tatatine pour la première fois, j'avais envie de matérialiser cette
          joie en quelque chose fait de mes mains. C'est donc en faisant des
          doudous que j'ai fais mes premiers pas en couture. Tous les doudous
          ont vite été adoptés et j'ai vu mes progrès en fonction des commandes
          particulières que je recevais. Le bon vieux temps !
        </p>
        <Slider srcImg={arrayOfImgStuffedAnimals} />
      </div>
    </>
  )
}

export default Products
