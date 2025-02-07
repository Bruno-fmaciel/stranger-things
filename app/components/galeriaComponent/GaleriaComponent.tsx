'use client';
import { useGetCharactersQuery } from "../../redux/api";
import styles from "@/app/components/galeriaComponent/Galeria.module.css";

export default function GaleriaComponent() {
    const { data, error, isLoading } = useGetCharactersQuery();

  if (isLoading) return <p className={styles.message}>Carregando...</p>;
  if (error) return <p className={styles.message}>Erro ao carregar dados.</p>;

  return (
    <>
      <h1 className={styles.title}>Galeria de Personagens</h1>
      <div className={styles.gallery}>
        {data?.map((character, index) => (
          <div key={character.id || index} className={styles.card}>
            <img src={character.photo} alt={character.name} className={styles.photo} />
            <p className={styles.name}>{character.name}</p>
          </div>
        ))}
      </div>
    </>

  );
};