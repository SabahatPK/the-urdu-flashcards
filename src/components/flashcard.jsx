import React, { Component } from "react";
// import { csv } from "d3-fetch";
// import data from "../data/Urdu_English_Glossary.csv";\
//START HERE: Follow these instructions to deploy: https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d
//OR maybe use https://www.netlify.com/ ??

//OUTS - fix link to CSS sheets
class FlashCard extends Component {
  //OUTS: Trying to add data from data folder as state
  //https://stackoverflow.com/questions/51258615/reactjs-d3-parse-local-csv-file-and-passing-it-to-state-with-d3-request
  //https://stackoverflow.com/questions/53804822/how-to-make-react-js-fetch-data-from-api-as-state-and-pass-this-state-data-from
  state = {
    data: [
      ["aab o havaa", "آب و ہوا", "climate"],
      ["ảpas meṅ", "آپس میں", "among them/us/you"],
      ["ảtả", "آٹا", "flour"],
      ["ảj", "آج", "today"],
      ["ảj kal", "آج کل", "these days"],
      ["ảkhir", "آخر", "end"],
      ["ảdảb", "آداب", "etiquette"],
      ["ảdmḭ", "آدمی", "man"],
      ["ảdhả", "آدھا", "half"]
    ],
    randomCard: [],
    finalChoice: "",
    showAnswers: false
  };

  generateRandomCard = () => {
    console.log("Generating random card");
    console.log(this.state.data);
    let randomNumber = Math.floor(Math.random() * 9);
    let randomCard = this.state.data[randomNumber];
    console.log(randomCard);
    this.setState({ randomCard: randomCard });
  };

  generateAnswers = () => {
    let showAnswers = this.state.showAnswers;
    this.setState({ showAnswers: !showAnswers });
  };

  handleChange = () => {
    let element = document.getElementById("choice");
    let finalChoice = element.options[element.selectedIndex].text;
    this.setState({ finalChoice });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div id="selections" className="row">
            <div className="col-md-6">
              <select
                id="choice"
                className="form-control form-control-sm"
                onChange={this.handleChange}
              >
                <option value="makeChoice">
                  I want to test my knowledge of....
                </option>
                <option value="urduFront">Nastaleeq</option>
                <option value="urduFront">Romanized</option>
                <option value="urduFront">Translation</option>
              </select>
            </div>
          </div>

          <div className="card text-center">
            <div className="card-body">
              <h6>
                {this.state.finalChoice === "Nastaleeq"
                  ? this.state.randomCard[1]
                  : this.state.finalChoice === "Romanized"
                  ? this.state.randomCard[0]
                  : this.state.finalChoice === "Translation"
                  ? this.state.randomCard[2]
                  : null}
              </h6>
              <h6 className="answers">
                {this.state.showAnswers &&
                this.state.finalChoice === "Nastaleeq" ? (
                  <div>
                    <p>{this.state.randomCard[0]}</p>
                    <p>{this.state.randomCard[2]}</p>
                  </div>
                ) : this.state.showAnswers &&
                  this.state.finalChoice === "Romanized" ? (
                  <div>
                    <p>{this.state.randomCard[1]}</p>
                    <p>{this.state.randomCard[2]}</p>
                  </div>
                ) : this.state.showAnswers &&
                  this.state.finalChoice === "Translation" ? (
                  <div>
                    <p>{this.state.randomCard[0]}</p>
                    <p>{this.state.randomCard[1]}</p>
                  </div>
                ) : null}
              </h6>
            </div>
            <div className="row">
              <div className="col">
                <button onClick={this.generateRandomCard}>
                  Generate New Card
                </button>
              </div>
              <div className="col">
                <button onClick={this.generateAnswers}>
                  Show/Hide Answers
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FlashCard;
