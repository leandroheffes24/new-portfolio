module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Users",
        {
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        },
        {
            tableName: "users",
            timestamps: false
        }
    );

    return Model;
};