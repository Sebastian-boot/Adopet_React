'use client';
import React, { useState } from 'react';
import styles from './styles.module.css';

const ReportStrayAnimalForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [photo, setPhoto] = useState(null);
    const [description, setDescription] = useState('');
    const [breed, setBreed] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ name, age, photo, description, breed });
    };

    return (
        <section>
            <div className={styles.context}>
                <h4>Reportar Animal Abandonado</h4>
                <p>Por favor, llena los siguientes campos para reportar un animal abandonado</p>
            </div>

            <div className={styles.formDiv}>
                <div className={styles.context}>
                    <h3>Datos del animal</h3>
                </div>
                <form onSubmit={handleSubmit} className={styles.inputs}>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className={styles.inputslogin} />
                    <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} className={styles.inputslogin} />
                    <input type="file" onChange={(e) => setPhoto(e.target.files[0])} className={styles.inputslogin} />
                    <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className={styles.inputslogin} />
                    <input type="text" placeholder="Breed" value={breed} onChange={(e) => setBreed(e.target.value)} className={styles.inputslogin} />
                    <button type="submit" className={styles.inputslogin}>Submit</button>
                </form>
            </div>
        </section>
    );
};

export default ReportStrayAnimalForm;