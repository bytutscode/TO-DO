const sequelize = require("../instances/DB");
const { Model , DataTypes} = require("sequelize");

class Task extends Model {
}
Task.init({
    id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement:true,
        },
    task:{type:DataTypes.STRING},
    done:{
        type: DataTypes.BOOLEAN
    },
    donedate:{
        defaultValue:'2023/03/24',
        type:DataTypes.DATE
    }
},{
    sequelize,
    tableName:'tasks',
    timestamps:false
});


module.exports = Task;