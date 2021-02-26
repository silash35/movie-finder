import Love from "../loveIcon";
import styles from "./aboutCard.module.scss";

export default function AboutCard() {
  return (
    <article className={styles.card}>
      <p>
        O ALIS é uma plataforma voltada para a comunidade surda a fim de minimizar as dificuldades
        desse público na procura de locais inclusivos. Aqui você pode contribuir registrando um
        lugar que você foi e tinha uma tecnologia pra facilitar a comunicação com surdos ou
        interprete.
      </p>
      <Love />
    </article>
  );
}