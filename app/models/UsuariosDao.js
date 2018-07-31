function UsuariosDAO(connection) {
    this._connection = connection;
}
UsuariosDAO.prototype.inserirUsuario = function(usuario, res) {
    let dados = {
        operacao: 'inserir',
        usuario: usuario,
        collection: 'usuarios',
        callback: function(err, result) {
        }
    };
    this._connection(dados);
};

module.exports = function() {
    return UsuariosDAO;
};