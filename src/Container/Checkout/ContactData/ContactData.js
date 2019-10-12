import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import Axios from '../../../AxiosInstance';
import classes from './ContactData.module.css';
class ContactData extends Component
{
  state={
    name:"",
    email: "",
    address:{
        street:" ",
        postalCode:" "
    },
    loading:false
  }

  orderHandler=(event)=>{
    event.preventDefault();
    this.setState({loading:true});
    const order={
      ingredients:this.props.ings,
      price:this.props.totalPrice,
      customer:{
        name:"Divyanshu Chaturvedi",
        address:{
          street:"35783 India"
        },
        email:"test@test.gmail.com"
      }
    }
    Axios.post('/order.json',order)
    .then(response=>{
      this.setState({loading:false})
      this.props.history.push('/');
    })
    .catch(error=>{
      this.setState({loading:false})
    });
  }
  render()
  {
    let form=(<form>
    <input className={classes.input} type='text' name='name' placeholder='HMr.John'/>
    <input className={classes.input} type='email' name='name' placeholder='Hklsl@gmail.com'/>
    <input className={classes.input} type='text' name='street' placeholder='HMrf;rrk'/>
    <input className={classes.input} type='text' name='postalCode' placeholder='xxx-xxx'/>
    <button onClick={this.orderHandler}>Order</button>
    </form>);
    if(this.state.loading)
    {
       form=<Spinner/>
    }
    return(
      <div className={classes.ContactData}>
      <h4> Enter Your Conatct Details</h4>
        {form}
      </div>

    );
  }
}
const mapStateToProps=state=>{
  return {
     ings:state.ingredients,
     totalPrice:state.totalPrice
  };
}

export default connect(mapStateToProps)(ContactData);
