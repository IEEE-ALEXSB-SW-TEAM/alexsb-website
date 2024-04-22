module.exports = (sequelize, DataTypes) => {
    const HeadCommittee = sequelize.define('HeadCommittee', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        season: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    HeadCommittee.associate = models => {
        HeadCommittee.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE' });
        HeadCommittee.belongsTo(models.Committee, { foreignKey: 'committeeId', onDelete: 'CASCADE' });
    };

    return HeadCommittee;
};
