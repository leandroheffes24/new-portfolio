module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define(
        "Proyects",
        {
            id: {type: DataTypes.STRING, primaryKey: true},
            name: DataTypes.STRING,
            image: DataTypes.STRING,
            proyect_link: DataTypes.STRING,
            github_proyect: DataTypes.STRING,
        },
        {
            tableName: "proyects",
            timestamps: false
        }
    );

    return Model;
};