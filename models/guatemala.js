const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GuatemalaSchema = Schema({
    nombreProyecto: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    monto: {
        type: Number,
        required: [true, 'El monto es obligatorio']
    },
    fecha: {
        type: String,
        required: [true, 'Fecha actual']
    },
    NomEstudiante: {
        type: String,
        required: true,
        emun: ['Roxana Stephany Abrego Mendoza', '17-5650-2016']
    }
});

GuatemalaSchema.methods.toJSON = function() {
    
    return Guatemala;
}

module.exports = mongoose.model('Guatemala', GuatemalaSchema);