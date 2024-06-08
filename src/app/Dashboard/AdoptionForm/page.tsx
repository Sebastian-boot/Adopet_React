import "./global.css";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <section className={styles.section}>
      <div className={styles.text}>
        <h3 className={styles.title}>Adopciones</h3>
        <p className={styles.parrafo}>¡Aqui podrias darles un hogar a aquellos listos para conseguir una familia!</p>
      </div>
      <div className={styles.text}>
        <div className={styles.container}>
          <div className={styles.textForm}>
            <h2>Datos del Animal</h2>
            <p className={styles.parrafoForm}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia incidunt esse, dicta veniam sit sunt. Molestias, sequi cumque dicta voluptatum dolore aspernatur velit quos, aperiam beatae molestiae quidem suscipit iusto.</p>
          </div>
          <form className={styles.form} action="#">
            <div className={styles.containerForm}>
              <div>
                <h3 className={styles.titleForm}>Nombre y Edad</h3>
                <h3 className={styles.titleForm}>Agregar Una imagen del animal</h3>
                <h3 className={styles.titleForm1}>Descripcion del animal</h3>
                <h3 className={styles.titleForm2}>Especie y Raza</h3>
                <h3 className={styles.titleForm2}>Otras Caracteristicas</h3>
              </div>
              <div className={styles.inputs}>
                <div>
                  <input className={styles.inputForm} type="text" name="" id="" placeholder="Nombre" />
                  <input className={styles.inputForm} type="text" name="" id="" placeholder="Edad" />
                </div>
                <div>
                  <input className={styles.file} type="file" src="#" alt="#" />
                </div>
                <div>
                  <textarea className={styles.inputtextForm} name="" id="" placeholder="Descripcion"></textarea>
                </div>
                <div>
                  <input className={styles.inputForm} type="text" name="" id="" placeholder="Especie" />
                  <input className={styles.inputForm} type="text" name="" id="" placeholder="Raza" />
                </div>
                <div>
                  <select className={styles.inputForm}>
                    <option disabled selected>Sexo</option>
                    <option value="#">Hombre</option>
                    <option value="#">Perra</option>
                  </select>
                  <input className={styles.inputForm} type="text" name="" id="" placeholder="Color" />
                </div>
                <div>
                  <input className={styles.inputForm} type="text" name="" id="" placeholder="Peso" />
                </div>
              </div>
            </div>
            <div className={styles.button}>
              <button className={styles.buttonForm} type="submit">Siguiente</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
