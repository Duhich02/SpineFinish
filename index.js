

const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('1ttt', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

const User = sequelize.define('User', {
    // Model attributes are defined here
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    course_name: {
        type: DataTypes.STRING,
        // allowNull defaults to true
    },
    instructor: {
        type: DataTypes.STRING,
        // allowNull defaults to true
    },
    credits: {
        type: DataTypes.INTEGER,
        // allowNull defaults to true
    }
}, {
    // Other model options go here
    tableName: 'courses'

});

//const jane = await User.create({ firstName: "Jane", lastName: "Doe" });


;(async() => {
    try{
        await User.sync({
            alter: true,
            force: false
        });
        const user = await User.findOne({
            where:{
                instructor: 'Ivan',
            }
        });
        user.course_name = 'Design';
        user.save();
        console.log(user);
    } catch (error){
        console.log(error);
    }
})();

