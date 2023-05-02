const { checkSchema } = require('express-validator'); //205.9k (gzipped: 64k)


// verificando se está vazio
module.exports = {
    editAction: checkSchema({
        token: {
            notEmpty: true
        },
        name: {
            optional: true,
            trim: true,
            isLength: {
                options: { min: 2 }
            },
            errorMessage: 'Nome precisa ter pelo menos 2 caracteres'
        },
        email: {
            optional: true,
            isEmail: true,
            normalizeEmail: true,
            errorMessage: 'e-mail inválido'
        },
        password: {
            optional: true,
            isLength: {
                optional: { min: 2 }
            },
            errorMessage: 'Senha precisa ter pelo menos 2 caracteres'
        },
        state: {
            optional: true,
            notEmpty: true,
            errorMessage: 'Estado não preenchido'
        }
    })
}