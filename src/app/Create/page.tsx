import "./globals.css";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Account() {
    return (
        <main>
            <div className={styles.textLeft}>
                <div className={styles.logo}>
                    <div className={styles.textLogo}>
                        <h3>Uniendo comunidades y rescatistas</h3>
                    </div>
                    <img className={styles.img} src="imagenes/Title.png" alt="" />
                </div>
            </div>
            <div>
                <h3 className={styles.textForm}>Crea tu cuenta de <span>Adopet</span></h3>
                <p className={styles.parrafo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam culpa provident laboriosam perspiciatis a laborum deserunt? Veniam odit necessitatibus repellat neque amet architecto. Unde, ullam! Temporibus fugit ipsam eligendi cupiditate.</p>
                <div>
                    <form className={styles.form} action="#">
                        <div>
                            <input className="inputs" type="text" name="" id="" placeholder="Nombre" />
                            <input className="inputs" type="text" name="" id="" placeholder="Apellido" />
                        </div>
                        <div>
                            <input className="inputs" type="text" name="" id="" placeholder="N° de Documento" />
                            <input className="inputs" type="date" name="" id="" placeholder=" Fechade nacimineto" />
                        </div>
                        <div>
                            <input className="inputs" type="text" name="" id="" placeholder="N° de Telefono" />
                        </div>
                        <div>
                            <input className={styles.input} type="text" name="" id="" placeholder="Direccion" />
                        </div>
                        <div>
                            <input className="inputs" type="text" name="" id="" placeholder="Nombre de usuario" />
                            <input className="inputs" type="email" name="" id="" placeholder="Correo" />
                        </div>
                        <div>
                            <input className="inputs" type="password" name="" id="" placeholder="Contraseña" />
                            <input className="inputs" type="password" name="" id="" placeholder="Confirmar contraseña" />
                        </div>
                        <div className={styles.checkbox}>
                            <input type="checkbox" name="" id="" />
                            <Link href="#">Acepto terminos y condiciones</Link>
                        </div>
                        <div className={styles.button}>
                            <button className={styles.buttonR}>Registrarme como fundacion</button>
                            <button className={styles.buttoL} type="submit">Registrarme</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
