import style from './css/syles.module.css';

export default function Target() {
  return (
    <main>
      <div className={style.containerTarget}>
        <div>
          <img className={style.img} src="imagenes/animal.png" alt="#" />
        </div>
        <div className={style.container}>
          <div className={style.title}>
            <div>Nombre: </div>
            <div>Raza: </div>
            <div>Edad: </div>
          </div>
          <div>
            <div>Firulais</div>
            <div>Bull-terrier</div>
            <div>2 años</div>
          </div>
        </div>
      </div>
    </main>
  );
}