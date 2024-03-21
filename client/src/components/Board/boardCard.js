import React, { Component } from "react";

class BoardCard extends Component {
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
