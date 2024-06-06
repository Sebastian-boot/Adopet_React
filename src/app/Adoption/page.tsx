import "./globals.css";
import styles from './styles.module.css';
import { BiMenuAltLeft } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiMiniUserCircle } from "react-icons/hi2";
import Target from '../Components/target';
import Link from "next/link";

export default function Adoption() {
    return (
        <>
            <nav className={styles.nav}>
                <BiMenuAltLeft className={styles.menu} />
                <div className={styles.search}>
                    <Link href={"#"}><IoSearchOutline className={styles.icon} /></Link>
                    <input className={styles.input} type="search" name="" id="" placeholder="Buscar en Adopet" />
                </div>
                <Link href={"#"}><IoNotificationsOutline className={styles.notification} /></Link>
                <div className={styles.user}>
                    <HiMiniUserCircle className={styles.face} />
                    <h5 className={styles.name}>User</h5>
                </div>
            </nav>
            <section className={styles.section}>
                <div className={styles.text}>
                    <h3 className={styles.title}>Adopciones</h3>
                    <p className={styles.parrafo}>¡Aqui podrias darles un hogar a aquellos listos para conseguir una familia!</p>
                </div>
                <div className={styles.text}>
                    <div className={styles.container}>
                        <div className={styles.form}>
                            <p className={styles.titleForm}>Filtrar por:</p>
                            <div>
                                <h5 className={styles.FromText}>Nombre</h5>
                                <div className={styles.containerForm}>
                                    <input className={styles.formInput} type="search" name="" id="" placeholder="Firulais, Hashiko, etc..." />
                                    <button className={styles.formbutton} type="submit">Buscar</button>
                                </div>
                                <h5 className={styles.FromText1}>RAZA</h5>
                                <div className={styles.containerForm}>
                                    <select className={styles.formInput1} name="" id="">
                                        <option value="#">Pastor Aleman</option>
                                        <option value="#">Golden</option>
                                    </select>
                                </div>
                                <h5 className={styles.FromText1}>EDAD</h5>
                                <div className={styles.containerForm}>
                                    <select className={styles.formInput1} name="" id="">
                                        <option value="#">Pastor Aleman</option>
                                        <option value="#">Golden</option>
                                    </select>
                                </div>
                                <h5 className={styles.FromText1}>FUNDACION</h5>
                                <div className={styles.containerForm}>
                                    <select className={styles.formInput1} name="" id="">
                                        <option value="#">Pastor Aleman</option>
                                        <option value="#">Golden</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={styles.containerTarget}>
                            <Target />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
