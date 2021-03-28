const express = require('express');
const router = express.Router();
// connect models and controllers
let bandModel = require('../models/band')

// router.get('/top_secret_seed_route', async function(req,res) {
// 	try {
// 		await bandModel.create({
// 			name: 'Linkin Park',
// 			year: 2000
// 		})
// 		await bandModel.create({
// 			name: 'Radiohead',
// 			year: 1994
// 		})
// 		res.json({message: 'added examplename1 and examplename2 to DB'})
// 	} catch(error) {
// 		res.json({error: 'error seeding'})
// 	}
// })
router.get('/allBand', async function(req,res) {
	try {
		let bandList = await bandModel.find({})
		res.json(bandList)
	} catch (err) {
		res.json({error: err})
	}
})
module.exports = router;