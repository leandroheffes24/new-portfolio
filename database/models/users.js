module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Users",
        {
            id: {type: DataTypes.STRING, primaryKey: true},
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