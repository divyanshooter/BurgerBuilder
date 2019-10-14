import React,{Component} from 'react';
import Button from '../../Components/UI/Button/Button';


class Auth extends Component {

    state={
        controls:{
            email:{
                elementTyoe:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your Email'
                },
                value:'',
                validation :{
                    required:true,
                    isEmail:true
                 },
                 valid:false,
                 touched:false
                },
            password:{
                elementTyoe:'input',
                elementConfig:{
                    type:'password',
                    placeholder:'Your Password'
                },
                value:'',
                validation :{
                    required:true,
                    minLength:6
                 },
                 valid:false,
                 touched:false
                }
        }
    }
     render(){
          const formElementArray=[];
          for (let key in this.state.controls)
          {
              formElementArray.push({
                  id:key,
                  config:this.state.controls[key]
              })
          }
          const form=formElementArray.map(curr=>(
              <input type={curr.config.elementConfig.type} placeholder={curr.config.elementConfig.placeholder}/>
          ));
         return(
             <form>
                 {form}
                 <Button btType="Success">Submit</Button>
             </form>

         );
     }

};

export default Auth;
