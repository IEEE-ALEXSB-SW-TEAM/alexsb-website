module.exports = (sequelize, DataTypes) => {
    const Committee = sequelize.define('Committee', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Committee;
};
