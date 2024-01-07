import { useState } from "react";
import { useEffect } from "react";

import OurBrand from "./OurBrand";

import classes from "./AdminBrands.module.css";
import axios from "axios";

// prettier-ignore
// const DUMMY_BRANDS = [
//   { id: "j1", name: "Royal Swag", img: "img1.jpg", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta adipisci hic nesciunt quod fugiat, suscipit expedita quis voluptas inventore ratione laborum, sit tempore voluptate voluptatibus eos quaerat? Aut ex laboriosam magni natus quia obcaecati, ab sunt sit perferendis dolore officiis delectus, assumenda consequatur cupiditate! Explicabo adipisci quo eveniet repudiandae?" },
//   { id: "j2", name: "SWOSH", img: "img2.jpg", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta adipisci hic nesciunt quod fugiat, suscipit expedita quis voluptas inventore ratione laborum, sit tempore voluptate voluptatibus eos quaerat? Aut ex laboriosam magni natus quia obcaecati, ab sunt sit perferendis dolore officiis delectus, assumenda consequatur cupiditate! Explicabo adipisci quo eveniet repudiandae?" }
//   // {id: 'j3', name: 'Telecaller', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta adipisci hic nesciunt quod fugiat, suscipit expedita quis voluptas inventore ratione laborum, sit tempore voluptate voluptatibus eos quaerat? Aut ex laboriosam magni natus quia obcaecati, ab sunt sit perferendis dolore officiis delectus, assumenda consequatur cupiditate! Explicabo adipisci quo eveniet repudiandae?'},
// ];

const AdminBrands = ({ allBrands }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  // const [brands, setBrands] = useState(DUMMY_BRANDS);
  const [brands, setBrands] = useState(allBrands);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file1, setFile1] = useState("");
  // const [createBrands, setCreateBrands] = useState([]);

  const updateBrands = (item) => {
    // const tempArr = brands.map((el) => (el.id === item.id ? item : el));

    axios
      .put(`http://localhost:5555/api/brands/${item.id}`, {
        brand: item.name,
        description: item.desc,
        // image: item.img
      })
      .then((res) => console.log(res.data));

    setTimeout(() => getAllBrands(), 200);

    // console.log(tempArr);
    // setBrands(tempArr);
    setIsAdding(false);
  };

  const addBrand = (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please fill all mandatory fields correctly!");
      return;
    }

    addMyBrand(title, description, file1);

    setTimeout(() => getAllBrands(), 200);

    // const tempId = `j${brands.length + 1}`;
    // prettier-ignore
    // const tempJob = [{ id: tempId, name: title, img: file1, desc: description}];

    // const tempArr = brands.concat(tempJob);

    // setBrands(tempArr);

    setIsAdding(false);
    setTitle("");
    setDescription("");
    setFile1("");
  };

  const addMyBrand = async () => {
    const formData = new FormData();

    formData.append("brand", title);
    formData.append("description", description);
    formData.append("image", file1);

    await axios.post("http://localhost:5555/api/brands/addBrands", formData);
    console.log(formData);
  };

  const getAllBrands = () => {
    axios
      .get("http://localhost:5555/api/brands/getAll")
      .then((data) => setBrands(data?.data));
  };
  useEffect(() => {
    getAllBrands();
  }, []);

  const deleteHandler = (id) => {
    // prettier-ignore
    const res = window.confirm( "Are you sure you want to delete this Brand?" );
    if (!res) return;

    axios
      .delete(`http://localhost:5555/api/brands/${id}`)
      .then((response) => console.log("deleted"));

    setTimeout(() => getAllBrands(), 200);
    // setBrands((prev) => prev.filter((el) => el.id !== id));
  };

  const cancelHandler = () => {
    // prettier-ignore
    const res = window.confirm( "Are you sure you want to cancel adding new Brand?" );
    if (!res) return;

    setTitle("");
    setDescription("");
    setFile1();
    setIsAdding(false);
  };

  // prettier-ignore
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.brandsHeader} onClick={() => setIsExpanded((prev) => !prev)}>
          <p className={classes.brandsHeaderText}><span>Brands</span><span><i className={`fa-solid ${!isExpanded ? 'fa-plus' : 'fa-minus'}`}></i></span></p>
        </div>
        <div className={`${classes.brandsContent} ${!isExpanded ? classes.inactive : ''}`}>
          <ul className={classes.brands}>
            {brands.map((job) => {
              const { id, brand, image, description } = job;

              return (
                <li key={id} className={classes.brand}>
                  <OurBrand id={id} name={brand} img={image} desc={description} updateBrands={updateBrands} deleteHandler={deleteHandler}/>
                </li>
              );
            })}
          </ul>
        
          {isAdding && (
            <div className={classes.jobFormContent}>
                <form onSubmit={addBrand} method = "POST" className={classes.form}>
                    <label htmlFor="brandname" className={classes.label}><span className={classes.labelText}>Brand name: *</span><input id="brandname" type='text' value={title} onChange={(e) => setTitle(e.target.value)} className={classes.inputField} required/></label>
                    <label htmlFor="description" className={classes.label}><span className={classes.labelText}>Description: *</span><textarea name="job description" id="description" aria-label="job description" value={description} onChange={(e) => setDescription(e.target.value)} className={classes.textarea} required></textarea></label>
                    <label htmlFor="img1" className={classes.label}><span className={classes.labelText}>Upload Image:</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img1" onChange={(e) => setFile1(e.target.files[0])} placeholder=".jpg,.png,.webp " /></label>                
                    <div className={classes.btns}>
                      <button className={classes.btn} type="submit">Add</button>
                      <button className={classes.btn} onClick={cancelHandler} type="button">Cancel</button>
                    </div>
                </form>
            </div>)
          }
          {/* <label htmlFor="description" className={classes.label}><span className={classes.labelText}>Description:</span><input id="description" type='text' value={description} onChange={(e) => setDescription(e.target.value)} className={classes.inputField} required/></label> */}
          {!isAdding && <div className={classes.addBrand}><button className={classes.addBrandBtn} onClick={() => setIsAdding(true)}>Add Brand</button></div>}
        </div>
      </div>
    </section>
  );
};

export default AdminBrands;

/*

http://localhost:5555/api/brands/addBrands
http://localhost:5555/api/brands/getAll
http://localhost:5555/api/brands/:id

*/
