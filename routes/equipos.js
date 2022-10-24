const { Router } = require('express');
const { check } = require('express-validator');

const { GuatemalaGet,
    GuatemalaPost,
    GuatemalaPut,
    GuatemalaPatch,
    GuatemalaDelete,
    CostaricaGet,
    CostaricaPost,
    CostaricaPut,
    CostaricaPatch,
    CostaricaDelete } = require('../controllers/equipos');

const router = Router();


router.get('/', GuatemalaGet );


router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId()],GuatemalaPut );

router.post('/',[
    check('nombreProyecto', 'El nombre es obligatorio').not().isEmpty(),
    check('monto', 'El password debe de ser más de 6 letras').not().isEmpty(),
    check('fecha', 'El correo no es válido').not().isEmpty(),
    // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
], GuatemalaPost );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
],GuatemalaDelete );

router.patch('/', GuatemalaPatch );


//CostaRica
router.get('/', CostaricaGet );


router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
],CostaricaPut );

router.post('/',[
    check('nombreProyecto', 'El nombre es obligatorio').not().isEmpty(),
    check('monto', 'El password debe de ser más de 6 letras').not().isEmpty(),
    check('fecha', 'El correo no es válido').not().isEmpty(),
    // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),

], CostaricaPost );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId()
],CostaricaDelete );

router.patch('/', CostaricaPatch );


module.exports = router;