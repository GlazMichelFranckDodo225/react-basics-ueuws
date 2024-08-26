export default function Container() {
  function handleClick(e) {
    console.log("Click");
  }

  function handleClickWithId(id) {
    console.log(id);
  }

  function handleClickWithIdAndEventObject(id, e) {
    console.log(id, e);
  }

  return (
    <div>
      <h1>Utiliser des évènements</h1>
      {/* On peut ajouter un évènement directement dans le JSX avec une fonction anonyme, mais ce n'est pas pratique s'il y a beaucoup de code */}
      <button onClick={() => console.log("Click")}>Click</button>

      {/* Mauvaise pratique, peu maintenable */}
      <button onClick={() => {
        console.log("Click");
        console.log("Click");
        console.log("Click");
        console.log("Click");
        console.log("Click");
        console.log("Click");
        console.log("Click");
        console.log("Click");
      }}>Click</button>


      {/* On lui préfère en général ceci : référence à une Fonction*/}
      <button onClick={handleClick}>Click</button>

      {/* Attention, si on veut passer un argument, il faut obligatoirement utiliser une fonction anonyme */}
      <button onClick={() => handleClickWithId(12569)}>Click</button>

      {/* Si on veut l'objet d'évènement ET passer un ou des arguments, on code ceci */}
      <button onClick={e => handleClickWithIdAndEventObject(12569, e)}>Click</button>

    </div>
  )
}
