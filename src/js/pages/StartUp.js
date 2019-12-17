import React, { Component } from 'react';
import { TimelineLite } from 'gsap';
import '../../scss/pages/startup.scss'


class StartUp extends Component {
    constructor(props) {
      super(props);
      this.intro = React.createRef(); // shiny new React 16.3 ref API!
    }
    componentDidMount() {
        const tl = new TimelineLite();
        
        tl
          .to(this.intro.current, 4.5, { opacity: 1, delay: 1 })
          .to(this.intro.current, 1.5, { opacity: 0 });
    }
  
    render() {
      return (
        <div className="container">
          <section className="intro" ref={this.intro}>
            <p>
              A long time in the future, in a galaxy very, very near....
              <br />
              The company Natural Gene Editing has bought out Crispr, Google, Amazon.....
              <br />
              NGE provided every human a home, food to eat....
              <br /> 
              They have built all new humans in their own image, for a specific job....
              <br />
            
            </p>
          </section>
        </div>
      );
    }
  }
  
  export default StartUp;
