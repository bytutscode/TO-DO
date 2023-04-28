const Task = require("../models/Task");

module.exports = {
    getAll: async (req, res)=>{
        let tasks = await Task.findAll();

        let date = new Date();

        let y = date.getFullYear();
        let m = date.getMonth();
        let d = date.getDate();

    date = `${y}/${m}/${d}`;
        tasks.forEach((e)=>{

           if(new Date(e.donedate).toISOString().slice(0,10) < new Date(date).toISOString().slice(0,10)){
            e.done = 'false';
            const save = async ()=>{
                await e.save();
            }
           }
        });
       

        res.render('index',{tasks});
    },
    newTask: async (req, res)=>{
        if(!req.body.task){
            res.json({error:'tarefa não recebida!'});
            return;
        }

        let newTask = Task.build();
        newTask.task = req.body.task;

        await newTask.save();

        res.redirect('/');
    },

    done: async (req, res)=>{
        let {id} = req.params;

        let task = await Task.findByPk(id);

        task.done = true;

        let date = new Date();

        let y = date.getFullYear();
        let m = date.getMonth();
        let d = date.getDate();

        date = `${y}/${m}/${d}`;

        task.donedate = date;

        await task.save();

        res.redirect('/');
    },

    deleteTask: async (req, res)=>{
        let {id} = req.params;

       let task = await Task.findByPk(id);
       task.destroy();
       res.redirect('/')
    }
}