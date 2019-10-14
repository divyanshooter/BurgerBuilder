import React from 'react';
import classes from './Input.module.css';
const Input=props=>{
     let inputElemnet=null;
     const inputClasses=[classes.InputElemnet];
     if(!props.valid && props.shouldValidate && props.touched)
     {
         inputClasses.push(classes.Invalid);
     }
     switch (props.elementType) {
         case 'input':
             inputElemnet=<input 
                   className={inputClasses.join(' ')} 
                   {...props.elementConfig} 
                   value={props.value} 
                onChange={props.changed}/>;
             break;
         case 'textarea':
             inputElemnet=<textarea 
                          className={inputClasses.join(' ')} 
                          {...props.elementConfig} 
                          value={props.value}
                        onChange={props.changed}/>;
             break;
         case 'select':
             inputElemnet=(
                <select className={inputClasses.join(' ')} 
                  value={props.value}
                  onChange={props.changed}>
                       {props.elementConfig.options.map(curr=>(
                           <option key ={curr.value} value={curr.value}>
                             {curr.displayValue}
                           </option>
                        )
                       )}
                 </select>
                    )
             break;
         default:
             inputElemnet=<input 
                  className={inputClasses.join(' ')} 
                  {...props.elementConfig} 
                  value={props.value} 
                onChange={props.changed}  />;
             break;
     }
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElemnet}
        </div>
    );
}

export default Input;