import React from "react"

const Biography = () => {
  return (
    <div id="container-bio">
      <h2 className='section-title'> Qui suis-je ? </h2>
      <p>
        Ut ut tempor reprehenderit ut dolor exercitation et exercitation
        adipisicing occaecat sunt aliqua. Quis dolor consequat pariatur velit
        nisi. Consequat dolor non nostrud incididunt pariatur eu. Esse consequat
        enim nulla qui elit quis. Elit dolor ad amet est quis sint cillum
        incididunt quis. Officia proident minim occaecat et in ut et cupidatat.
        Sit aliquip anim sit exercitation. Esse nostrud id enim laborum
        consequat quis dolore velit ipsum pariatur quis eiusmod duis. Quis
        consectetur officia minim esse enim aliqua ullamco sit deserunt elit
        tempor irure. Cupidatat labore pariatur ipsum officia proident excepteur
        eu in ut adipisicing irure eu. Duis laborum et Lorem exercitation minim
        cillum exercitation in fugiat. Quis magna tempor esse commodo non culpa
        qui occaecat id aliqua nulla. Non et proident consequat laborum nisi eu
        ipsum mollit laborum pariatur non est incididunt. Ad aliquip cupidatat
        dolor ad duis eu enim occaecat incididunt labore minim veniam. Cillum
        laboris veniam Lorem eiusmod nisi aliquip ex id pariatur eu dolor do
        nostrud culpa.
      </p>
      <div id="container-img-bio">
        <img className="img-bio" src="../../mask-peacock.jpg" />
        <img className="img-bio" src="../../sewing-time.jpg" />
      </div>
      <div id='label-video' >
        <p> CLA VIDEO : </p> 
        <iframe
          id="video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HIdVzZiy39c"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  )
}

export default Biography
