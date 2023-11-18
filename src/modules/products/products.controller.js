import slugify from "slugify";
import categoryModel from "../../../DB/model/category.model.js";
import cloudinary from "../../services/cloudinary.js";
import productModel from "../../../DB/model/product.model.js";

export const getProducts=(req,res)=>{
    return res.json({message:"products"});
}
export const createProduct=async(req,res)=>{
    const {name,price,discount,categoryId,subcategoryId}=req.body
    const checkCategory=await categoryModel.findById(categoryId);
    if(!checkCategory){
        return res.status(404).json({message:" category not found"});
    } 
    req.body.slug=slugify(name);
    req.body.finalPrice=price*(price*(discount || 0) / 100);
    const {secure_url,public_id}=await cloudinary.uploader.upload(req.files.mainImage[0].path,
        {folser:`${process.env.APP_NAME}/product/${req.body.name}/mainImages`});
        req.body.mainImage={secure_url,public_id}
        req.body.subImages=[];
        for(const file of req.files.subImages){
            const {secure_url,public_id}=await cloudinary.uploader.upload(file.path,
                {folder:`${process.env.APP_NAME}/product/${req.body.name}/subImages`});
                req.body.subImages.push({secure_url,public_id});
        }
        req.body.createdBy=req.user._id;
        req.body.updatedBy=req.user._id;
        const product=await productModel.create(req.body);
        if(!product){
            return res.status(400).json({message:"errr while creating product"});
        }
        return res.status(201).json({message:"success",product});
}