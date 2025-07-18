'use client'
import React, { useState } from 'react'


function Container1() {
  const spørsmålListe = [
    {
      spørsmål: "Hvilket dyr har best hukommelse?",
      alternativer: ["Katt", "Hund", "Kråke", "Elefant"],
      riktig: "Elefant",
    },
    {
      spørsmål: "Hvem skrev 'Romeo og Julie'?",
      alternativer: ["William Shakespear", "Charles Dickens", "J.K. Rowling", "Henrik Ibsen"],
      riktig: "William Shakespear",
    },
    {
      spørsmål: "Hvilken farge får du når du blander blått og gult?",
      alternativer: ["Grønn", "Lilla", "Oransje", "Brun"],
      riktig: "Grønn",
    },
    {
      spørsmål: "Hva er hovedstaden i Australia?",
      alternativer: ["Sydney", "Melbourne", "Canberra", "Perth"],
      riktig: "Canberra",
    }, 

    {
      spørsmål: "Hva heter hovedstaden i Frankrike?",
      alternativer: ["Nantes", "Paris", "Marseille", "Nice"],
      riktig: "Paris",
    },
    {
      spørsmål: "Hvilket land er kjent som 'Solens rike'?",
      alternativer: ["Norge", "England", "Japan", "USA"],
      riktig: "Japan",
    },
    {
      spørsmål: "Hvilket språk snakker man i Brasil?",
      alternativer: ["Spansk", "Portugisisk", "Engelsk", "Brasiliansk"],
      riktig: "Portugisisk",
    },
    {
      spørsmål: "Hva heter planeten som ligger nærmest sola?",
      alternativer: ["Merkur", "Venus", "Jupiter", "Mars"],
      riktig: "Merkur",
    },
    {
      spørsmål: "Hva heter verdens lengste elv?",
      alternativer: ["Amazonas", "Yangtze", "Snurrestrømmen", "Nilen"],
      riktig: "Nilen",
    }, 

    {
      spørsmål: "Hvem var den første personen som gikk på månen?",
      alternativer: ["Richard Walker", "David Collins", "Neil Armstrong", "Dag Otto Lauritzen"],
      riktig: "Neil Armstrong",
    }
  ];

  const [nåværendeSpmIndex, setNåværendeSpmIndex] = useState(0);
  const [harTrykket, setharTrykket] = useState(false);
  const [scoreboard, setScoreboard] = useState(false);
  const [poengsum, SetPoengsum] = useState(0);
  const [maxScore, setMaxScore] = useState(10);


  const nåværendeSpm = spørsmålListe[nåværendeSpmIndex];

  if(scoreboard) {
    return (
      <section className="flex flex-col justify-center items-center pt-40">
        <h1 className="text-4xl text-red-600 font-bold font-mono mb-4">Scoreboard</h1>
        <p className="text-xl font-mono">Du har fullført quizen</p>
        
        {poengsum !== maxScore ? (
          <p className="text-3xl font-mono text-center mt-5">Du fikk {poengsum} av {spørsmålListe.length} riktige!!</p>
        ) : (
          <p className="text-3xl font-mono text-center mt-5">Du fikk alt riktig!! - {poengsum} av {spørsmålListe.length}!!</p>
        )
      }
        <button onClick={() => window.location.reload()} className="flex bg-white justify-center items-center font-mono text-lg font-bold p-2 mt-5 w-50 h-15 rounded-2xl border-1 border-gray-300 hover:bg-gray-100">Spill igjen</button>
      </section>
    );
  }

  function håndterklikk(event) {
    if (harTrykket) return;

    const valgtTekst = event.target.textContent;

    if (valgtTekst === nåværendeSpm.riktig) {
      event.target.style.backgroundColor = "lightgreen";
      SetPoengsum((prev) => prev + 1);//Øker poengsum
    } else {
      event.target.style.backgroundColor = "lightcoral";
      const knapper = document.querySelectorAll("button.svar-knapp");
      knapper.forEach((knapp) => {
        if (knapp.textContent === nåværendeSpm.riktig) {
          knapp.style.backgroundColor = "lightgreen";
        }
      });
    }

    setharTrykket(true);
  }

  function nesteSpørsmål() {
    const knapper = document.querySelectorAll("button.svar-knapp");
    knapper.forEach((knapp) => {
      knapp.style.backgroundColor = "white";
    });
    setharTrykket(false);

    if (nåværendeSpmIndex < spørsmålListe.length - 1) {
      setNåværendeSpmIndex(nåværendeSpmIndex + 1);
    } else {
      setScoreboard(true);
    }
  }

  return (
    <section className="flex flex-col justify-center items-center pt-40">
      <div className="relative flex flex-col rounded-xl border-gray-50 bg-gray-100 w-1/3 h-80 p-4
                max-sm:w-11/12 max-sm:h-auto">
        <div className="absolute top-2 right-0 -translate-x-0 -translate-y-1/2 bg-white rounded-l-sm h-32 w-0">
          <div className="absolute flex top-12 -right-3 h-13 w-25 items-center justify-center">
            <p className="font-bold font-mono text-center text-2xl text-gray-500">
              {nåværendeSpmIndex + 1}/{spørsmålListe.length}
            </p>
          </div>
        </div>

        <div className="flex h-10 w-auto justify-center">
          <h1 className="flex font-mono text-3xl">Spørsmål {nåværendeSpmIndex + 1}</h1>
        </div>

        <div className="flex mt-4 h-10 justify-center">
          <p className="flex font-mono text-center text-xl">{nåværendeSpm.spørsmål}</p>
        </div>

        <div className="flex bg-gray-100 rounded-xl border-2 border-gray-200 h-full w-auto m-5 justify-center items-center">
          <div className="flex flex-col justify-center">
            <ul className="flex space-x-20 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-4 mb-10">
              {nåværendeSpm.alternativer.slice(0, 2).map((alternativ, index) => (
                <li key={index}>
                  <button
                    onClick={håndterklikk}
                    className="svar-knapp flex bg-white border rounded-md w-50 h-16 justify-center items-center font-mono hover:bg-gray-100"
                  >
                    {alternativ}
                  </button>
                </li>
              ))}
            </ul>
            <ul className="flex space-x-20 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-4">
              {nåværendeSpm.alternativer.slice(2).map((alternativ, index) => (
                <li key={index}>
                  <button
                    onClick={håndterklikk}
                    className="svar-knapp flex bg-white border rounded-md w-50 h-16 justify-center items-center font-mono hover:bg-gray-100"
                  >
                    {alternativ}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-center sm:w-1/3 h-40">
        <ul className="flex space-x-30 justify-center items-center max-sm:flex-col max-sm:space-x-0 max-sm:space-y-4 w-full">
          <li>
            <button
              onClick={() => window.location.reload()}
              className="flex bg-white justify-center items-center font-mono text-lg font-bold p-2 w-50 h-15 rounded-2xl border-1 border-gray-300 hover:bg-gray-100"
            >
              Forside
            </button>
          </li>
          <li>
            <button
              onClick={nesteSpørsmål}
              className="flex bg-white justify-center items-center font-mono text-lg font-bold p-2 w-50 h-15 rounded-2xl border-1 border-gray-300 hover:bg-gray-100"
            >
              {nåværendeSpmIndex === spørsmålListe.length - 1 ? "Vis resultater" : "Neste spørsmål"}
            </button>
          </li>
          
        </ul>
      
      </div>
      
      



    </section>
  );
}

export default Container1;
