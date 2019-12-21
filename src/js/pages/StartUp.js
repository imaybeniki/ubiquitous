import React, { Component } from 'react';
import Crawl from 'react-star-wars-crawl';


class StartUp extends Component {
  
    render() {
      return (
        <div>
          <Crawl 
            title="Episode I"
            subTitle="The Rise of NGE"
            text="A long time in the future, in a galaxy very, very near....
            The company Natural Gene Editing has bought out Crispr, Google, Amazon.....
            As the environment soured, NGE offered quality code to protect your offspring from the treachorous environment....
            NGE provided every human a bed, a job, food to eat....
            They have built all new humans in their own image, for a specific job...."
          />
        </div>
      );
    }
  }
  
  export default StartUp;
