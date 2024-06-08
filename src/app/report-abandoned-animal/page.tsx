"use client"
import React from 'react';
import styles from "./styles.module.css"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod";
import { animalSchema } from '@/validations/animalSchema';

const ReportAbandonedAnimal = () => {

  const {register, handleSubmit, watch, formState: {errors}} = useForm({
    resolver: zodResolver(animalSchema),
  });

  return (
    <section className={styles.continaer}>
      <div className={styles.context}>
                <h4>Reportar Animal Abandonado</h4>
                <p>Por favor, llena los siguientes campos para reportar un animal abandonado</p>
            </div>
      <div>
      <h2>Datos del animal</h2>

      <form onSubmit={handleSubmit(data => {console.log})}>
        <div>
          <label>Nombre</label>
            <input type="text" id="name" className={styles.inputs} 
            {...register("name", {required: true})}
            />
        </div>
        <div>
          <label>Edad</label>
            <input type="text" id="" className={styles.inputs} 
            {...register("age", {required: true})}
            />
        </div>
        <div>
          <label>Imagen</label>
            <input type="text" id="" className={styles.inputs} 
            {...register("image", {required: true})}
            />
        </div>
        <div>
          <label>Descripcion</label>
            <input type="text" id="" className={styles.inputs} 
            {...register("description", {required: true})}
            />
        </div>
        <div>
          <label>Especie</label>
            <input type="text" id="" className={styles.inputs} 
            {...register("especie", {required: true})}
            />
        </div>
        <div>
          <label>Raza</label>
            <input type="text" id="" className={styles.inputs} 
            {...register("race")}  
            />
        </div>
        <div>
          <label>Sexo</label>
          <select id="sex" {...register("sex")}>
            <option value="Macho">Macho</option>
            <option value="Hembra">Hembra</option>
          </select>

        </div>
        <div>
          <label>Color</label>
          <input type="text" className={styles.inputs} 
          {...register("coat_color", {required: true})}
          />
        </div>
        <div>
          <label>Peso</label>
          <input type="text" className={styles.inputs} 
          {...register("weight")}
          />
        </div>
        <input type="submit" value="Enviar información" className={styles.submit}/>
      </form>

      <div>
        {JSON.stringify(watch(), null, 2)}
      </div>
    </div>
    </section>
    
  )
}

export default ReportAbandonedAnimal;
