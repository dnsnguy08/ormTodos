const router = require('express').Router();
const Todo = require('../../../model/Todo');

router.get('/', async (req,res) => {
    try {
        const todos = await Todo.findAll();
        console.log(todos);
        res.json(todos);
    } catch (error) {
        res.status(500).json({error});
    }
});


router.post('/', async (req,res) => {
    const { todo, isCompleted } = req.body;
    try {
        const newTodo = await Todo.create({
            todo,
            isCompleted,
        });
    console.log(newTodo);
    res.json(newTodo);
    } catch (error) {
        res.status(500).json({error});
    }
});

module.exports = router;
