import react,{useState} from "react";
function Button() {

    const [name,setname]=useState(" ")
    const [email,setemail]=useState(" ")
    const submit=()=>{
  
  }
  return (
    <>
    <h1 style={{ color: "red" } }><center >asdasdas</center></h1>
    <form>
    <label>Name</label>
            <input placeholder='Name' onChange={e =>setname (e.target.value)}/>
            <label>Email</label>
            <input placeholder='Email' onChange={e => setemail(e.target.value)}/>
        <button onClick={submit}> Submit</button>
      
    </form>
    </>
  );
}

export default Button;
