import React, { Component } from "react";

/**
 * Represents a board member card.
 * @class
 */
class BoardCard extends Component {
  /**
   * Renders the board member card.
   * @returns {JSX.Element} JSX representing the board member card.
   */
  render() {
    const { name, role, imageUrl } = this.props;
    return (
      <div className="team-member-card">
        {/* put the from device */}
        
        <div className="team-member-image" style={{ backgroundImage: `url(${imageUrl})` }} />
        <h3 className="team-member-name">{name}</h3>
        <p className="team-member-role">{role}</p>
      </div>
    );
  }
}

export default BoardCard;
