
/*  Challenge: Parent text (I need to be updated from my child) 
should be updated when Child button below is clicked. 
Feel free to use any string to update the parent's current string.
  
  
  you are given this code: 


*/
function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

  const handleChild = () => {
    setValue("I am updated by my child")
  }
  
  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child updateChild={handleChild}/>
      </div>
    </>
  );
}

ReactDOM.render(<Parent />, document.getElementById("root"));
