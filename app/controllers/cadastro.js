module.exports.cadastro = function (application, req, res) {
    res.render('cadastro', {validacao: {}});
};

module.exports.cadastrar = function (application, req, res) {
    let dadosForm = req.body;

    req.assert('nome', 'Nome não pode ser vazio').notEmpty();
    req.assert('usuario', 'Usuário não pode ser vazio').notEmpty();
    req.assert('senha', 'Senha não pode ser vazio').notEmpty();
    req.assert('casa', 'Casa não pode ser vazio').notEmpty();

    let erros = req.validationErrors();

    if (erros) {
        res.render('cadastro', {validacao: erros});
        return;
    }
    let connection = application.config.dbConnection;
    let UsuariosDao = new application.app.models.UsuariosDao(connection);
    UsuariosDao.inserirUsuario(dadosForm);
    res.send('Podemos cadastrar')
};