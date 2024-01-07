import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import axios from "axios";

// import { DUMMY_PRODUCT_CATEGORIES as categories } from "../../../../store/constants";
import { ALL_PRODUCTS_2 } from "../../../../store/constants";

import OurProduct from "./OurProduct";

import classes from "./AdminProducts.module.css";

// prettier-ignore
export const DUMMY_PRODS = [
  {id: 'a1', name: "Tobacco Free Bidi", desc: "The Royal Swag Herbal Cigarette and Herbal Bidi is an innovative tobacco-free cigarette based on research for nicotine replacement therapy (NRT) ROYAL SWAG CONTENTS. Royal Swag is a 100% tobacco-free, nicotine-free Ayurvedic Bidi with a blend of various Ayurvedic medicinal herbs.  ROYAL SWAG Herbal Bidi is formulated on the basis of the concept of «Charaka Samhita» Charaka Samhita book of Ayurveda, which is 5000 years old a former Indian systems of medicine. Healthy Smoke For Everyone.   Royal Swag is a tobacco substitute for cigarettes that assists you in quitting smoking.  Royal Swag Cigarette is a 100% natural herb Bidi.  Royal swag Cigarette Is Helpful In Common Cold & Cough. World pungent herbal formulation blend In herbal Cigarette. Feel Cool Smoke Touch.", img: "Tobacco Free Bidi.webp", page: "", details: "", category: "ayurvedic-dhoompan", pageNo: 1},
  {id: 'a2', name: "Ayurvedic Smoking Sticks", desc: "Tobacco & Nicotine Free Ayurvedic cigarette, with the composition from tulsi, green tea, cloves, etc. Use as the best alternative of tobacco-based cigarettes. Those would like to quit tobacco smoking Also, use as health remedies for cold and cough. Beginner smokers and Occasional smoker.Health-conscious peoples - Those who would like to quit the tobacco and smoking Peoples who love Clove based flavored Women who health-conscious – All smokers, who love their family and spend the rest of their life with happiness and healthiness", img: "Ayurvedic Smoking Sticks.webp", page: "", details: "", category: "ayurvedic-dhoompan", pageNo: 1},
  {id: 'a4', name: "Swosh Lip Scrub", desc: "Enriched with luxurious shea butter and smoothing grapeseed essential oil, Organic Nicolip lip scrub is a perfect option to gently exfoliate and give you velvety soft lips. Shop now and give your lips that much need plumpness back.", img: "Swosh Lip Scrub.webp", page: "", details: "", category: "skin-care-products", pageNo: 2},
  {id: 'a7', name: "Swosh Beard Oil", desc: "SWOSH beard growth oil nourishes your beard hair from deep rooted within to prevent damage of beard and promote beard hair growth, this efficient formulations blend has essential elements like Sesame oil, Vitamin E, Castor Oil, Herbal Oil, BHT etc. Which restores your beard hair healthy and beautiful. It is a perfect blend of natural ingredients that you would complement all the beard care needs, makes your beard smooth, shiny, healthy and smells like paradise. Like our scalp, the skin on the chin underneath the beard becomes prone to dryness. Beard oil for men adds the nutrients the skin needs to prevent it from drying out. Our Swosh all-nature beard oil is designed for all types of beards - long, short, red, white, black and brown.", img: "Swosh Beard Oil.webp", page: "", details: "", category: "hair-care-products", pageNo: 3},
  {id: 'a8', name: "Heat Protection Hair Spray", desc: "Hair styling has become a part of nearly every day of our daily routine, and styling hair always involves heating tools. Heating tools as the name suggest always involve heat when styling the hair. Applying heat to the hair directly damages the hair and makes it brittle and lifeless. This is where heat protector comes into the picture, heat protector protects the hair from styling damages and keeps them full of life with a shine. White Leaf Heat Protector is made with carefully picked ingredients that protect your hair from heating tools and also make them shiny and lustrous.", img: "Heat Protection Hair Spray.webp", page: "", details: "", category: "hair-care-products", pageNo: 3},
  {id: 'a10', name: "Herbal Anti Aging Creams", desc: "Swosh Anti Wrinkles, Anti Ageing Facial Cream 50 Gram For Youthful Skin Gently Removes Dark Spots And Fine Lines And Hyper Pigmentation For Men And Women. An Anti Ageing, Natural Tone Booster, Skin Brightening Day Night Cream For Complete Face Care. This Perfect Radiance Day Cream Leaves Skin Feeling Perfectly Hydrated And Fresh Throughout The Day It Rejuvenates The Skin With Youthful Firmness And Birght And Moisturizing Look. It Is A Gentle & Mild Face Cream For Skin Brightening And Lightening. It Works As A Natural Face Moisturizer Which Deeply Provides Nourishment And Hydration To The Skin For Radiance And Glow. The Natural Essential Oils Like Jojoba Oil And Argan Oil Rich In Vitamin E Lightly Moisturize Your Skin, Soften Dry Patches, Reduces Acne, Scars, Dark Spots And Blemishes.", img: "Herbal Anti Aging Creams.webp", page: "", details: "", category: "personal-care-products", pageNo: 4},
  {id: 'a13', name: "Black Cigarette Tube", desc: "Black Cigarette Tubes, X-Long Filter 24mm, Tube Length 84mm, Diameter 8.1mm, Each Box Contains 200 pcs.", img: "Black Cigarette Tube.webp", page: "", details: "", category: "empty-cigarette-tube", pageNo: 5},
  {id: 'a14', name: "Cigrate Paper Tube", desc: "Premium Black Cigarette Tubes, X-Long Filter 24mm, Tube Length 84mm, Diameter 8.1mm, Each Box Contains 200 pcs.", img: "Cigrate Paper Tube.webp", page: "", details: "", category: "empty-cigarette-tube", pageNo: 5},
  {id: 'a16', name: "Wooden Smoking Steel Pipe", desc: "Handcrafted from natural wood, with excellent craftsmanship and materials, top quality. Our pipe filters made of brass material, which can prevent hot ash and embers from entering the pipe and make the pipe easier to clean. TOBACCO PIPE SIZE: Length: about 5.3 in / 13.5 cm . Bowl Height: about 1.18 in /3 cm. Bowl Width: about 1.8 in / 3 cm. Weight:0.08 lb / 40g.", img: "Wooden Smoking Steel Pipe.webp", page: "", details: "", category: "wooden-smoking-pipes", pageNo: 6},
  {id: 'a19', name: "Cosmetic Third Party Manufacturing", desc: "We are manufacture cosmetic care products as per your requirements according with your brand name.We also offer customize packings for all kinds of Cosmetic Products.", img: "Cosmetic Third Party Manufacturing.webp", page: "", details: "", category: "cosmetic-products-third-party-manufacturer", pageNo: 7},
  {id: 'a20', name: "Herbal Products Third Party Manufacturing", desc: "We are manufacture cosmetic care products as per your requirements according with your brand name.We also offer customize packings for all kinds of Cosmetic Products.", img: "Herbal Products Third Party Manufacturing.webp", page: "", details: "", category: "cosmetic-products-third-party-manufacturer", pageNo: 7},
  {id: 'a22', name: "Imc Herbal Gomutra", desc: "Treats diseases with Vata predominance. Heals various skin disorders. Also useful in treating oedema, chronic obstructive jaundice, piles, ano-rectal and abdominal diseases.", img: "Imc Herbal Gomutra.webp", page: "", details: "", category: "cow-urine", pageNo: 8},
  {id: 'a25', name: "Royal Swag Ayurvedic", desc: "Tobacco & Nicotine Free Ayurvedic cigarette, with the composition from tulsi, green tea, cloves, etc. Use as the best alternative of tobacco-based cigarettes. Those would like to quit tobacco smoking Also, use as health remedies for cold and cough. Beginner smokers and Occasional smoker.Health-conscious peoples - Those who would like to quit the tobacco and smoking Peoples who love Clove based flavored Women who health-conscious – All smokers, who love their family and spend the rest of their life with happiness and healthiness", img: "Royal Swag Ayurvedic.webp", page: "", details: "", category: "ayurvedic-smoking-stick", pageNo: 9},
  {id: 'a26', name: "Royal Swag Ayurvedic Cigarette", desc: "Tobacco & Nicotine Free Ayurvedic cigarette, with the composition from tulsi, green tea, cloves, etc. Use as the best alternative of tobacco-based cigarettes. Those would like to quit tobacco smoking Also, use as health remedies for cold and cough. Beginner smokers and Occasional smoker.Health-conscious peoples - Those who would like to quit the tobacco and smoking Peoples who love Clove based flavored Women who health-conscious – All smokers, who love their family and spend the rest of their life with happiness and healthiness", img: "Royal Swag Ayurvedic Cigarette.webp", page: "", details: "", category: "ayurvedic-smoking-stick", pageNo: 9},
  {id: 'a28', name: "Pre Rolled Paper Cones", desc: "Royal Swag pre rolled cones is 110 mm long with 1 Inch filter, packed beautifully within jar positioned in such order to reduce damage of clones. Includes Fiber Doob Tube Reusable easy to carry your roll safe pocket friendly, Providing you with high-quality, unrefined papers, Less harmful due to their natural fibres. Enjoy your pre rolled smoking mixture each and every time. The cone shape facilitates a smooth, even burn, letting you to enjoy your smoke from the first inhale to the last.", img: "Pre Rolled Paper Cones.webp", page: "", details: "", category: "pre-rolled-cones", pageNo: 10},
  {id: 'a31', name: "Herbal Raw Mixture Bottle", desc: "Quit smoking with power of Ayurveda: In the emotional aspect of giving up smoking, An herb-based cigarette or Herbal blend plays an essential role allows you to continue smoking while the body clears out the addictive substance. Tobacco Free, Nicotine Free, Chemicals Free, Addition Free. Get over the nicotine addiction with style, good taste and all natural herbs", img: "Herbal Raw Mixture Bottle.webp", page: "", details: "", category: "herbal-mixture", pageNo: 11},
  {id: 'a32', name: "Royal Swag Herbal Raw Mixture", desc: "Quit smoking with power of Ayurveda: In the emotional aspect of giving up smoking, An herb-based cigarette or Herbal blend plays an essential role allows you to continue smoking while the body clears out the addictive substance. Tobacco Free, Nicotine Free, Chemicals Free, Addition Free. Get over the nicotine addiction with style, good taste and all natural herbs.", img: "Royal Swag Herbal Raw Mixture.webp", page: "", details: "", category: "herbal-mixture", pageNo: 11},
  {id: 'a34', name: "Cigarette Cotton Filters", desc: "Frutta, Mint is World First Fusion Ball Technology Filter will add a Flavour to your Normal RYO. Smoking filters let you customize your own cigarettes with the same great taste. Uses as a smoking filter to make your Cigarettes or RYO. This product is a filter only. Cigarettes not included. Smoking Filter cigarette only.", img: "Cigarette Cotton Filters.webp", page: "", details: "", category: "cigarette-filter", pageNo: 12},
  {id: 'a37', name: "Anti Smoking Medicine", desc: "Royal Swag 100% Natural Ayurvedic Liquid For Quit Smoking and Tobacco, Liquor Habit. Royal Swag’s Shot will help you to stop your craving of nicotine Use, Take Shot’s 2 to 3 Spray in mouth when you feel craving for nicotine. Every addict knows about smoking, Liquor addiction kills, but they are unable to quit due to nicotine Additction, Royal Swag Shot liquid help to satisfy the desire for nicotine. Helps to recover from multiple complications after or during the rehabilitation period. Eliminates addiction to alcohol, tobacco/tobacco, does not contain any addictive substance.", img: "Anti Smoking Medicine.webp", page: "", details: "", category: "shot-spray", pageNo: 13},
  {id: 'a38', name: "Royal Swag Shot Quit Smoking Spray", desc: "Royal Swag 100% Natural Ayurvedic Liquid For Quit Smoking and Tobacco, Liquor Habit. Royal Swag’s Shot will help you to stop your craving of nicotine Use, Take Shot’s 2 to 3 Spray in mouth when you feel craving for nicotine. Every addict knows about smoking, Liquor addiction kills, but they are unable to quit due to nicotine Additction, Royal Swag Shot liquid help to satisfy the desire for nicotine. Helps to recover from multiple complications after or during the rehabilitation period. Eliminates addiction to alcohol, tobacco/tobacco, does not contain any addictive substance.", img: "Royal Swag Shot Quit Smoking Spray.webp", page: "", details: "", category: "shot-spray", pageNo: 13},
  {id: 'a40', name: "Nicotex Nicotine Gum", desc: "1.Satisfy your Addiction Need.2.Helpful in De-addiction.3.Helpful in Nicotine or Tobacco.4.Craving effcet.5.Get Instant kick.6.Use anytime,anywhere for job free freshness.", img: "Nicotex Nicotine Gum.webp", page: "", details: "", category: "nicotine-gum", pageNo: 14},
  {id: 'a41', name: "Nicotine Gum Manufacturer", desc: "1.Satisfy your Addiction Need.2.Helpful in De-addiction.3.Helpful in Nicotine or Tobacco.4.Craving effcet.5.Get Instant kick.6.Use anytime,anywhere for job free freshness.", img: "Nicotine Gum Manufacturer.webp", page: "", details: "", category: "nicotine-gum", pageNo: 14},
  {id: 'a43', name: "Chhinkni Herbal Snuff", desc: "Herbal Snuff is the finest snuff available, and while more herbs are used than in most snuffs, it's still 100% tobacco free. If you breathe easily, Herbal Snuff won't harm your nose or sinuses. There are no additives of any kind; the only ingredients are the finest herbs for which it is famous. Herbal nasal snuff is made of 100% natural herbs and spices with no additives. The result is a pleasant-tasting, Minty aroma that stimulates your senses. Our Herbal Snuff is a pure, healthy alternative to cigarettes that won't damage your health. This herbal relief is made from all-natural ingredients and is ideal for those wishing to fight nicotine cravings and those who occasionally smoke cigarettes.", img: "Chhinkni Herbal Snuff.webp", page: "", details: "", category: "herbal-nasal-stuff", pageNo: 15},
  {id: 'a44', name: "Chhinkni Herbal Snuff Powder", desc: "Herbal Snuff is the finest snuff available, and while more herbs are used than in most snuffs, it's still 100% tobacco free. If you breathe easily, Herbal Snuff won't harm your nose or sinuses. There are no additives of any kind; the only ingredients are the finest herbs for which it is famous. Herbal nasal snuff is made of 100% natural herbs and spices with no additives. The result is a pleasant-tasting, Minty aroma that stimulates your senses. Our Herbal Snuff is a pure, healthy alternative to cigarettes that won't damage your health. This herbal relief is made from all-natural ingredients and is ideal for those wishing to fight nicotine cravings and those who occasionally smoke cigarettes.", img: "Chhinkni Herbal Snuff Powder.webp", page: "", details: "", category: "herbal-nasal-stuff", pageNo: 15},
];

