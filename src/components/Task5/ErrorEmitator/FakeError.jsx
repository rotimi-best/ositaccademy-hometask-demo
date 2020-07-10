import React from 'react'

class FakeError extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            errorMessage: ''
         };
    }

    componentDidMount() {
        this.getFakeRequest().then(
            response=>{
                if(response.status > 200) {
                    this.setState({
                        errorMessage: null
                    })
                }

               
            }
        )

    }
    getFakeRequest = async () => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/frsegsdfr`)
        return response

    }


    render() {
        const{errorMessage} = this.state.errorMessage
        return <h1>{errorMessage}</h1>;
    }

}
export default FakeError;


