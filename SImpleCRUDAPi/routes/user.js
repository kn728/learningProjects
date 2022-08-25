import express from 'express'
import {getUsers, createUser, getUser, deleteUser, updateUser} from '../controllers/userController.js'

const router = express.Router()

router.get('/users', getUsers )

router.post('/users', createUser )

router.get('/users/:id', getUser )

router.delete('/users/:id', deleteUser )

router.put('/users/:id', updateUser)

export default router