import React from "react"

const Biography = () => {
  return (
    <div id="container-bio">
      <h2 className="section-title"> Qui suis-je ? </h2>
      <p>
        Baptisée Fantine, cette jeune femme d'origine Chti, a beaucoup
        bourlingué le monde dans le but de répandre la paix autour d'elle. Nord,
        Etats-Unis, Europe, région PACA, jusqu'à l'Ile-de-France, elle est un
        peu d'ici et beaucoup d'ailleurs. Très créative, elle aime fabriquer,
        coder, dessiner, écrire ... et tout ce qui nécessite l'utilisation de ce
        sens si subjectif (elle vous dira elle même qu'elle n'a aucun talent.).
        Ce qu'elle aime à part cela, c'est passer du temps de qualité avec des
        gens intéressants, du genre, ceux qui ont le coeur sur la main, des
        débats animés et des argumentaires solides, il n'y a que très peu de
        sujets qui n'aiguisent pas son intérêt.
      </p>
      <div id="container-img-bio">
        <img className="img-bio" src="../../mask-peacock.jpg" />
        <img className="img-bio" src="../../sewing-time.jpg" />
      </div>
      <div id="label-video">
        <p style={{ fontStyle: "italic", width: "50%" }}>
          {" "}
          Bénévole depuis 2015 dans cette sublime association appelée 'Comme les
          autres', elle a partagé des moments d'exceptions avec des personnes
          exceptionnelles, qui ont pour certains ce petit plus. Voici un petit
          extrait du premier séjour d'une longue série.
        </p>
        <span id="title-video"> 👩‍🦽Comme les autres 👨‍🦽 </span>
        <iframe
          id="video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HIdVzZiy39c"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default Biography
