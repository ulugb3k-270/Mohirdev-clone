import React, { useState } from "react";

import "./contact.scss";

import { TextField, InputLabel, Select, MenuItem, Button } from "@material-ui/core";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    course: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData)
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container container">
        <form className="contact__form" onSubmit={submitForm}>
          <h2 className="contact__form-paragraph">Konsultatsiya olish</h2>
          <p className="contact__form-text">
            Bog’lanish uchun kontaktlaringizni qoldiring. Biz siz bilan
            bog’lanamiz.
          </p>
          <TextField
            className="contact__form-input"
            label="Ismingiz"
            id="standard-size-normal"
            variant="standard"
            required
            onChange={handleChange}
            name="name"
            value={formData.name}
          />
          <div className="contact__form-number">
            <div className="flags"></div>
            <TextField
              className="contact__form-input"
              label="Telefon Raqamingiz"
              id="standard-size-normal"
              variant="standard"
              required
              onChange={handleChange}
              name="number"
              value={formData.number}
            />
          </div>
          <small className="contact__form-small">
            Agar siz chet elda bo'lsangiz, iltimos telegram orqali
            @mohirdevsales ga bog'laning.
          </small>
          <InputLabel id="demo-simple-select-standard-label" >Kurs Tanlash</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={formData.course}
            onChange={handleChange}
            label="Kursni Tanlash"
            name="course"
            className="contact__form-input"
          >
            <MenuItem value="">
              <em>Tanlash:</em>
            </MenuItem>
            <MenuItem value="Data Science va Sun'iy Intellekt">Data Science va Sun'iy Intellekt</MenuItem>
            <MenuItem value="Ilk Qadam: C va Python">Ilk Qadam: C va Python</MenuItem>
            <MenuItem value="Full Stack Java">Full Stack Java</MenuItem>
            <MenuItem value="Full Stack Python">Full Stack Python</MenuItem>
            <MenuItem value="Full Stack Javascript">Full Stack Javascript</MenuItem>
            <MenuItem value="Golang">Golang</MenuItem>
            <MenuItem value="Frontend Dasturlash">Frontend Dasturlash</MenuItem>
            <MenuItem value="IOS Dasturlash">IOS Dasturlash</MenuItem>
            <MenuItem value="Android Dasturlash">Android Dasturlash</MenuItem>
            <MenuItem value="Digital Marketing">Digital Marketing</MenuItem>
            <MenuItem value="Boshqa">Boshqa</MenuItem>
          </Select>

          <Button variant="contained" type="submit" className="contact__form-btn">Jo'natish</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
