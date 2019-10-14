import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Axios from '../../../AxiosInstance';
import classes from './ContactData.module.css';
import * as actions from '../../../store/actions/index';
import Button from '../../../Components/UI/Button/Button';
import Input from '../../../Components/UI/Input/Input';
import BurgerBuilder from '../../BurgerBuilder/BurgerBuilder';
class ContactData extends Component
{
  state={
       orderForm:{
        name:{
             elementType:'input',
             elementConfig:{
                            type:'text',
                            placeholder:'Your Name'
                           },
              value:'',
              validation :{
                            required:true,
                          },
              valid:false,
              touched:false
          },
        street:{
             elementType:'input',
             elementConfig:{
                            type:'text',
                            placeholder:'Street'
                           },
              value:'',
              validation :{
                            required:true,
                          },
              valid:false,
              touched:false
          },
        zipcode:{
             elementType:'input',
             elementConfig:{
                            type:'text',
                            placeholder:'Zip Code'
                           },
              value:'',
              validation :{
                            required:true,
                            minLength:5,
                            maxLength:7

                          },
              valid:false,
              touched:false
          },
       Country:{
             elementType:'input',
             elementConfig:{
                       type:'text',
                       placeholder:'Country'
                      },
             value:'',
             validation :{
                       required:true,
                     },
              valid:false,
              touched:false
                    },
        email:{
             elementType:'input',
             elementConfig:{
                            type:'email',
                            placeholder:'Your Email'
                           },
              value:'',
              validation :{
                            required:true,
                          },
              valid:false,
              touched:false
          },
        delivery:{
             elementType:'select',
             elementConfig:{
                            options:[
                              {value:'fastest',displayValue:'Fastest'},
                              {value:'cheapest',displayValue:'Cheapest'}
                            ]
                          
                           },
              value:'fastest',
              validation:{},
              valid:true
          }
      },
      formValid:false
  }

  orderHandler=(event)=>{
    event.preventDefault();
    const formData={};
    for( let key in this.state.orderForm)
    {
      formData[key]=this.state.orderForm[key].value;
    }

    const order={
      ingredients:this.props.ings,
      price:this.props.totalPrice,
      orderData:formData
    }
    this.props.onOrderBurger(order);
   
  }
  checkValidity=(value,rules)=>{
      let isValid=true;
      if(!rules)
      { 
        return true;

      }
    
      if(rules.required)
       {
         isValid=value.trim()!=='' && isValid;
       }
      if(rules.minLength)
      {
        isValid=value.length>=rules.minLength && isValid;
      }
      if(rules.maxLength)
      {
        isValid=value.length <=rules.maxLength && isValid;
      }
      return isValid;

  }
  inputChangedHandler=(event,identifier)=>{
    const updatedOrderForm={
      ...this.state.orderForm
    }
    const updatedFormElement={
      ...updatedOrderForm[identifier]
    }
    updatedFormElement.value=event.target.value;
    updatedFormElement.valid=this.checkValidity(updatedFormElement.value,updatedFormElement.validation);
    updatedFormElement.touched=true;
    updatedOrderForm[identifier]=updatedFormElement;
    let formValid=true;
    for(let key in updatedOrderForm)
    {
       formValid=formValid && updatedOrderForm[key].valid;
    }
    this.setState({orderForm:updatedOrderForm,formValid});
    
    
  
  }
  render()
  {
    const formElementArray=[];
    for(let key in this.state.orderForm)
      {
        formElementArray.push({
          id:key,
          config:this.state.orderForm[key]
        })
      }
    let form=(
      <form onSubmit={this.orderHandler}>
        {formElementArray.map((curr,index)=>(
           <Input key={curr.id + index}
                 elementType={curr.config.elementType} 
                 elementConfig={curr.config.elementConfig} 
                 value={curr.config.value}
                 valid={curr.config.valid}
                 shouldValidate={curr.config.validation}
                 touched={curr.config.touched}
                 changed={(event)=>this.inputChangedHandler(event,curr.id)}/>
           )
         )}
        <Button btType="Success" disabled={!this.state.formValid}>Order</Button>
       </form>
     );
    if(this.props.loading)
    {
       form=<Spinner/>
    }
    return(
      <div className="input" >
      <h4> Enter Your Conatct Details</h4>
        {form}
      </div>

    );
  }
}
const mapStateToProps=state=>{
  return {
     ings:state.burgerBuilder.ingredients,
     totalPrice:state.burgerBuilder.totalPrice,
     loading:state.order.loading
     };
 }

const mapDispatchToProps=dispatch=>{
  return {
     onOrderBurger:(orderData)=>dispatch(actions.purchaseBurger(orderData))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ContactData);
