const db = require("../models/task");

const findAll = async (req, res, next) => {
  console.log("req:: ", req);
  let tasks;

  try {
    tasks = await db.find({});
  } catch (err) {
    return next(err);
  }

  console.log(tasks);

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

exports.findAll = findAll;
exports.createTask = createTask;