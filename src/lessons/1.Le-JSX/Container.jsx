function Container() {
  const test = "Test";
  function handleClick(e, id) {
    console.log("Click 2", e, id);
  }

  return (
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <ul>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </ul>
      <button>Valider</button>
      <p>{10 + 10}</p>
      <p>{"ab" + "c"}</p>
      <p>{"Le chat saute !".toUpperCase()}</p>
      <p>{test}</p>
      {/* Retourne tous les Eléments d'un Tableau (sauf les Objets) */}
      <p>{[1, 2, 3, "k"]}</p>
      <p>{[<span>Hello World !</span>]}</p>
      <input type="text" />
      <hr />
      <img src="" alt="" />
      <p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <label htmlFor=""></label>
      <button aria-label="toggle button"></button>
      <button onClick={() => console.log("Click")}>Click</button>
      <br />
      <button onClick={handleClick}>Click</button>
      <br />
      <button onClick={e => handleClick(e, 585)}>Click</button>
    </div>
  )
}

export default Container
