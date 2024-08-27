import { Products } from "../models/Products.models.js";

export const getProducts=async(req,res)=>{

    try {
        const productsList=await Products.findAll()
        res.json(productsList);
    } catch (error) {
        return res.status(500).json({message:error.message})
    }

}

export const postProducts=async(req,res)=>{
    const {titulo,contenido,precio} =req.body

    try {
        const newProduct=await Products.create({
            titulo,
            contenido,
            precio
        })
        res.send(newProduct);

    } catch (error) {
        return res.status(500).json({message:error.message})
    }



}

export const deleteProducts=async(req,res)=>{

    try {
        const {id}=req.params;
        await Products.destroy({
            where:{
                id,
            },
        });
        res.sendStatus(204)
        
    } catch (error) {
        return res.status(500).json({message:error.message})
    }


}

export const editarProducts=async (req,res) => {

    const {id}=req.params;
    const {titulo,contenido,precio}=req.body

    try {

        const productsEditar = await Products.findByPk(id)
        productsEditar.titulo=titulo
        productsEditar.contenido=contenido
        productsEditar.precio=precio
        await productsEditar.save();

        res.json(productsEditar);
        
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const getProductOne=async(req,res)=>{
    
    const {id}=req.params
    try {

        const product=await Products.findOne({
            where:{
                id,
            }
        })

        if (!product) return res.status(404).json({message:"no existe producto"});

        res.json(product)

    } catch (error) {
        return res.status(500).json({message:error.message})
    }


}