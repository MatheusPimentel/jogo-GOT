module.exports.index = function (application, req, res) {
    res.render('index', {validacao: []});
};

module.exports.autenticar = function (application, req, res) {

    let dadosForm = req.body;

    req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
    req.assert('senha', 'Senha não pode ser vazio').notEmpty();

    let erros = req.validationErrors();

    if (erros) {
        res.render('index', {validacao: erros});
        return;
    }

    let connection = application.config.dbConnection;
    let UsuariosDao = new application.app.models.UsuariosDao(connection);
    UsuariosDao.autenticar();

    res.send('tudo ok para criar a sessão')
};