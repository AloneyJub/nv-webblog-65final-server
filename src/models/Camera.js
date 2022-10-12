module.exports = (sequelize, DataTypes) => {
    const Camera = sequelize.define('Camera', {
        photo: DataTypes.STRING,
        titel: DataTypes.STRING,
        cameraname: DataTypes.STRING,
        mdf: DataTypes.STRING,
        status: DataTypes.STRING,
        type: DataTypes.STRING
    })
    return Camera
}