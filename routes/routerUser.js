'use strict'

const express = require('express')
const router = express.Router()

const viewsController = require('../controllers/viewsController')
const usersCrudController = require('../controllers/usersCrudController')

// Vistas =========================================================
router.get('/', (req, res) => {
    res.render('index')
})

// router.get('/ofertas', viewsController.getIndex)
// router.get('/demandas', viewsController.getIndex)
// router.get('/noticias', viewsController.getIndex)

router.get('/accounts/signin', viewsController.getViewSingin)
router.get('/accounts/signup', viewsController.getViewSingup)

// Sesiones ========================================================
router.get('/accounts/login', usersCrudController.getNewSession)
router.get('/accounts/logout', usersCrudController.getDestroySession)

// CRUD Users =======================================================
router.post('/accounts/local/user', usersCrudController.setNewUser)


// Temporales =======================================================
router.get('/accounts/users', usersCrudController.getAllUsers)


// Exportacion de las rutas
module.exports = router
