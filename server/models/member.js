module.exports = (sequelize, DataTypes) => {
    const Member = sequelize.define('Member', {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        memberId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'member',
        },
        joined: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    Member.associate = models => {
        Member.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE' });
        Member.belongsTo(models.Committee, { foreignKey: 'committee1Id', as: 'committee1' });
        Member.belongsTo(models.Committee, { foreignKey: 'committee2Id', as: 'committee2' });
    };

    return Member;
};