const AdminProducts = ({ categories }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [products, setProducts] = useState(ALL_PRODUCTS_2);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [moq, setMoq] = useState("");
  const [brand, setBrand] = useState("");
  const [packagingSize, setPackagingSize] = useState("");
  const [weight, setWeight] = useState("");
  const [typeOfPackaging, setTypeOfPackaging] = useState("");
  const [packagingType, setPackagingType] = useState("");
  const [facewashType, setFacewashType] = useState("");
  const [fragrance, setFragrance] = useState("");
  const [color, setColor] = useState("");
  const [flavourBase, setFlavourBase] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [isItAyurvedic, setIsItAyurvedic] = useState("");
  const [sulphateFree, setSulphateFree] = useState("");
  const [sunProtection, setSunProtection] = useState("");
  const [oilFree, setOilFree] = useState("");
  const [features, setFeatures] = useState("");
  const [gender, setGender] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [skinType, setSkinType] = useState("");
  const [form, setForm] = useState("");
  const [usageApplication, setUsageApplication] = useState("");
  const [shelfLife, setShelfLife] = useState("");
  const [countryOfOrigin, setCountryOfOrigin] = useState("");
  const [manufacturedBy, setManufacturedBy] = useState("");
  const [certificate, setCertificate] = useState("");
  // const [file1, setFile1] = useState("");
  const [file1, setFile1] = useState({ preview: "", data: "" });
  const [addHome, setAddHome] = useState(false);
  const [topOrBest, setTopOrBest] = useState("");
  const [createProducts, setCreateProducts] = useState([]);

  const updateProducts = (item) => {
    const tempArr = products.map((el) => (el.id === item.id ? item : el));

    // console.log(tempArr);
    setProducts(tempArr);
    setIsAdding(false);
    setTitle("");
    setDescription("");
    setFile1();
  };

  const addProduct = (e) => {
    e.preventDefault();

    if (!title || !description || !category) {
      alert("Please fill all mandatory fields!");
      return;
    }
    console.log(title);
    console.log(description);
    console.log(category);
    // console.log(file1);

    addMyProduct(
      title,
      description,
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
      category,
      file1.data
    );

    setTimeout(() => getAllProducts(), 1000);

    // const tempId = `a${products.length + 1}`;
    // prettier-ignore
    // const tempProd = [{ id: tempId, name: title, img: file1, desc: description, category: category}];

    // const tempArr = products.concat(tempJob);

    // setProducts(tempArr);
    setTitle("");
    setDescription("");
    setCategory("");
    setPrice("");
    setMoq("");
    setBrand("");
    setPackagingSize("");
    setWeight("");
    setTypeOfPackaging("");
    setPackagingType("");
    setFacewashType("");
    setFragrance("");
    setColor("");
    setFlavourBase("");
    setIngredient("");
    setIsItAyurvedic("");
    setSulphateFree("");
    setSunProtection("");
    setOilFree("");
    setFeatures("");
    setGender("");
    setAgeGroup("");
    setSkinType("");
    setForm("");
    setUsageApplication("");
    setShelfLife("");
    setCountryOfOrigin("");
    setManufacturedBy("");
    setCertificate("");
    setFile1({ preview: "", data: "" });
    setAddHome(false);
    setTopOrBest("");
    setIsAdding(false);
  };

  // name, desc, price, moq, brand, size, weight, typeOfPackaging,
  // packagingType, facewashType,
  // fragrance, color, base, ingredient, isAyurvedic,
  // isSulphateFree, sunProtection, oilFree, feature,
  // gender, ageGroup, skinType, form, usageApplication, shelfLife,
  // countryOfOrigin, manufacturedBy, certificate, category, image

  const addMyProduct = (
    title,
    description,
    price = "",
    moq = "",
    brand = "",
    packagingSize = "",
    weight = "",
    typeOfPackaging = "",
    packagingType = "",
    facewashType = "",
    fragrance = "",
    color = "",
    flavourBase = "",
    ingredient = "",
    isItAyurvedic = "",
    sulphateFree = "",
    sunProtection = "",
    oilFree = "",
    features = "",
    gender = "",
    ageGroup = "",
    skinType = "",
    form = "",
    usageApplication = "",
    shelfLife = "",
    countryOfOrigin = "",
    manufacturedBy = "",
    certificate = "",
    category,
    file1
  ) => {
    axios
      .post("http://localhost:5555/api/product/addProduct", {
        name: title,
        description: description,
        price: price,
        moq: moq,
        brand: brand,
        packagingSize: packagingSize,
        weight: weight,
        typeOfPackaging: typeOfPackaging,
        packagingType: packagingType,
        facewashType: facewashType,
        fragrance: fragrance,
        color: color,
        flavourBase: flavourBase,
        ingredient: ingredient,
        isItAyurvedic: isItAyurvedic,
        sulphateFree: sulphateFree,
        sunProtection: sunProtection,
        oilFree: oilFree,
        features: features,
        gender: gender,
        ageGroup: ageGroup,
        skinType: skinType,
        form: form,
        usageApplication: usageApplication,
        shelfLife: shelfLife,
        countryOfOrigin: countryOfOrigin,
        manufacturedBy: manufacturedBy,
        certificate: certificate,
        category: category,
        image: file1
      })
      .then((response) => {
        console.log("products");
        setCreateProducts([response.data, ...createProducts]);
      });
  };

  const getAllProducts = () => {
    axios.get("http://localhost:5555/api/product/getAll").then((data) => {
      console.log(data?.data);
      // setProducts(data?.data);
    });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const deleteHandler = (id) => {
    // prettier-ignore
    const res = window.confirm( "Are you sure you want to delete this Product?" );
    if (!res) return;

    setProducts((prev) => prev.filter((el) => el.id !== id));
  };

  const cancelHandler = () => {
    // prettier-ignore
    const res = window.confirm( "Are you sure you want to cancel adding new Product?" );
    if (!res) return;

    setTitle("");
    setDescription("");
    setCategory("");
    setPrice("");
    setMoq("");
    setBrand("");
    setPackagingSize("");
    setWeight("");
    setTypeOfPackaging("");
    setPackagingType("");
    setFacewashType("");
    setFragrance("");
    setColor("");
    setFlavourBase("");
    setIngredient("");
    setIsItAyurvedic("");
    setSulphateFree("");
    setSunProtection("");
    setOilFree("");
    setFeatures("");
    setGender("");
    setAgeGroup("");
    setSkinType("");
    setForm("");
    setUsageApplication("");
    setShelfLife("");
    setCountryOfOrigin("");
    setManufacturedBy("");
    setCertificate("");
    setFile1({ preview: "", data: "" });
    setAddHome(false);
    setTopOrBest("");
    setIsAdding(false);
  };

  const handleFileChange = (e) => {
    console.log(e.target);
    console.log(e.target.files);
    console.log(e.target.files[0]);
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0]
    };
    setFile1(img);
  };

  // prettier-ignore
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.productsHeader} onClick={() => setIsExpanded((prev) => !prev)}>
          <p className={classes.productsHeaderText}><span>Products</span><span><i className={`fa-solid ${!isExpanded ? 'fa-plus' : 'fa-minus'}`}></i></span></p>
        </div>
        <div className={`${classes.productsContent} ${!isExpanded ? classes.inactive : ''}`}>
          <ul className={classes.products}>
            {products.map((product) => {
              const { id, name, img, desc, page, category, price, moq, brand, packagingSize, weight, typeOfPackaging, packagingType, facewashType, fragrance, color, flavourBase, ingredient, isItAyurvedic, sulphateFree, sunProtection, oilFree, features, gender, ageGroup, skinType, form, usageApplication, shelfLife, countryOfOrigin, manufacturedBy, certificate } = product;

              return (
                <li key={id} className={classes.product}>
                  <OurProduct
                    id={id}
                    name={name}
                    img={img}
                    desc={desc}
                    page={page}
                    category={category}
                    price={price}
                    moq={moq}
                    brand={brand}
                    packagingSize={packagingSize}
                    weight={weight}
                    typeOfPackaging={typeOfPackaging}
                    packagingType={packagingType}
                    facewashType={facewashType}
                    fragrance={fragrance}
                    color={color}
                    flavourBase={flavourBase}
                    ingredient={ingredient}
                    isItAyurvedic={isItAyurvedic}
                    sulphateFree={sulphateFree}
                    sunProtection={sunProtection}
                    oilFree={oilFree}
                    features={features}
                    gender={gender}
                    ageGroup={ageGroup}
                    skinType={skinType}
                    form={form}
                    usageApplication={usageApplication}
                    shelfLife={shelfLife}
                    countryOfOrigin={countryOfOrigin}
                    manufacturedBy={manufacturedBy}
                    certificate={certificate}
                    categories={categories}
                    updateProducts={updateProducts}
                    deleteHandler={deleteHandler}
                  />
                </li>
              );
            })}
          </ul>
        
          {isAdding && (
            <div className={classes.productsContent}>
                <form onSubmit={addProduct} className={classes.form}>
                    <label htmlFor="productname" className={classes.label}><span className={classes.labelText}>Product name: *</span><input id="productname" type='text' value={title} onChange={(e) => setTitle(e.target.value)} className={classes.inputField} required/></label>
                    <label htmlFor="description" className={classes.label}><span className={classes.labelText}>Description: *</span><textarea name="product description" id="description" aria-label="product description" value={description} onChange={(e) => setDescription(e.target.value)} className={classes.textarea} required></textarea></label>
                    <label htmlFor="category" className={classes.label}><span className={classes.labelText}>Category: *</span>
                      <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)} className={classes.dropdownField} required>
                        <option value="">Select</option>
                        {categories.map((el) => {
                          const {id, category} = el;
                          
                          return (
                            // <option key={id} id={id} value={`${name.toLowerCase().split(' ').join('-')}`}>{category}</option>
                            <option key={id} id={id} value={`${category.toString().toLowerCase().split(" ").join("-").replace(/[[&\/\\#,+()$~%.'":*?<>{}]/g, "")}`}>{category}</option>
                            )
                          })}
                      </select>
                    </label>
                    <label htmlFor="price" className={classes.label}><span className={classes.labelText}>Price:</span><input id="price" type='text' value={price} onChange={(e) => setPrice(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="moq" className={classes.label}><span className={classes.labelText}>MOQ:</span><input id="moq" type='text' value={moq} onChange={(e) => setMoq(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="brand" className={classes.label}><span className={classes.labelText}>Brand:</span><input id="brand" type='text' value={brand} onChange={(e) => setBrand(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="packagingSize" className={classes.label}><span className={classes.labelText}>Packaging Size:</span><input id="packagingSize" type='text' value={packagingSize} onChange={(e) => setPackagingSize(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="weight" className={classes.label}><span className={classes.labelText}>Weight:</span><input id="weight" type='text' value={weight} onChange={(e) => setWeight(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="typeOfPackaging" className={classes.label}><span className={classes.labelText}>Type of Packaging:</span><input id="typeOfPackaging" type='text' value={typeOfPackaging} onChange={(e) => setTypeOfPackaging(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="packagingType" className={classes.label}><span className={classes.labelText}>Packaging Type:</span><input id="packagingType" type='text' value={packagingType} onChange={(e) => setPackagingType(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="facewashType" className={classes.label}><span className={classes.labelText}>Facewash Type:</span><input id="facewashType" type='text' value={facewashType} onChange={(e) => setFacewashType(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="fragrance" className={classes.label}><span className={classes.labelText}>Fragrance:</span><input id="fragrance" type='text' value={fragrance} onChange={(e) => setFragrance(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="color" className={classes.label}><span className={classes.labelText}>Color:</span><input id="color" type='text' value={color} onChange={(e) => setColor(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="flavourBase" className={classes.label}><span className={classes.labelText}>Flavour Base:</span><input id="flavourBase" type='text' value={flavourBase} onChange={(e) => setFlavourBase(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="ingredient" className={classes.label}><span className={classes.labelText}>Ingredient:</span><input id="ingredient" type='text' value={ingredient} onChange={(e) => setIngredient(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="isItAyurvedic" className={classes.label}><span className={classes.labelText}>Is Ayurvedic?:</span><input id="isItAyurvedic" type='text' value={isItAyurvedic} onChange={(e) => setIsItAyurvedic(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="sulphateFree" className={classes.label}><span className={classes.labelText}>Is Sulphate Free?:</span><input id="sulphateFree" type='text' value={sulphateFree} onChange={(e) => setSulphateFree(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="sunProtection" className={classes.label}><span className={classes.labelText}>Sun Protection:</span><input id="sunProtection" type='text' value={sunProtection} onChange={(e) => setSunProtection(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="oilFree" className={classes.label}><span className={classes.labelText}>Oil Free?:</span><input id="oilFree" type='text' value={oilFree} onChange={(e) => setOilFree(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="features" className={classes.label}><span className={classes.labelText}>Features:</span><input id="features" type='text' value={features} onChange={(e) => setFeatures(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="gender" className={classes.label}><span className={classes.labelText}>Gender:</span><input id="gender" type='text' value={gender} onChange={(e) => setGender(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="ageGroup" className={classes.label}><span className={classes.labelText}>Age Group:</span><input id="ageGroup" type='text' value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="skinType" className={classes.label}><span className={classes.labelText}>Skin Type:</span><input id="skinType" type='text' value={skinType} onChange={(e) => setSkinType(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="form" className={classes.label}><span className={classes.labelText}>Form:</span><input id="form" type='text' value={form} onChange={(e) => setForm(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="usageApplication" className={classes.label}><span className={classes.labelText}>Usage Application:</span><input id="usageApplication" type='text' value={usageApplication} onChange={(e) => setUsageApplication(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="shelfLife" className={classes.label}><span className={classes.labelText}>Shelf Life:</span><input id="shelfLife" type='text' value={shelfLife} onChange={(e) => setShelfLife(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="countryOfOrigin" className={classes.label}><span className={classes.labelText}>Country Of Origin:</span><input id="countryOfOrigin" type='text' value={countryOfOrigin} onChange={(e) => setCountryOfOrigin(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="manufacturedBy" className={classes.label}><span className={classes.labelText}>Manufactured By:</span><input id="manufacturedBy" type='text' value={manufacturedBy} onChange={(e) => setManufacturedBy(e.target.value)} className={classes.inputField}/></label>
                    <label htmlFor="certificate" className={classes.label}><span className={classes.labelText}>Certificate:</span><input id="certificate" type='text' value={certificate} onChange={(e) => setCertificate(e.target.value)} className={classes.inputField}/></label>
                    {/* <label htmlFor="img1" className={classes.label}><span className={classes.labelText}>Upload Image</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img1" value={file1.data} onChange={(e) => handleFileChange(e)} placeholder=".jpg,.png,.webp " /></label>                 */}
                    <label htmlFor="img1" className={classes.label}><span className={classes.labelText}>Upload Image: *</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img1" onChange={(e) => handleFileChange(e)} placeholder=".jpg,.png,.webp " required/></label>
                    <label htmlFor="cat" className={classes.label}><span className={classes.labelText}>Add to Homepage:</span><input id="cat" type='checkbox' onChange={(e) => setAddHome(e.target.checked)} className={classes.inputField}/></label>
                    {addHome && <label htmlFor="top" className={classes.label}><span className={classes.labelText}>Add to Top:</span><input id="top" type='radio' value="top" name="topBest" onChange={(e) => setTopOrBest(e.target.value)} className={classes.inputField}/></label>}
                    {addHome && <label htmlFor="best" className={classes.label}><span className={classes.labelText}>Add to Best:</span><input id="best" type='radio' value="best" name="topBest" onChange={(e) => setTopOrBest(e.target.value)} className={classes.inputField}/></label>}
                    <div className={classes.btns}>
                      <button className={classes.btn} type="submit">Add</button>
                      <button className={classes.btn} onClick={cancelHandler} type="button">Cancel</button>
                    </div>
                </form>
            </div>)
          }
          {/* <label htmlFor="description" className={classes.label}><span className={classes.labelText}>Description:</span>&nbsp;<input id="description" type='text' value={description} onChange={(e) => setDescription(e.target.value)} className={classes.inputField} required/></label> */}
          {!isAdding && <div className={classes.addProduct}><button className={classes.addProductBtn} onClick={() => setIsAdding(true)}>Add Product</button></div>}
        </div>
      </div>
    </section>
  );
};

export default AdminProducts;
