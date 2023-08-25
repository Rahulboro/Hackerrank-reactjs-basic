import React from 'react';

function Slides({slides}) {
    [
        {
          title: "Restart",
          text: "This is the first slide's content."
        },
        {
          title: "Preview",
          text: "Here's the content of the second slide."
        },
        {
          title: "Next",
          text: "Content for the third slide goes here."
        }
      ];

    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined">Restart</button>
                <button data-testid="button-prev" className="small">Prev</button>
                <button data-testid="button-next" className="small">Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">Slide Title Here</h1>
                <p data-testid="text">Slide Text Here</p>
            </div>
        </div>
    );

}

export default Slides;
