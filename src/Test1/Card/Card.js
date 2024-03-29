import style from "./Card.module.css"

export function Card({cardData}) {
    return (
        <li className={style.container}>
            <h2>{cardData.header}</h2>
            <ul  >
                {cardData.options.map((el) => (
                    <li key={el}>{el}</li>
                ))}
            </ul>
            <p>{cardData.text}</p>
        </li>
    )
  }