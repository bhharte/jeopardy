import React, { Component } from 'react';
import JeopardyService from "../../jeopardyService";

class Jeopardy extends Component {
    constructor(props){
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {},
            score: 0,
            answer: "",
        }
    }
    getNewQuestion() {
        return this.client.getQuestion().then(result => {
            this.setState({
                data: result.data[0]
            })
        })
    }
    componentDidMount(){
        this.getNewQuestion();
    }

    updateScore = (event)=> {
        event.preventDefault();
        let userAnswer = this.state.answer.toLowerCase();
        let dataAnswer = this.state.data.answer.toLowerCase();


        if (dataAnswer === userAnswer) {
            this.setState((state, props) => ({
                score: state.score + state.data.value
            }));
        }
        else{
            this.setState((state, props) => ({
                score: state.score - state.data.value
        }));
        }
        this.getNewQuestion();
    }

    handleChange = (event) => {
        let answer = event.target.value;
        this.setState({
            answer 
        })

    }

    render(){
        let category= '';
        if (this.state.data.category) {
            category = this.state.data.category.title
        }

        return(
            <div>
                
                <h2>{this.state.score}</h2>
                <h5>{this.state.data.question}</h5>
                <h6>{this.state.data.value}</h6>
                <h6>{category}</h6>
                <form onSubmit= {this.updateScore} > <input type="text" value={this.state.answer} onChange={this.handleChange} />

                    {/* <label for=""></label> */}
                    <button>
                        What is...?
                    </button>

                </form>

            </div>
        );
    }

}
export default Jeopardy