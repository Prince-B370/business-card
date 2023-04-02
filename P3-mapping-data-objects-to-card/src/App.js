import Card from './Card'
import data from './data'
function App() {
  const dataElements = data.map((item)=>{
    return <Card
            img = {item.img}
            name = { item.name}
            work = {item.work}
            address = { item.address}
            about={item.about}
            interests={item.interests}
            />
  })
  return (
    <div className = 'userInterface'>
      {dataElements}
    </div>
  );
}

export default App;
