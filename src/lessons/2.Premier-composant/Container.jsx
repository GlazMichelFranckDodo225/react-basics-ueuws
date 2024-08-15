import ListItem from "./ListItem";

export default function Container() {
  return (
    <div>
      <h1>Premier Composant</h1>
      <ul>
        <li>item</li>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    </div>
  )
}