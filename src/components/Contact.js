import React, { useState } from "react"

function Contact() {
  const [emailValue, setEmailValue] = useState("")

  const handleChangeEmail = event => {
    setEmailValue(event.currentTarget.value)
  }
  const handleSubmit = (event) => {
      event.preventDefault();
      if (emailValue) {
          window.alert(`Je vous recontacte à l'adresse : ${emailValue}`  )
      }
  }

  return (
    <div>
      <h2 className="section-title"> Pour me contacter... </h2>
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

      <form id="form" onSubmit={(event) => handleSubmit(event)}>
        <label for="email">
          Entrez votre email pour que je puisse revenir vers vous !
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="saisissez votre email"
          onChange={event => handleChangeEmail(event)}
        />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Contact
