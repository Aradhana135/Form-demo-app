import React, { useState } from 'react'

const Form = () => {
    const [data, setdata] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        address: " ",
        gender: "",
        technology: [],
        industry: ""
      });
      const [record, setRecord] = useState([]);
      const [records,setRecords]=useState([]);
      const[editing,setEditing]=useState([]);
      const handinginput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        if(e.target.name === 'technology'){
            console.log('tech', data, name, value)
            setdata({...data, technology : [...data[name], value]})
        } else {
            console.log('qq', name, value)
            setdata({ ...data, [name]: value });
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
  
        if (data.password!=data.confirmpassword){
              alert("password doesn't match")
              console.log(data.password);
              } else {
      
                  setRecords([...records, data])
                  setdata({ name: "", email: "", phone: "", password: "",confirmpassword: "",address: "", gender: "",technology: [],industry:[] });
                  alert(" Data inserted successfully");
              }
        
      };
     
    // const buttonsubmit=()=>{
    //     if (data.password!=data.confirmpassword){
    //     alert("password doesn't match")
    //     console.log(data.password);
    //     } else {
    //         alert(" login successful");
    //     }
    // }
    console.log('data..', data)

    const del=(index)=>{
        const newdatas=setRecord.filter(record=>record!==index)
        }
const add=(item)=>{
setRecords([...records,record])
}
        const edit=(name)=> {
            setRecord(name)
            setEditing(record.indexOf(name))
            // setEditing([editing])
            // currentItems('');
        }
        // console.log(editing);
//         const update=()=>{
//             const newTodos = todos.map(item => record.indexOf(item) == editing ? todo : item)
//             console.log(todos);
//             setTodos(newTodos)
//             setTodo('')
//             setEditing(null)
//         }
// const edit=(index)=>{

// }
    
      return (
        <>
          <form >
            <div >
              <div>
                <label placeholder='name'> Username </label>
                <input
                  type={"text"}
                  autoComplete={"off"}
                  name="name"
                  id="name"
                  value={data.name}
                  onChange={handinginput}
                />
                {/* <button type={"del"} onClick={del}> Delete</button>
                <button type={edit} onClick={edit}>Edit</button> */}
              </div>
              <br></br>
              <div>
                <label htmlFor="email"> Email </label>
                <input
                  type={"email"}
                  autoComplete={"off"}
                  value={data.email}
                  name="email"
                  id="email"
                  onChange={handinginput}
                />
                 {/* <button type={"edit"}>Edit</button> */}
              </div>
              <br></br>
              <div>
                <label htmlFor="phone"> Phone </label>
                <input
                  type={"number"}
                  autoComplete={"off"}
                  value={data.phone}
                  name="phone"
                  id="phone"
                  onChange={handinginput}
                />
                {/* <button type={"edit"}>Edit</button> */}
              </div>
               <div>
                {/* <label for="gender"> gender </label>
                <input
                  type={"radio"}
                //   autoComplete={"off"}
                  value={data.gender}
                  name="gender"
                  id="gender"
                  onChange={handinginput}
                /> */}
                 <input type="radio" name="gender" value="male" onChange={handinginput}/>Male<br></br>
                 <input type="radio" name="gender" value="Female" onChange={handinginput}/>Female<br></br>
                </div> 
                <div>
                <label htmlFor='technology'>Technology</label><br></br>
                <input type="checkbox" id="java" name="technology" value="java" onChange={handinginput} >
                </input>
                <label htmlFor="Java"> Java</label><br></br>
                    <input type="checkbox" id="javascript" name="technology" value="javascript" onChange={handinginput} >
                </input>
                <label htmlFor="javascript"> Javascript</label><br></br>
                <input type="checkbox" id="typescript" name="technology" value="typescript"  onChange={handinginput}>
                </input>
                <label htmlFor="typescript"> Typescript</label><br></br>
            </div>
              <div>
                <label htmlFor="password"> Password </label>
    
                <input
                  type={"password"}
                  autoComplete={"off"}
                  name="password"
                  value={data.password}
                  id="password"
                  onChange={handinginput}
                />
                </div>

                <div>
                <label htmlFor="confirmpassword"> ConfirmPassword </label>
    
                <input
                  type={"password"}
                  autoComplete={"off"}
                  name="confirmpassword"
                  value={data.confirmpassword}
                  id="confirmpassword"
                  onChange={handinginput}
                />
                </div>

                <div>
                    <label htmlFor='address'>Address</label>
                    <textarea id="address" name="address" rows="5" cols="40" onChange={handinginput}></textarea>
                    
                    
                </div>
                <div>
                <label htmlFor='industry' >Industry</label> <br></br>
                <select onChange={handinginput} id='industry' name="industry">
                    <option value="service base">Service based</option>
                    <option value="product base">Product based</option>
                    <option value="xyz">XYZ</option>
                    <option value="abc">ABC</option>
                </select>
</div>
        <div>
              <button type={"submit"} onClick={handleSubmit}>
                Submit
              </button>
              {/* <button type={"delete"} onClick={del}> delete</button>
              <button type={"add"} onClick={add}> Add</button> */}
            </div>
                
            </div>
          </form>
          {/* <div>
            {record.map((currEle) => {
              const { index, name, email, phone, password,address, gender, technology, industry } = currEle;
              return (
                <div id={index}>
                  <p>Name:- {name}</p>
                  <p>Email:-{email}</p>
                  <p>Phone:-{phone}</p>
                  <p>Password:-{password}</p>
                  <p>Address:-{address}</p>
                  <p>{gender}</p>
                  <p>{industry}</p>
                  {technology.map(item => <ul>
                    <li><p>{item}</p></li>
                  </ul>)}
                </div>
              );
            })}
          </div> */}
          <table border='5'>
            <tr>
                <td>Name: </td>
                <td>Email: </td>
                <td>Phone:</td>
                <td>Password:</td>
                <td>Address:</td>
                <td>Gender:</td>
                <td>Industry</td>
            </tr>
            {records.map((currEle) => {
              const { index, name, email, phone, password,address, gender, technology, industry } = currEle;
              return (
                <tr>
                    <td> {currEle.name}</td>
                    <td> {currEle.email} </td>
                    <td>{currEle.phone}</td>
                    <td>{currEle.password}</td>
                    <td>{currEle.gender}</td>
                    <td>{currEle.address}</td>
                    <td>
                    {String(currEle.technology)}
                    </td>
                </tr>
             )})}
            
          </table>
        </>
      );
        }
export default Form