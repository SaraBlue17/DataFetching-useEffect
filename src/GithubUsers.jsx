import { useState } from "react";
import GithubUser from "./GithubUser";

export default function GitHubUsers() {
  // Stato per memorizzare la lista degli username inseriti
  const [usernames, setUsernames] = useState([]); // Inizialmente è un array vuoto
  // Stato per memorizzare il valore dell'input
  const [input, setInput] = useState(""); // Inizialmente è una stringa vuota

  const handleSubmit = (e) => {
    e.preventDefault(); // Preveniamo l'azione predefinita di invio del form (che ricaricherebbe la pagina)

    if (input.trim()) {
      // Verifica se l'input non è vuoto o composto solo da spazi

      // Funzione di aggiornamento basata sul valore precedente per evitare problemi di asincronia
      setUsernames((prevUsernames) => [...prevUsernames, input]);

      // Resetta l'input dopo l'invio
      setInput("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} // Quando cambia il valore dell'input, aggiorniamo lo stato
          placeholder="Inserisci username"
        />
        <button type="submit">Search</button>{" "}
      </form>

      <div>
        {usernames.map(
          (
            username,
            index // Crea un nuovo array, sostituendo ogni elemento con un valore modificato
          ) => (
            <GithubUser key={index} username={username} /> // Passiamo username come prop al componente GithubUser
          )
        )}
      </div>
    </div>
  );
}

// La key serve per identificare in modo univoco un elemento, evitando che React faccia un ri-rendering di tutti gli elementi.
// Ottimiza il processo di rendering
