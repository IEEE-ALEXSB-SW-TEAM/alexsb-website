import './CardComponent.css';
/**
*
* @author Tamim Sherif <Tamim.Sherif@oultook.com>
* @function CardComponent - This is a functional component that will be used to display the card component.
* @param {string} title - title for the card.
* @param {string} description - decritption for teh card.
* @param {string} image - image for the card.
* @returns {JSX} - It returns the JSX for the card component.
* @summary - This is a functional component that will be used to display the card component.
* @see - This component is being used in the Home component.
* @todo - better hovering effect , dynamic alignment.
* @bug - dimensions.
* @note - N/A.
*/
function CardComponent(props) {
  return (
    <div className='card'>                                                                                                  
    <div className='card-image'>
            <img src={props.image} alt="card" /> 
    </div>
    <div className='card-title'>
    <h3><center>{props.title}</center></h3>
    </div>
    <div className='card-description'>
    <p><center>{props.description}</center></p>
    </div>
    </div>
  );
}

export default CardComponent;