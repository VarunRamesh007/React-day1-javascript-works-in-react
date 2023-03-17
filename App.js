console.log("message to developer")
function Alertmessage(){
      const Hi=()=>{alert("Message from javascript Alert!")}
      return <div><button onClick={Hi}>click</button></div>
}
ReactDOM.render(<Alertmessage/>,document.getElementById('mydiv'))