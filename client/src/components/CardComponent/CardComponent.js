import './CardComponent.css';
/**
*
* @author Tamim Sherif <Tamim.Sherif@oultook.com>
* @function CardComponent - This is a functional component that will be used to display the card component.
* @param {string} height - height for the card.
* @param {string} width - width for the card.
* @param {string} position - position for the text in the card.
* @param {string} title - title for the card.
* @param {string} description - decritption for teh card.
* @param {string} image - image for the card.
* @returns {JSX} - It returns the JSX for the card component.
* @summary - This is a functional component that will be used to display the card component.
* @see - This component is being used in the Benefits component.
* @todo - better hovering effect , dynamic alignment.
* @bug - dimensions.
* @note - N/A.
*/
function CardComponent(props) {
  const COMPONENT_HEIGHT = Number(props.height);
  const COMPONENT_WIDTH = Number(props.width);
  const TEXT_POSITION = props.position;
  return (
    <div className='card' style={{ '--width': `${COMPONENT_WIDTH}px`, '--height': `${COMPONENT_HEIGHT}px` , '--position': `${TEXT_POSITION}` }}>                                                                                                  
    <div className='card-image'>
            <img src={props.image} alt="card" /> 
    </div>
    <div className='card-title'>
    <h3>{props.title}</h3>
    </div>
    <div className='card-description' >
    <p>{props.description}</p>
    </div>
    </div>
  );
}

export default CardComponent;