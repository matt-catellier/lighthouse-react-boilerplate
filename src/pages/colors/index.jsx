import React from 'react';
import {Colors, ColorsString} from "../../Colors.jsx";

const Explanation = ({heading, description}) => (
  <div style={{marginBottom: '10px'}}><p style={{margin: 0, fontWeight: 'bold'}}>{heading}</p><p
    style={{margin: '2px 10px',}}>{description}</p></div>
);

const Component = () => (
  <div>
    <h1> Component Definition </h1>
    <pre style={{maxWidth: '100%'}}>{ColorsString}</pre>
  </div>
)


const SettingState = () => (
  <div>
    <h1> Setting State </h1>
    <p> The constructor is used to set any properties of the class, the initial state of the component and bind
      methods to the component.</p>
    <p><span style={{fontWeight: 'bold'}}>NOTE:</span> Only set the initial state using the constructor for components
      that do not rely on props.</p>
    <pre style={{display: 'inline-block', padding: '10px', backgroundColor: '#e7e7e7', border: '1px solid black'}}>
            {'constructor(props){\n' +
            '  super(props)\n' +
            '  this.colors =  [\'red\', \'blue\', \'green\'];\n' +
            '  this.state = {color: \'black\'};\n' +
            '  this.setColor = this.setColor.bind(this);\n' +
            '}'}
      </pre>
    <Explanation
      heading={'super()'}
      description={'The Colors component is extending the React.Component, in or for us to gain access to Reacts lifecycle methods, we need to call super() in the constructor.'}
    />
    <Explanation
      heading={'this.colors'}
      description={'This is how we define class properties to be accessed within the component. Changing these values will not re-render the component.'}
    />
    <Explanation
      heading={'this.state'}
      description={'This is how we can setState for component. Using reacts setState() (which we see shortly) will cause the component to re-render.'}
    />
    <Explanation
      heading={'this.setColor'}
      description={'This is how we defined class methods and then bind them to the component, so method has access to this.color, and this.state when it is called.'}
    />
  </div>
)

export default () => (
  <div>
    <Colors/>
    <Component/>
    <SettingState/>
  </div>
)
