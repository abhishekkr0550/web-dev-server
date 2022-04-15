// import posts from "./tuits.js";
import tuitsDao from "../tuits/tuits-dao.js";
// let tuits = posts;

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.likes = 0;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    // newTuit._id = (new Date()).getTime()+'';

    // tuits.push(newTuit);
    console.log("Hello from node Controller");
    console.log(insertedTuit);
    res.json(insertedTuit);
}

const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits()

    res.json(tuits);
}
const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    // tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    res.send(status);

    // res.sendStatus(200);

}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    // tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    res.send(status);
    // tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    // res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
