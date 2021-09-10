import React from 'react';
import { Alert, Spinner,  Form,Col, Row,FormControl,Card,Container } from 'react-bootstrap';

class Province extends React.Component {
    constructor(props)
    {
        super(props)
        this.state ={
            university: this.props.university,
            isLoaded: false,
            province:""
            
        }
        console.log(this.props.university)
    }
 
    componentDidMount()
    {
        const link='http://localhost:8008/getProvinceByUni/'+ this.state.university
        console.log(link)
        fetch(link)
        .then(res=> res.json())
        .then(json => {
            this.setState({
                isLoaded:true, 
                province: json.result,
            })
            console.log(json.result)
            console.log (this.state.province)
        })
    }
    render() {
        var {isLoaded, province} = this.state;
        if (!isLoaded)
        {
            return <Alert><Spinner animation="border" variant="primary" /> Loading..</Alert>
        }
        else 
        {
            console.log(province)
            if(province=="NO PROVINCE FOUND")
            {
                return (<span>Nessuna regione è stata trovata</span>)
            }
            else
            {
                return (
                <>
                    
                    
                        <span>{province}</span>
                    
                </>
                 )
            }
         
        }
    }
}
export default Province