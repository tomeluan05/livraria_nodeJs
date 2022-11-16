const livro_db = require('../models/livros-model')

// Definindo a funcionalidade da rota de listar os livros
exports.listar_livros = (req, res)=>{
    livro_db.find({}, (err, livro)=>{
        if(err){
            return res.status(500).send('Erro ao consultar o livro')
        }

        //livros_itens(objeto) recebe cada item da consulta && livro é cada item da consulta
        res.render('views/pages/livros', { resultado: livro })
    })
}

exports.cadastrar_livros_get = (req, res)=>{
    res.render("views/pages/formLivros");
};

exports.cadastrar_livros_post = (req, res)=>{
    let salva_livro = new livro_db();
    salva_livro.nome = req.body.nome;
    salva_livro.valorUnitario = req.body.valorUnitario;
    salva_livro.codigoBarra = req.body.codigoBarra;
    salva_livro.save((err)=>{
        if(err){
            return res.status(500).send('Erro ao cadastrar livro.')
        }
        return res.redirect('/livros')
    })
}

exports.editar_livro_get = (req, res)=>{
    var id = req.params.id;
    livro_db.findById(id, (err, livro)=>{
        if(err){
            return res.status(500).send("Erro ao editar");
        };
        res.render("views/pages/formEditarLivro", {resultado: livro});
    });
};

exports.editar_livro_post = (req, res) =>{
    var id = req.body.id;
    livro_db.findById(id, (err, livro)=>{
        if(err){
            return res.status(500).send("Erro ao editar Livro");
        }
            livro.nome = req.body.nome
            livro.valorUnitario = req.body.valorUnitario
            livro.codigoBarra = req.body.codigoBarra

        livro.save(err =>{
            if(err){
                return res.status(500).send("Erro ao salvar Ediçao");
            }
            return res.redirect("/livros")
        });
    });
};

exports.deletar_livro = (req, res) =>{
    var id = req.params.id;

    livro_db.deleteOne({_id:id}, (err)=>{
        if(err){
            return res.status(500).send("Erro ao deletar livro");
        };
        res.redirect("/livros");
    });
};