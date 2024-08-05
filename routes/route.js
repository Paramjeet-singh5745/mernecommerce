const express=require("express");
const router=express.Router();
const authtoken = require("../middleware/auth");
const UserSignup = require("../controller/user/Usersignup");
const usersignin = require("../controller/user/Usersignin");
const userdetailcontroller = require("../controller/user/Userdetail");
const Alluser = require("../controller/user/Alluser");
const Userlogout = require("../controller/user/Userlogout");
const updateuser = require("../controller/user/userupdaterole");
const UploadProductController = require("../controller/product/UploadProductfile");
const getproductcontroller = require("../controller/product/Getproductfile");
const updateproductdetail = require("../controller/product/Updateproduct");
const getcategoryproduct = require("../controller/product/CategoryProduct");
const getproductwishitem = require("../controller/product/Getwishproduct");
const getproductdetails = require("../controller/product/GetproductDetails");
const addtocartcontroller = require("../controller/user/AddtocartController");
const countaddtocart = require("../controller/user/Coutaddtocart");
const addtocartviewproduct = require("../controller/user/Addtocartviewproduct");
const updateaddtocartproduct = require("../controller/user/Upadateaddtocartproduct");
const deleteaddtocart = require("../controller/user/Deleteaddtocart");
const searchproduct = require("../controller/product/Searchproduct");
const filterproduct = require("../controller/product/Filterproduct");
router.post("/signup",UserSignup)
router.post("/signin",usersignin)
router.get("/user-detail",authtoken,userdetailcontroller)
router.get("/userlogout",Userlogout)
router.get("/all-users",authtoken,Alluser)
router.post("/updateuser",authtoken,updateuser)
router.post("/uploadproduct",authtoken,UploadProductController)
router.get("/getallprdouct",getproductcontroller)
router.post("/updateproductdetails",authtoken,updateproductdetail)
router.get("/getproductcategory",getcategoryproduct)
router.post('/category-product',getproductwishitem)
router.post('/product-details',getproductdetails)
router.post('/addtocart',authtoken,addtocartcontroller)
router.get("/countaddtocart",authtoken,countaddtocart)
router.get("/add-cart-product",authtoken,addtocartviewproduct)
router.post("/updateaddtocartproduct",authtoken,updateaddtocartproduct)
router.post("/deleteaddtocart",authtoken,deleteaddtocart)
router.get("/searchproduct",searchproduct)
router.post("/filterproduct",filterproduct)
module.exports=router
