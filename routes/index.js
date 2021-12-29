const ProductController = require("../controllers/product");

module.exports = (server) => {
    //AFFICHER LES PRODUITS
    server.get("/products", (req, res) => {
        ProductController.getAll(req, res);
    });
    server.get("/products/:_id", (req, res) => {
        ProductController.getId(req, res);
    });
    server.put("/products/:_id", async (req, res) => {
        ProductController.update(req, res);
    });
    server.delete("/products/:_id", (req, res) => {
        ProductController.delete(req, res);
    });
    server.post("/products", async (req, res) => {
        ProductController.create(req, res);
    });
    
}