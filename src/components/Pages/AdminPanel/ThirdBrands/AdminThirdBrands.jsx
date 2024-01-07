import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import ThirdBrand from "./ThirdBrand";

import classes from "./AdminThirdBrands.module.css";

// prettier-ignore
const DUMMY_THIRD_BRANDS = [
  { id: "e1", name: "Third Brand 1", imgs: ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"], desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore velit molestiae dolorum totam. Error cumque doloremque nisi eos itaque." },
  { id: "e2", name: "Third Brand 2", imgs: ["img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg"], desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore velit molestiae dolorum totam. Error cumque doloremque nisi eos itaque." },
  { id: "e3", name: "Third Brand 3", imgs: ["img9.jpg", "img10.jpg", "img11.jpg", "img12.jpg"], desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore velit molestiae dolorum totam. Error cumque doloremque nisi eos itaque." }
];

const AdminThirdBrands = ({ allThirdBrands, setThirdPartyBrands }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // const [thirdBrands, setThirdBrands] = useState(DUMMY_THIRD_BRANDS);
  const [thirdBrands, setThirdBrands] = useState(allThirdBrands);
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [file1, setFile1] = useState();
  // const [file2, setFile2] = useState();
  // const [file3, setFile3] = useState();
  // const [file4, setFile4] = useState();
  const [images, setImages] = useState([]);
  const [createThirdBrands, setCreateThirdBrands] = useState([]);

  const updateThirdBrands = (brand) => {
    // const tempArr = thirdBrands.map((el) => (el.id === event.id ? event : el));

    axios
      .put(`http://localhost:5555/api/thirdParty/${brand.id}`, {
        name: brand.name,
        description: brand.desc,
        image: brand.imgs,
      })
      .then((res) => console.log(res.data));

    setTimeout(() => getAllThirdPartyBrands(), 200);

    // console.log(tempArr);
    // thirdBrands(tempArr);
  };
  const addThirdBrand = (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please fill all mandatory fields!");
      return;
    }

    addMyThirdBrand(title, description, images);

    setTimeout(() => getAllThirdPartyBrands(), 200);

    // const tempId = `j${thirdBrands.length + 1}`;
    // // prettier-ignore
    // const tempJob = [{ id: tempId, name: title, imgs: images, desc: description}];

    // const tempArr = thirdBrands.concat(tempJob);

    // thirdBrands(tempArr);
    setTitle("");
    setDescription("");
    // setFile1();
    // setFile2();
    // setFile3();
    // setFile4();
    setImages("");
    setIsAdding(false);
  };

  // const addMyThirdBrand = (title, desc, imgs = "") => {
  //   axios
  //     .post("http://localhost:5555/api/thirdParty/addThirdBrand", {
  //       name: title,
  //       description: desc,
  //       image: imgs,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       setCreateThirdBrands((prev) => [response.data, ...prev]);
  //     });
  // };

  const addMyThirdBrand = (title, description, images) => {
    const formData = new FormData();

    formData.append("name", title);
    formData.append("description", description);
    // formData.append("brand_images", images);

    for (let i = 0; i < images.length; i++) {
      // formData.append("images", images[i]);
      formData.append("brand_images", images[i]);
    }

    axios
      .post("http://localhost:5555/api/thirdParty/addThirdBrand", formData)
      .then((response) => {
        console.log("fcgvhb");
        setCreateThirdBrands([response.data, ...createThirdBrands]);
      });
    setTitle("");
    setDescription("");
    setImages("");
  };

  const getAllThirdPartyBrands = () => {
    axios
      .get("http://localhost:5555/api/thirdParty/getAll")
      .then((data) => setThirdBrands(data?.data));
  };

  useEffect(() => {
    getAllThirdPartyBrands();
  }, []);

  const deleteHandler = (id) => {
    // prettier-ignore
    const res = window.confirm( "Are you sure you want to delete this Third Party Brand?" );
    if (!res) return;

    axios.delete(`http://localhost:5555/api/thirdParty/${id}`).then((res) => {
      console.log("deleted Third Brand");
    });

    setTimeout(() => getAllThirdPartyBrands(), 200);

    // setThirdBrands((prev) => prev.filter((el) => el.id !== id));
  };
  const cancelHandler = () => {
    // prettier-ignore
    const res = window.confirm( "Are you sure you want to cancel adding new Third Party Brand?" );
    if (!res) return;
    setTitle("");
    setDescription("");
    // setFile1();
    // setFile2();
    // setFile3();
    // setFile4();
    setImages("");
    setIsAdding(false);
  };

  const imageSelection = (e) => {
    // console.log(typeof e.target.files);

    // const files = e.target.files;

    // let tempArr = [];

    // for (const el in files) {
    //   // console.log(el);
    //   tempArr.push(files[el]);
    // }

    // console.log(tempArr.slice(0, -2));
    // setImages(tempArr.slice(0, -2));
    setImages(e.target.files);
  };

  // prettier-ignore
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.thirdBrandsHeader} onClick={() => setIsExpanded((prev) => !prev)}>
          <p className={classes.thirdBrandsHeaderText}><span>Third Party Brands</span><span><i className={`fa-solid ${!isExpanded ? 'fa-plus' : 'fa-minus'}`}></i></span></p>
        </div>
        <div className={`${classes.thirdBrandContent} ${!isExpanded ? classes.inactive : ''}`}>
          <ul className={classes.thirdBrands}>
            {thirdBrands.map((thirdBrand) => {
              const { id, name, image, description } = thirdBrand;

              return (
                <li key={id} className={classes.thirdBrand}>
                  <ThirdBrand id={id} name={name} image={image} desc={description} updateThirdBrands={updateThirdBrands} deleteHandler={deleteHandler}/>
                </li>
              );
            })}
          </ul>
          {isAdding && (
            <div className={classes.thirdBrandFormContent}>
              <form className={`${classes.form} ${!isExpanded ? classes.inactive : ''}`} onSubmit={addThirdBrand}>
                <label htmlFor="name" className={classes.label}><span className={classes.labelText}>Event name: *</span><input id="name" type='text' value={title} onChange={(e) => setTitle(e.target.value)} className={classes.inputField} required/></label>
                <label htmlFor="description" className={classes.label}><span className={classes.labelText}>Description: *</span><textarea name="event description" id="description" aria-label="event description" value={description} onChange={(e) => setDescription(e.target.value)} className={classes.textarea} required></textarea></label>
                {/* <label htmlFor="img1" className={classes.label}><span className={classes.labelText}>Upload Image 1: *</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img1" value={file1} onChange={(e) => setFile1(e.target.value)} placeholder=".jpg,.png,.webp" required/></label>
                <label htmlFor="img2" className={classes.label}><span className={classes.labelText}>Upload Image 2:</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img2" value={file2} onChange={(e) => setFile2(e.target.value)} placeholder=".jpg,.png,.webp" /></label>
                <label htmlFor="img3" className={classes.label}><span className={classes.labelText}>Upload Image 3:</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img3" value={file3} onChange={(e) => setFile3(e.target.value)} placeholder=".jpg,.png,.webp" /></label>
                <label htmlFor="img4" className={classes.label}><span className={classes.labelText}>Upload Image 4:</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img4" value={file4} onChange={(e) => setFile4(e.target.value)} placeholder=".jpg,.png,.webp" /></label> */}
                <label htmlFor="images" className={classes.label}><span className={classes.labelText}>Upload Images: *</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="images" onChange={(e) => setImages(e.target.files)} multiple placeholder=".jpg,.png,.webp" /></label>
                {/* <label htmlFor="images" className={classes.label}><span className={classes.labelText}>Upload Images: *</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="images" onChange={imageSelection} placeholder=".jpg,.png,.webp" multiple /></label> */}
                <div className={classes.btns}>
                  <button className={classes.btn} type="submit">Add</button>
                  <button className={classes.btn} onClick={cancelHandler}>Cancel</button>
                </div>
            </form>
          </div>)}

          {!isAdding && <div className={classes.addThirdBrand}><button className={classes.addThirdBrandBtn} onClick={() => setIsAdding(true)}>Add Third Party Brand</button></div>}
        </div>
      </div>
    </section>
  );
};

export default AdminThirdBrands;

/*

http://localhost:5555/api/thirdParty/addThirdBrand
http://localhost:5555/api/thirdParty/getAll
http://localhost:5555/api/thirdParty/:id
http://localhost:5555/api/thirdParty/:id

*/
