const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CostaRicaSchema = Schema({
    nombreProyecto: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    paisqueejecuta: {
        type: String,
        required: [true, 'El monto es obligatorio']
    },
    fechacierre: {
        type: String,
        required: [true, 'Fecha actual']
    },
    NomEstudiante: {
        type: String,
        required: true,
        emun: ['Roxana Stephany Abrego Mendoza', '17-5650-2016']
    }
});

CostaRicaSchema.methods.toJSON = function() {
    
    return Costarica;
}

module.exports = mongoose.model( 'Costarica', CostaRicaSchema );