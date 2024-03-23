import React from "react";
import "./PurposeComponent.css";

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
    <div>
      <div className="about-container">
        <h1>What is IEEE</h1>
        <p>IEEE is the world's largest technical professional organization</p>
        <p>dedicated to advancing technology for the benefit of humanity.</p>
      </div>
      <div className="purpose-container">
        <h1>Our Purpose</h1>
        <p>Fostering a community where </p>
        <p>students engage in enriching activities</p>
        <p>that bolster skills, relationships, and personal growth.</p>
      </div>
    </div>
  );
};

export default PurposeComponent;
