import styles from "./styles.module.css"
import "./globals.css";

export default function Login() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.Login}>
          <div className={styles.title}>
            <h3>Iniciar Sesion</h3>
          </div>
          <div className={styles.inputs}>
            <input className={styles.inputslogin} type="text" placeholder="Nombre deUsuario o Email" />
            <input className={styles.inputslogin} type="password" name="#" id="#" placeholder="Contraseña" />
            <div className={styles.checkbox}>
              <input type="checkbox" name="#" id="#" />
              <h5>Recordar Inicio de sesion</h5>
            </div>
          </div>
          <div className={styles.button}>
            <button className={styles.iniciar} type="submit">Iniciar Sesion</button>
            <button className={styles.crear} type="submit">Crear Cuenta</button>
          </div>
        </div>
        <div className={styles.Textright}>
          <h4 className={styles.parrafo}>Que gutos verte de nuevo</h4>
          <h2 className={styles.titletext}>Bienvenido de nuevo</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos natus libero earum corporis, quam
            odio, suscipit consequuntur optio a deserunt expedita illo accusamus atque sit quidem distinctio quae
            vel! Totam.</p>

        </div>
      </div>
    </main>
  );
}
