'use client'
import Image from "next/image";
import { useState } from "react";
import Navigasjon from './components/nav/navigasjon.jsx';
import Container1 from './components/container/container1.jsx';
import Forside from './components/startside/forside.jsx';

export default function Home() {
    const [quizStart, setQuizStart] = useState(false);

    function startQuiz() {
      setQuizStart(true);
    }

    let innhold;

    if(quizStart === false) {
      innhold = <Forside startQuiz = {startQuiz} />;
    } else {
      innhold = <Container1 />
    }



  return (
    
    <div className="overflow-x-hidden">
      <Navigasjon />
      {innhold}
    </div>
  );
}
