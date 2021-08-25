import React, {useState,useEffect, Component } from 'react'
import Axios from "axios";
import { NavLink } from 'react-router-dom';
//import './Customstyle.css';
import Select from 'react-select';
//import Footer from '../components/Footer';

export default class UserForm extends Component {
 
    constructor(props) {
     
        super(props);
        this.state = {
          selectOptions : [],
          id: "",
          fields:{},
          role_id:"",
          token:"",
          errors:{}
        };
       
      }
      async getOptions(){
        Axios.get("http://localhost:4400/userrole/all")
          .then(res => {
            console.log(res);
            if (res.status == 200) {
              this.setState({ post: res.data });
              const data = res.data
              const options = data.map(d => ({
                "value" : d.id,
                "label" : d.name
          
              }))
              this.setState({selectOptions: options})
            }
          })
        }
    
      handleChange(e){
       this.setState({id:e.value, name:e.label})
      }
    
    

     componentDidMount = e => {
       
        // const id = this.props.match.params.id;
        this.getOptions()
       
       };
      
      getonchange=(e)=>{
        this.setState({[e.target.name]:e.target.value},()=>{
            console.log(this.state,"************")
        })
      }
      onSubmit = e => {
        e.preventDefault();
        const serverPort = { ...this.state };
        Axios.post("http://localhost:4400/user", serverPort).then(res =>
          console.log(res.data)
        );
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["name"] = "";
            fields["email"] = "";
            fields["phone"] = "";
            fields["password"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }
       // this.props.history.push("/Userlist");
        
        
      };

      
    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
     
    
      if (this.state.name == '' || this.state.name == undefined) {
        formIsValid = false;
        errors["name"] = "*Please enter your name.";
      }else{
        errors["name"] = "";
      }


      if (this.state.email == '' || this.state.email == undefined) {
        formIsValid = false;
        errors["email"] = "*Please enter your email-ID.";
      }else{
        errors["email"] = "";
      }

      if(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(this.state.email) == false){
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }else{
        errors["email"] = "";
      }
     

      if (this.state.phone == '' || this.state.phone == undefined) {
        formIsValid = false;
        errors["phone"] = "*Please enter your mobile no.";
      }else{
        errors["phone"] = "";
      }

      if (typeof this.state.phone !== "undefined") {
        var pattern = new RegExp(/^[0-9\b]+$/);
        if (!pattern.test(this.state.phone)) {
          formIsValid = false;
          errors["phone"] = "Please enter only number.";
        }else if(this.state.phone.length != 10){
          formIsValid = false;
          errors["phone"] = "Please enter valid phone number.";
        }
      }

      if (this.state.password == '' || this.state.password == undefined) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }else{
        errors["password"] = "";
      }

      // if (typeof fields["password"] !== "undefined") {
      //   if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
      //     formIsValid = false;
      //     errors["password"] = "*Please enter secure and strong password.";
      //   }
      // }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }

      
    render() {
      console.log(this.state.selectOptions)
        return (
            <div>
              
 

  
       
 


  <div class="form-user">
    <h1>User Registeration</h1>
    <form onSubmit={this.onSubmit} >
        <div className="form-group">
          <label> Name: </label><br/>
          <input
            type="text" name="name" id="name"
            value={this.state.name}
              
            onChange={this.getonchange}
                />
        
        </div>
        <div className="errorMsg">{this.state.errors.name}</div>
        <div >
          <label>Email: </label><br/>
          <input
            type="text" name="email" id="email"
            value={this.state.email}
              
            onChange={this.getonchange}
          />
        </div>
        <div className="errorMsg">{this.state.errors.email}</div>
        <div >
          <label>Password: </label><br/>
          <input
            type="password" name="password" id="password"
            value={this.state.password}
              
            onChange={this.getonchange}
        />
        </div>
        <div className="errorMsg">{this.state.errors.password}</div>
        <div >
        <label>Phone: </label><br/>
        <input
            type="text" name="phone" id="phone"
            value={this.state.phone}
              
            onChange={this.getonchange}
        />
        </div>
        <div className="errorMsg">{this.state.errors.phone}</div>
        <div >
        <label>Role_id: </label>
        <input
            type="text" name="role_id" id="role_id"
            value={this.state.role_id}
              
            onChange={this.getonchange}
        />
        </div>
    
    
     
      
    
        <div >
        <input
            type="submit"
            class="btn btn-info"
        />
        </div>
    </form>      
  </div>
   
    
</div>  
            
      
        

    
        );
    }
}