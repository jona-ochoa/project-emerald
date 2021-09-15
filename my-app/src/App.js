
import './App.css';
function Helloword(props){
  return(
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
      </div>
  )
}



function App() {
  return (
    <div> 
      <h1 id="uno">Mi primera App con React</h1> 
      <Helloword mytext="Hola Jona" subtitle="Loremp ispum"/>
      <Helloword mytext="Hola Tobias" subtitle="Loremp ispum"/>
      <Helloword mytext="Hola Franco" subtitle="Loremp ispum"/>
      <Helloword mytext="Hola Marcelo" subtitle="Loremp ispum"/>
      <Helloword mytext="Hola Tata" subtitle="oremp ispum"/>
    </div>
  );
}

export default App;
