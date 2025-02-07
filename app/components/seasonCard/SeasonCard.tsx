import MainContentImage from "../mainContentImage/MainContentImage";
import styles from "./SeasonCard.module.css";

export default function SeasonCard() {
    const seasons = [
        { src: "/temporada1.jpg", title: "Season 1", description: "Enter the Stranger Things world with a nostalgic step back into the 80's" },
        { src: "/temporada2.jpg", title: "Season 2", description: "Discover what happened after the huge first season" },
        { src: "/temporada3.png", title: "Season 3", description: "It's time for shopping in the third season of Stranger Things" },
        { src: "/temporada4.jpg", title: "Season 4", description: "The blasting fourth season, where things get BIG" }
    ];

    return (
        <>
            {seasons.map((season, index) => (
                <div key={index} className={styles.cardSeasons}>
                    <MainContentImage src={season.src} alt={`Banner ${season.title}`} />
                    <div className={styles.content}>
                    <h2 className={styles.title}>{season.title}</h2>
                    <p className={styles.descricao}>{season.description}</p>
                    </div>
                </div>
            ))}
        </>
    );
}
