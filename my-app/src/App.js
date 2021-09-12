
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
      This is my component: 
      <Helloword mytext="Hola Jona" subtitle="loremp ispum"/>
      <Helloword mytext="Hola word" subtitle="loremp ispum"/>
      <Helloword mytext="Hola Amigos" subtitle="loremp ispum"/>
      <Helloword mytext="Hola mundo" subtitle="loremp ispum"/>
    </div>
  );
}

export default App;
