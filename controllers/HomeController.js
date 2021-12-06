class HomeController{

    async index(req, res){
        res.send("Teste de rota inicial");
    }

}

module.exports = new HomeController();