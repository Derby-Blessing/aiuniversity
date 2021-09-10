import React from 'react';
import { Alert, Form,Col, Row,FormControl,Card,Container } from 'react-bootstrap';

class UniList extends React.Component {
    constructor(props)
    {
        super(props)
        this.state ={
            universities:[],
            isLoaded: false,
        }
    }
 
    componentDidMount()
    {
        fetch('http://localhost:8008/getAllUni')
        .then(res=> res.json())
        .then(json => {
            this.setState({
                isLoaded:true, 
                universities: json.result,
            })
        })
    }
    render() {
        var {isLoaded, universities} = this.state;
        if (!isLoaded)
        {
            return <Alert>Loading....</Alert>
        }
        else 
        {
            return (
            <>
                    <option selected value="">--SELEZIONA UNI--</option>
                        {universities.map(item=>(
                            <option value={item}>{item}</option>
                        ))}
                
            </>
          )
        }
      
    }
}
export default UniList