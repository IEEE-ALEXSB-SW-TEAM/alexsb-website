module.exports = (sequelize, DataTypes) => {
    const HeadCommittee = sequelize.define('HeadCommittee', {
        season: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        primaryKey: true,
        uniqueKeys: {
            unique_user_committee: {
                fields: ['userId', 'committeeId']
            }
        }
    });

    HeadCommittee.associate = models => {
        HeadCommittee.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE' });
        HeadCommittee.belongsTo(models.Committee, { foreignKey: 'committeeId', onDelete: 'CASCADE' });
    };

    return HeadCommittee;
};
