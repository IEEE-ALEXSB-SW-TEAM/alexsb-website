import React from 'react';
import './PurposeComponent.css';

/**
 * React component representing the purpose for IEEE-AlexSB section.
 * @returns {JSX.Element} The purpose component JSX.
 * @example
 * // Usage:
 * import PurposeComponent from './PurposeComponent';
 * 
 * const App = () => {
 *   return (
 *     <div>
 *       <PurposeComponent />
 *     </div>
 *   );
 * }
 */

const PurposeComponent = () => {
  return (
    <div className="purpose-container">
      <h1>Our Purpose</h1>
      <p>Fostering a community where </p>
      <p>students engage in enriching activities</p>
      <p>that bolster skills, relationships, and personal growth.</p>
    </div>
  );
};

export default PurposeComponent;
