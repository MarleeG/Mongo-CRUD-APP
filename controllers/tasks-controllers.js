const db = require("../models/task");

const findAll = async (req, res, next) => {
  let tasks;

  try {
    tasks = await db.find({});
  } catch (err) {
    return next(err);
  }

  res.json({
    tasks: tasks.map((task) => task.toObject({ getters: false })),
  });
};

const createTask = async (req, res, next)=> {
    let task;

    try{
        task = await db.create(req.body);
    }catch(err){
        return next(err);
    }

    res.status(201).json({
        task: task.toObject({getters: false})
    })
}

const deleteTask = async (req, res, next) => {
  let taskId = req.params.id;

  // let task = 

  try{
    await db.findOneAndDelete({_id: taskId});
  }catch(err){
    return next(err);
  }

  res.status(200).json({
    message: "Task Deleted",
  });
}

const updateTask = async (req, res, next)=> {
  let taskId = req.params.id;
  const filter = {_id: taskId};
  const update = {fulfilled: true};

  let task;

  try{
    task = await db.findOneAndUpdate(filter, update);
  }catch(err){
    return next(err);
  }

  res.status(200).json({task: task.toObject({getters: false})})
}

exports.findAll = findAll;
exports.createTask = createTask;
exports.deleteTask = deleteTask;
exports.updateTask = updateTask;