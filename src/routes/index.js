const router = require('express').Router();
const todoController = require('../controllers/TodoController')

router.get('/',todoController.getAll);

router.post('/add', todoController.newTask);
router.get('/done/:id', todoController.done);
router.get('/del/:id', todoController.deleteTask);



module.exports = router;