import express from 'express'
import { getCharacter, createCharacter} from '../controllers/charController.js'
import { RegisterUser, login } from '../controllers/userController.js';
import { launchCampaign, getDungeonMasterInfo, getCampaign, addPlayer } from '../controllers/campaignController.js';

const router = express.Router()


router.get('/character', getCharacter)
router.post('/character', createCharacter)
router.post('/user', RegisterUser)
router.get('/user', login)
router.post('/launchCampaign', launchCampaign)
router.get('/getDm', getDungeonMasterInfo)
router.get('/campaign', getCampaign)
router.post('/addPlayer', addPlayer)
export default router;