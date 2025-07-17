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
      spørsmål: "Hva er navnet på personen som har laget denne quizen?",
      alternativer: ["Geir", "Mann med formål", "Poul", "Dag Otto"],
      riktig: "Poul",
    }
  ];

  const [nåværendeSpmIndex, setNåværendeSpmIndex] = useState(0);
  const [harTrykket, setharTrykket] = useState(false);
  


  const nåværendeSpm = spørsmålListe[nåværendeSpmIndex];

  function håndterklikk(event) {
    if (harTrykket) return;

    const valgtTekst = event.target.textContent;

    if (valgtTekst === nåværendeSpm.riktig) {
      event.target.style.backgroundColor = "lightgreen";
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
 
    }
  }

  return (
    <section className="flex flex-col justify-center items-center pt-40">
      <div className="relative flex flex-col rounded-xl border-gray-50 bg-gray-100 h-80 sm:w-1/3">
        <div className="absolute top-2 right-0 -translate-x-0 -translate-y-1/2 bg-white rounded-l-sm h-32 w-0">
          <div className="absolute flex bg-gray-100 top-15 right-2 h-10 w-25 rounded-sm items-center justify-center">
            <p className="font-bold font-mono text-center text-2xl text-gray-500">
              {nåværendeSpmIndex + 1}/{spørsmålListe.length}
            </p>
          </div>
        </div>

        <div className="flex h-10 w-auto justify-center">
          <h1 className="flex font-mono text-3xl">Spørsmål {nåværendeSpmIndex + 1}</h1>
        </div>

        <div className="flex mt-4 h-10 justify-center">
          <p className="flex font-mono justify-centers text-xl">{nåværendeSpm.spørsmål}</p>
        </div>

        <div className="flex bg-gray-100 rounded-xl border-2 border-gray-200 h-full w-auto m-5 justify-center items-center">
          <div className="flex flex-col justify-center">
            <ul className="flex space-x-20 mb-10">
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
            <ul className="flex space-x-20">
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
        <ul className="flex space-x-30 justify-center items-center">
          <li>
            <button
              onClick={() => window.location.reload()}
              className="flex bg-white justify-center items-center font-mono text-lg font-bold p-2 w-50 h-15 rounded-2xl border-1 border-gray-300 hover:bg-gray-100"
            >
              Forside
            </button>
          </li>
          
        </ul>
      
      </div>
      
      <div id="container2" class="hidden" className="flex justify-center sm:w-1/3 h-40 bg-white">
              <button className="flex justify-center items-center bg-amber-300 h-30 w-30 hover:bg-gray-600"></button>
      </div>



    </section>
  );
}

export default Container1;
