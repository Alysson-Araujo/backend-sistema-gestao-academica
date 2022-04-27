
import {IDisciplina} from '@interfaces/IDisciplina'
import db from '@database/index'
const disciplinaSchema = new db.Schema<IDisciplina>({
    nomeDisciplina:{
        type:String,
        required:true
    },
    codigoDisciplina:{
        type:Number,
        required:true
    },
    preRequisitos:[{
        codigoDisciplina:{
            type:Number,
            required:true
        }   
    }],
    quantidadeHoras:{
        type:Number,
        required:true
    }
})

export const Disciplina = db.model('Disciplina',disciplinaSchema);