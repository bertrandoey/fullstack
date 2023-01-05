import express from "express";
import { createUser, deleteUser, getUsers, getUsersByID, updateUser } from "../controllers/userController.js";

const router = express.Router();
 
router.get('/users', getUsers);
router.get('/users/:id', getUsersByID);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;