const {Router, response} = require('express');
const bcryptjs = require('bcryptjs');

const Guatemala = require('../models/guatemala');
const Costarica = require('../models/costarica');
const guatemala = require('../models/guatemala');
const costarica = require('../models/costarica');

const GuatemalaGet = async(req = request, res = response) => {

    const [ total, nombreProyecto ] = await Promise.all([
        guatemala.countDocuments(query),
        guatemala.find(query)
    ]);

    res.json({
        total,
        nombreProyecto
    });
}

const GuatemalaPost = async(req, res = response) => {
    
    const { nombreProyecto, monto, fecha, NomEstudiante } = req.body
    const guatemala = new Guatemala({ nombreProyecto, monto, fecha, NomEstudiante });


    // Guardar en BD
    await guatemala.save()

    res.json({
        msg:'post API -- guatemalaPost',
        guatemala
    })
}

const GuatemalaPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, monto, fecha, NomEstudiante, ...resto } = req.body;


    const guatemala = await Guatemala.findByIdAndUpdate( id, resto );

    res.json(guatemala);
}

const GuatemalaPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - GuatemalaPatch'
    });
}

const GuatemalaDelete = async(req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
    // const usuario = await Usuario.findByIdAndDelete( id );

    const guatemala = await Guatemala.findByIdAndUpdate( id );
    res.json(guatemala);
}


const CostaricaGet = async(req = request, res = response) => {

    const [ total, nombreProyecto ] = await Promise.all([
        costarica.countDocuments(query),
        costarica.find(query)
            
    ]);

    res.json({
        total,
        nombreProyecto
    });
}

const CostaricaPost = async(req, res = response) => {
    
    const { nombreProyecto, paisqueejecuta, fechacierre, NomEstudiante } = req.body;
    const costarica = new Costarica({ nombreProyecto, paisqueejecuta, fechacierre, NomEstudiante });


    // Guardar en BD
    await costarica.save();

    res.json({
       costarica
    });
}

const CostaricaPut = async(req, res = response) => {

    const { id } = req.params;
    const { _id, paisqueejecuta, NomEstudiante, ...resto } = req.body;


    const costarica = await nombreProyecto.findByIdAndUpdate( id, resto );

    res.json(costarica);
}

const CostaricaPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - CostaRicaPatch'
    });
}

const CostaricaDelete = async(req, res = response) => {

    const { id } = req.params;

    // Fisicamente lo borramos
    // const usuario = await Usuario.findByIdAndDelete( id );

    const costarica = await Costarica.findByIdAndUpdate( id );


    res.json(costarica);
}



module.exports = {
    GuatemalaGet,
    GuatemalaPost,
    GuatemalaPut,
    GuatemalaPatch,
    GuatemalaDelete,
    CostaricaGet,
    CostaricaPost,
    CostaricaPut,
    CostaricaPatch,
    CostaricaDelete
}