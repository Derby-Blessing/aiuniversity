import React from 'react';
import { Alert, Form,Col, Row,FormControl,Card,Container } from 'react-bootstrap';

class UniList extends React.Component {
    constructor(props)
    {
        super(props)
        this.state ={
            universities:[],
            isLoaded: false,
            error:false, 
            errorName: "",
        }
    }
 
    componentDidMount()
    {
        fetch('https://aiuniversity-api.herokuapp.com/getAllUni')
        .then(res=> res.json())
        .then(json => {
            this.setState({
                isLoaded:true, 
                universities: json.result,
            })
        }).catch(e => {this.setState({
            error:true, 
            errorName: e,
            isLoaded:true, 
        })
          })
    }
    
    render() {
        var {isLoaded, universities, error} = this.state;
        if (!isLoaded)
        {
            return <option selected value="">Loading....</option>
        }
        else 
        {if(!error)
            {
             
            return (
                <>
                        <option selected value="">--SELEZIONA UNI--</option>
                            {universities.map(item=>(
                                <option value={item} style={{textTransform: 'capitalize'}}>{item}</option>
                            ))}
                    
                </>
                )

             }
             else
             {
               return <option selected value="">Impossibile recuperare i dati richiesti</option>
             }
            
        }
      
    }
}
export default UniList