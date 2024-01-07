import { useEffect, useState } from "react";

import EventImgs from "./EventImgs";

import classes from "./AdminGallery.module.css";
import axios from "axios";

// prettier-ignore
// const DUMMY_EVENTS = [
//   { id: "e1", name: "Event 1", imgs: ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"], desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore velit molestiae dolorum totam. Error cumque doloremque nisi eos itaque." },
//   { id: "e2", name: "Event 2", imgs: ["img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg"], desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore velit molestiae dolorum totam. Error cumque doloremque nisi eos itaque." },
//   { id: "e3", name: "Event 3", imgs: ["img9.jpg", "img10.jpg", "img11.jpg", "img12.jpg"], desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta labore velit molestiae dolorum totam. Error cumque doloremque nisi eos itaque." }
// ];

const AdminGallery = ({ allEventGalleries, setEventGalleries }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // const [events, setEvents] = useState(DUMMY_EVENTS);
  const [events, setEvents] = useState(allEventGalleries);
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [file1, setFile1] = useState();
  // const [file2, setFile2] = useState();
  // const [file3, setFile3] = useState();
  // const [file4, setFile4] = useState();
  const [images, setImages] = useState("");
  const [createEventGallery, setCreateEventGallery] = useState([]);

  const updateGallery = (event) => {
    // const tempArr = events.map((el) => (el.id === event.id ? event : el));

    axios
      .put(`http://localhost:5555/api/gallary/${event.id}`, {
        name: event.name,
        description: event.desc,
        images: event.imgs,
      })
      .then((response) => console.log(response.data));

    setTimeout(() => getAllEventsGalleries(), 200);

    // console.log(tempArr);
    // setEvents(tempArr);
    setIsAdding(false);
  };

  const addEvent = (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Please fill all mandatory field!");
      return;
    }

    addMyEventGallery(title, description, images);

    setTimeout(() => getAllEventsGalleries(), 200);

    // const tempId = `j${events.length + 1}`;
    // // prettier-ignore
    // const tempJob = [{ id: tempId, name: title, imgs: images, desc: description}];

    // const tempArr = events.concat(tempJob);

    // setEvents(tempArr);
    setIsAdding(false);
    setTitle("");
    setDescription("");
    setImages("");
  };

  // const addMyEventGallery = (title, desc, imgs = "") => {
  //   axios
  //     .post("http://localhost:5555/api/gallary/addGallary", {
  //       name: title,
  //       description: desc,
  //       images: imgs,
  //     })
  //     .then((res) => {
  //       console.log("Added event");
  //       setCreateEventGallery((prev) => [res.data, ...prev]);
  //     });
  // };
  const addMyEventGallery = (title, description, images) => {
    const formData = new FormData();

    formData.append("name", title);
    formData.append("description", description);
    // formData.append("brand_images", images);

    for (let i = 0; i < images.length; i++) {
      // formData.append("images", images[i]);
      formData.append("gallary_images", images[i]);
    }

    axios
      .post("http://localhost:5555/api/gallary/addGallary", formData)
      .then((response) => {
        console.log("fcgvhb");
        setCreateEventGallery([response.data, ...createEventGallery]);
      });
    setTitle("");
    setDescription("");
    setImages("");
  };

  const getAllEventsGalleries = () => {
    axios.get("http://localhost:5555/api/gallary/getAll").then((data) => {
      // console.log(data);
      setEvents(data?.data);
    });
  };

  useEffect(() => getAllEventsGalleries(), []);

  const deleteHandler = (id) => {
    // prettier-ignore
    const res = window.confirm( "Are you sure you want to delete this Event?" );
    if (!res) return;

    axios
      .delete(`http://localhost:5555/api/gallary/${id}`)
      .then((response) => console.log("delete Event Gallery"));

    setTimeout(() => getAllEventsGalleries(), 200);

    // setEvents((prev) => prev.filter((el) => el.id !== id));
  };
  const cancelHandler = () => {
    // prettier-ignore
    const res = window.confirm( "Are you sure you want to cancel adding new Event?" );
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

  // prettier-ignore
  return (
    <section className={classes.section}>
      <div className={classes.container}>
      <div className={classes.galleryHeader} onClick={() => setIsExpanded((prev) => !prev)}>
            <p className={classes.galleryHeaderText}><span>Gallery</span><span><i className={`fa-solid ${!isExpanded ? 'fa-plus' : 'fa-minus'}`}></i></span></p>
        </div>
        <div className={`${classes.galleryContent} ${!isExpanded ? classes.inactive : ''}`}>
          <ul className={classes.events}>
              {events.map((event) => {
                const { id, name, images, description } = event;

                return (
                  <li key={id} className={classes.event}>
                    <EventImgs id={id} name={name} imgs={images} desc={description} updateGallery={updateGallery} deleteHandler={deleteHandler}/>
                  </li>
                );
              })}
            </ul>
            {isAdding && <div className={classes.jobFormContent}>
              <form className={`${classes.form} ${!isExpanded ? classes.inactive : ''}`} onSubmit={addEvent}>
                <label htmlFor="name" className={classes.label}><span className={classes.labelText}>Event name: *</span><input id="name" type='text' value={title} onChange={(e) => setTitle(e.target.value)} className={classes.inputField} required/></label>
                <label htmlFor="description" className={classes.label}><span className={classes.labelText}>Description: *</span><textarea name="event description" id="description" aria-label="event description" value={description} onChange={(e) => setDescription(e.target.value)} className={classes.textarea} required></textarea></label>
                {/* <label htmlFor="img1" className={classes.label}><span className={classes.labelText}>Upload Image 1: *</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img1" value={file1} onChange={(e) => setFile1(e.target.value)} placeholder=".jpg,.png,.webp " required /></label>
                <label htmlFor="img2" className={classes.label}><span className={classes.labelText}>Upload Image 2:</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img2" value={file2} onChange={(e) => setFile2(e.target.value)} placeholder=".jpg,.png,.webp" /></label>
                <label htmlFor="img3" className={classes.label}><span className={classes.labelText}>Upload Image 3:</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img3" value={file3} onChange={(e) => setFile3(e.target.value)} placeholder=".jpg,.png,.webp" /></label>
                <label htmlFor="img4" className={classes.label}><span className={classes.labelText}>Upload Image 4:</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="img4" value={file4} onChange={(e) => setFile4(e.target.value)} placeholder=".jpg,.png,.webp" /></label> */}
                <label htmlFor="images" className={classes.label}><span className={classes.labelText}>Upload Images: *</span><input className={`${classes.input} ${classes.fileInput}`} type="file" id="images" onChange={(e) => setImages(e.target.files)} multiple placeholder=".jpg,.png,.webp"/></label>
                <div className={classes.btns}>
                  <button className={classes.btn} type="submit">Add</button>
                  <button className={classes.btn} onClick={cancelHandler}>Cancel</button>
                </div>
            </form>
          </div>}

          {!isAdding && <div className={classes.addEvent}><button className={classes.addEventBtn} onClick={() => setIsAdding(true)}>Add Event</button></div>}
        </div>
      </div>
    </section>
  );
};

export default AdminGallery;

/*

http://localhost:5555/api/gallary/addGallary
http://localhost:5555/api/gallary/getAll
http://localhost:5555/api/gallary/:id
http://localhost:5555/api/gallary/:id

*/
