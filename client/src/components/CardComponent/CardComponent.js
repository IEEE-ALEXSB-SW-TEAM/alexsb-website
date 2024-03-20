import './CardComponent.css';
/**
*
* @author Tamim Sherif <Tamim.Sherif@oultook.com>
* @function CardComponent - This is a functional component that will be used to display the card component.
* @param {string} title - N/A.
* @param {string} description - N/A.
* @param {string} image - N/A.
* @returns {JSX} - It returns the JSX for the card component.
* @summary - This is a functional component that will be used to display the card component.
* @see - This component is being used in the Home component.
* @todo - N/A.
* @bug - N/A.
* @note - N/A.
*/
function CardComponent({ title, description, image }) {
  return (
    <div className='card'>
    <div className='card-image'>
        <img src={'/images/image-1.jpg'} alt={title} />

    </div>
    <div className='card-title'>

    </div>
    <div className='card-description'>

    </div>

    </div>
  );
}

export default CardComponent;