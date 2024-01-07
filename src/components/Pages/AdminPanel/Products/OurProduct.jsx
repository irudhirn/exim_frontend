import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import axios from "axios";

import { DUMMY_PRODUCT_CATEGORIES as prodCategories } from "../../../../store/constants";

import classes from "./OurProduct.module.css";

const OurProduct = ({
  id,
  name,
  img,
  desc,
  page,
  category,
  price,
  moq,
  brand,
  packagingSize,
  weight,
  typeOfPackaging,
  packagingType,
  facewashType,
  fragrance,
  color,
  flavourBase,
  ingredient,
  isItAyurvedic,
  sulphateFree,
  sunProtection,
  oilFree,
  features,
  gender,
  ageGroup,
  skinType,
  form,
  usageApplication,
  shelfLife,
  countryOfOrigin,
  manufacturedBy,
  certificate,
  categories,
  updateProducts,
  deleteHandler
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState(name);
  const [prodCategory, setProdCategory] = useState(category);
  const [prodPrice, setProdPrice] = useState(price);
  const [prodMoq, setProdMoq] = useState(moq);
  const [prodBrand, setProdBrand] = useState(brand);
  const [prodPackagingSize, setProdPackagingSize] = useState(packagingSize);
  const [prodWeight, setProdWeight] = useState(weight);
  const [prodTypeOfPackaging, setProdTypeOfPackaging] =
    useState(typeOfPackaging);
  const [prodPackagingType, setProdPackagingType] = useState(packagingType);
  const [prodFacewashType, setProdFacewashType] = useState(facewashType);
  const [prodFragrance, setProdFragrance] = useState(fragrance);
  const [prodColor, setProdColor] = useState(color);
  const [prodFlavourBase, setProdFlavourBase] = useState(flavourBase);
  const [prodIngredient, setProdIngredient] = useState(ingredient);
  const [prodIsItAyurvedic, setProdIsItAyurvedic] = useState(isItAyurvedic);
  const [prodSulphateFree, setProdSulphateFree] = useState(sulphateFree);
  const [prodSunProtection, setProdSunProtection] = useState(sunProtection);
  const [prodOilFree, setProdOilFree] = useState(oilFree);
  const [prodFeatures, setProdFeatures] = useState(features);
  const [prodGender, setProdGender] = useState(gender);
  const [prodAgeGroup, setProdAgeGroup] = useState(ageGroup);
  const [prodSkinType, setProdSkinType] = useState(skinType);
  const [prodForm, setProdForm] = useState(form);
  const [prodUsageApplication, setProdUsageApplication] =
    useState(usageApplication);
  const [prodShelfLife, setProdShelfLife] = useState(shelfLife);
  const [prodCountryOfOrigin, setProdCountryOfOrigin] =
    useState(countryOfOrigin);
  const [prodManufacturedBy, setProdManufacturedBy] = useState(manufacturedBy);
  const [prodCertificate, setProdCertificate] = useState(certificate);
  const [description, setDescription] = useState(desc);
  const [file1, setFile1] = useState();
  const [addToHome, setAddToHome] = useState(false);
  const [topBest, setTopBest] = useState("top");
  // const [prodCategories, setProdCategories] = useState(categories);

  // const getAllCategories = () => {
  //   axios.get("http://localhost:5555/api/category/getAll").then((data) => {
  //     console.log(data?.data);
  //     // setProdCategories(data?.data);
  //   });
  // };

  // useEffect(() => {
  //   getAllCategories();
  // }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(title, file1, description);

    // prettier-ignore
    updateProducts({ id: id, name: title, img: file1, desc: description, category: category });

    setIsExpanded(false);
  };

  //   prettier-ignore
  return (
    <div className={classes.product}>
        <div className={classes.productHeader} onClick={() => setIsExpanded((prev) => !prev)}><span className={classes.productHeaderText}>{name}</span><span className={classes.plusIcon}><i className={`fa-solid ${!isExpanded ? 'fa-plus' : 'fa-minus'}`}></i></span></div>
        <form className={`${classes.form} ${!isExpanded ? classes.inactive : ''}`} onSubmit={submitHandler}>
            <label htmlFor="name" className={classes.label}><span className={classes.labelText}>Product name: *</span><input id="name" type='text' value={title} onChange={(e) => setTitle(e.target.value)} className={classes.inputField} required/></label>
            <label htmlFor="description" className={classes.label}><span className={classes.labelText}>Description: *</span><textarea name="job description" id="description" aria-label="job description" value={description} onChange={(e) => setDescription(e.target.value)} className={classes.textarea} required></textarea></label>
            <label htmlFor="price" className={classes.label}><span className={classes.labelText}>Price:</span><input id="price" type='text' value={prodPrice} onChange={(e) => setProdPrice(e.target.value)} className={classes.inputField}/></label>
            <label htmlFor="moq" className={classes.label}><span className={classes.labelText}>MOQ:</span><input id="moq" type='text' value={prodMoq} onChange={(e) => setProdMoq(e.target.value)} className={classes.inputField}/></label>
            <label htmlFor="brand" className={classes.label}><span className={classes.labelText}>Brand:</span><input id="brand" type='text' value={prodBrand} onChange={(e) => setProdBrand(e.target.value)} className={classes.inputField}/></label>
            <label htmlFor="packagingSize" className={classes.label}><span className={classes.labelText}>Packaging Size:</span><input id="packagingSize" type='text' value={prodPackagingSize} onChange={(e) => setProdPackagingSize(e.target.value)} className={classes.inputField}/></label>
            <label htmlFor="weight" className={classes.label}><span className={classes.labelText}>Weight:</span><input id="weight" type='text' value={prodWeight} onChange={(e) => setProdWeight(e.target.value)} className={classes.inputField}/></label>
            <label htmlFor="typeOfPackaging" className={classes.label}><span className={classes.labelText}>Type of Packaging:</span><input id="typeOfPackaging" type='text' value={prodTypeOfPackaging} onChange={(e) => setProdTypeOfPackaging(e.target.value)} className={classes.inputField}/></label>
            <label htmlFor="packagingType" className={classes.label}><span className={classes.labelText}>Packaging Type:</span><input id="packagingType" type='text' value={prodPackagingType} onChange={(e) => setProdPackagingType(e.target.value)} className={classes.inputField}/></label>
            <label htmlFor="facewashType" className={classes.label}><span className={classes.labelText}>Facewash Type:</span><input id="facewashType" type='text' value={prodFacewashType} onChange={(e) => setProdFacewashType(e.target.value)} className={classes.inputField}/></label>
            <label htmlFor="fragrance" className={classes.label}><span className={classes.labelText}>Fragrance:</span><input id="fragrance" type='text' value={prodFragrance} onChange={(e) => setProdFragrance(e.target.value)} className={classes.inputField}/></label>
            <label htmlFor="color" className={classes.label}><span className={classes.labelText}>Color:</span><input id="color" type='text' value={prodColor} onChange={(e) => setProdColor(e.target.value)} className={classes.inputField}/></label>
            <label htmlFor="flavourBase" className={classes.label}><span className={classes.labelText}>Flavour Base:</span><input id="flavourBase" type='text' value={prodFlavourBase} onChange={(e) => setProdFlavourBase(e.target.value)} className={classes.inputField}/></label>
            <label htmlFor="ingredient" className={classes.label}><span className={classes.labelText}>Ingredient:</span><input id="ingredient" type='text' value={prodIngredient} onChange={(e) => setProdIngredient(e.target.value)} className={classes.inputField}/></label>
            <label htmlFor="isItAyurvedic" className={classes.label}><span className={classes.labelText}>Is Ayurvedic?:</span><input id="isItAyurvedic" type='text' value={prodIsItAyurvedic} onChange={(e) => setProdIsItAyurvedic(e.target.value)} className={classes.inputField}/></label>
            <label htmlFor="sulphateFree" className={classes.label}><span className={classes.labelText}>Is Sulphate Free?:</span><input id="sulphateFree" type='text' value={prodSulphateFree} onChange={(e) => setProdSulphateFree(e.target.value)} className={classes.inputField}/></label>
            <label htmlFor="sunProtection" className={classes.label}><span className={classes.labelText}>Sun Protection:</span><input id="sunProtection" type='text' value={prodSunProtection} onChange={(e) => setProdSunProtection(e.target.value)} className={classes.inputField}/></label>
            <label htmlFor="oilFree" className={classes.label}><span className={classes.labelText}>Oil Free?:</span><input id="oilFree" type='text' value={prodOilFree} onChange={(e) => setProdOilFree(e.target.value)} className={classes.inputField}/></label>
            <label htmlFor="features" className={classes.label}><span className={classes.labelText}>Features:</span><input id="features" type='text' value={prodFeatures} onChange={(e) => setProdFeatures(e.target.value)} className={classes.inputField}/></label>
            <label htmlFor="gender" className={classes.label}><span className={classes.labelText}>Gender:</span><input id="gender" type='text' value={prodGender} onChange={(e) => setProdGender(e.target.value)} className={classes.inputField}/></label>
            <label htmlFor="ageGroup" className={classes.label}><span className={classes.labelText}>Age Group:</span><input id="ageGroup" type='text' value={prodAgeGroup} onChange={(e) => setProdAgeGroup(e.target.value)} className={classes.inputField}/></label>
            <label htmlFor="skinType" className={classes.label}><span className={classes.labelText}>Skin Type:</span><input id="skinType" type='text' value={prodSkinType} onChange={(e) => setProdSkinType(e.target.value)} className={classes.inputField}/></label>
            <label htmlFor="form" className={classes.label}><span className={classes.labelText}>Form:</span><input id="form" type='text' value={prodForm} onChange={(e) => setProdForm(e.target.value)} className={classes.inputField}/></label>
            <label htmlFor="usageApplication" className={classes.label}><span className={classes.labelText}>Usage Application:</span><input id="usageApplication" type='text' value={prodUsageApplication} onChange={(e) => setProdUsageApplication(e.target.value)} className={classes.inputField}/></label>
            <label htmlFor="shelfLife" className={classes.label}><span className={classes.labelText}>Shelf Life:</span><input id="shelfLife" type='text' value={prodShelfLife} onChange={(e) => setProdShelfLife(e.target.value)} className={classes.inputField}/></label>
            <label htmlFor="countryOfOrigin" className={classes.label}><span className={classes.labelText}>Country Of Origin:</span><input id="countryOfOrigin" type='text' value={prodCountryOfOrigin} onChange={(e) => setProdCountryOfOrigin(e.target.value)} className={classes.inputField}/></label>
            <label htmlFor="manufacturedBy" className={classes.label}><span className={classes.labelText}>Manufactured By:</span><input id="manufacturedBy" type='text' value={prodManufacturedBy} onChange={(e) => setProdManufacturedBy(e.target.value)} className={classes.inputField}/></label>
            <label htmlFor="certificate" className={classes.label}><span className={classes.labelText}>Certificate:</span><input id="certificate" type='text' value={prodCertificate} onChange={(e) => setProdCertificate(e.target.value)} className={classes.inputField}/></label>                    
            <label htmlFor="category" className={classes.label}><span className={classes.labelText}>Category: *</span>
                <select name="category" id="category" value={prodCategory} onChange={(e) => setProdCategory(e.target.value)} className={classes.dropdownField} required>
                    <option value="">Select</option>
                    {categories.map((el) => {
                      const {id, category} = el;

                      return (
                          <option key={id} value={`${category.toString().toLowerCase().split(" ").join("-").replace("'", "")}`}>{category}</option>
                      )
                    })}
                </select>
            </label>
            <label htmlFor="img1" className={classes.label}><span className={classes.labelText}>Upload Image</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img1" value={file1} onChange={(e) => setFile1(e.target.value)} required placeholder=".jpg,.png,.webp " /></label>
            <label htmlFor="cat" className={classes.label}><span className={classes.labelText}>Add to Homepage:</span><input id="cat" type='checkbox' onChange={(e) => setAddToHome(e.target.checked)} className={classes.inputField}/></label>                    
            {addToHome && <label htmlFor="top" className={classes.label}><span className={classes.labelText}>Add to Top:</span><input id="top" type='radio' value="top" name="topBest" onChange={(e) => setTopBest(e.target.value)} className={classes.inputField}/></label>}
            {addToHome && <label htmlFor="best" className={classes.label}><span className={classes.labelText}>Add to Best:</span><input id="best" type='radio' value="best" name="topBest" onChange={(e) => setTopBest(e.target.value)} className={classes.inputField}/></label>}
            <div className={classes.btns}>
              <button className={classes.btn} type="submit">Submit</button>
              <button className={classes.btn} onClick={() => deleteHandler(id)} type="button">Delete Product</button>
            </div>
        </form>
    </div>
  )
};

export default OurProduct;
