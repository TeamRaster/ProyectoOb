'use strict'

const models = require('../models')

module.exports = {

// Vistas disponibles para todos =======================================================================================
    getViewIndex: (req, res) => {
        return res.render('index')
    },
    getViewSingin: (req, res) => {
        let error_message = req.flash('error')[0]
        res.locals.error_message = error_message
        return res.render('signin', {error: error_message})
    },
    getViewSingup: (req, res) => {
        return res.render('signup')
    },



// Solo para Usuarios plus =============================================================================================
    getViewIndexP:  (req, res) => {
        res.send('Pagina del usuario con inicio de sesion')
    },

    // Formulario para nuevas ofertas, y para editar
    getViewOfferNew: (req, res) => {
        return res.render('viewsUserPlus/offers/new')
    },
    getViewOfferEdit: (req, res) => {
        models.modelOffer.findById(req.params.id,  (err, StoredOffer) => {
            if(err) {
                console.log('=========================================================')
                console.log('[viewsController/getViewOfferEdit]: Error al hacer la busqueda')
                console.log('=========================================================')
                res.redirect('/app/offers')
            }

            return res.render('viewsUserPlus/offers/update', {offer: StoredOffer})
        })
    },

    // Formulario para el chat
    getViewRoom: (req, res) => {
        return res.render('viewsUserPlus/rooms/index')
    },

    // Formulario para nuevas demandas, y para editar
    getViewDemandNew: (req, res) => {
        return res.render('viewsUserPlus/demands/new')
    },

    getViewDemandEdit: (req, res) => {
        models.modelDemand.findById(req.params.id,  (err, StoredDemand) => {
            if(err) {
                console.log('=========================================================')
                console.log('[viewsController/getViewDemandEdit]: Error al hacer la busqueda')
                console.log('=========================================================')
                res.redirect('/app/demands')
            }

            return res.render('viewsUserPlus/demands/update', {demand: StoredDemand})
        })
    },

    // Formulario para editar usuarios
    getViewUserNew: (req, res) => {
        return res.render('viewsAdministrator/users/new')
    },
    getViewUserEdit: (req, res) => {
        models.modelUsers.findById(req.params.id,  (err, storedUser) => {
            if(err) {
                console.log('=========================================================')
                console.log('[viewsController/getViewUserEdit]: Error al hacer la busqueda')
                console.log('=========================================================')
                res.redirect('/app/users')
            }

            return res.render('viewsUserPlus/users/update', {user: storedUser})
        })
    },
    // Esto es solo para realizar pruebas
    getViewRoomIndex: (req, res) => {
        return res.send('getViewRoomIndex')
    },


// Solo para los Administradores =======================================================================================
    getViewIndexA: (req, res) => {
        res.send('Pagina principal del administrador')
    },

    // Formulario para nuevas fuentes de informacion, y para editar
    getViewSourceNew: (req, res) => {
        return res.render('viewsAdministrator/sources/new')
    },

    getViewSourceEdit: (req, res) => {
        models.modelSource.findById(req.params.id, (err, storedSource) => {
            if (err) {
                console.log('=========================================================')
                console.log('[viewsController/getVieSourceEdit]: Error al hacer la busqueda')
                console.log('=========================================================')
                res.redirect('/app/administrator/sources')
            }
            return res.render('viewsAdministrator/sources/update', {source: storedSource})
        })
    },


    // // Formulario para administrar archivos, y para editar por id
    // getViewFileAdmin: (req, res) => {
    //     res.send('Tu puedes ver los archivos publicados')
    // },
    //
    // getViewFileEditAdmin: (req, res) => {
    //     res.send('Tu puedes eliminar archivos, aunque esten dentro de un grupo')
    // },
    //
    //
    // // Formulario para administrar commentarios, y para editar por id
    // getViewCommentId: (req, res) => {
    //     res.send('Tu puedes ver todos los comentarios por cada noticia')
    // },
    //
    // getViewStatsId: (req, res) => {
    //     res.send('Tu puedes ver todos los stats(likes, dislikes) por cada noticia')
    // },

}
