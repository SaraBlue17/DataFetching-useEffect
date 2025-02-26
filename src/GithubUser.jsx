// Componente GithubUser che riceve username come prop, recupera i dati dell'utente da Github API per poi mostrarli
import { useEffect, useState } from "react";

// Componente per visualizzare i dati di un singolo utente Github
export default function GithubUser({ username }) {
  const [data, setData] = useState(null); // Stato per memorizzare i dati dell'utente,

  useEffect(() => {
    // useEffect in questo caso serve per recuperare i dati quando il componente viene montato o quando "username" cambia
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json()) // Trasforma la risposta in formato JSON
      .then((json) => setData(json)) // Salviamo i dati nello state (?)
      .catch((error) => console.error("Error during data fetch", error)); // Per gestire eventuali errori
  }, [username]); // Effettua il fetch ogni volte che "username" cambia

  return (
    <div>
      {data ? (
        <>
          <p>{data.name}</p>
          <p>{data.login}</p>
          <img src={data.avatar_url} alt={data.name} width={200} height={200} />
        </>
      ) : (
        <p>Loading...</p> // Se i dati sono disponibili, li visualizziamo, altrimenti mostriamo un messaggio di caricamento
      )}
    </div>
  );
}
