import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import yogaDeck from '../assets/images/yogaDeck.jpg';
import questions from './quizQuestions';

function DoshaQuiz() {

  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [answer1Count, setAnswer1Count] = useState(0);
  let [answer2Count, setAnswer2Count] = useState(0);
  let [answer3Count, setAnswer3Count] = useState(0);

  let yourDosha = answer1Count > answer2Count && answer1Count > answer3Count ? "Vata" : answer2Count > answer1Count && answer2Count > answer3Count ? "Pitta" : "Kapha";

  const doshas = ["Pitta", "Vata", "Kapha"];

  const handleSelect = (value) => {
    switch (value) {
        case 1:
          setAnswer1Count(answer1Count++);
          break;
        case 2:
          setAnswer2Count(answer2Count++);
          break;
        case 3:
          setAnswer3Count(answer3Count++);
          break;
        default:
          console.log("Error");
    }
        setCurrentQuestion(currentQuestion++)
  }

  return (
    <div className="flex flex-col items-center bg-[#f3efeb] relative pb-12">
        <div className="flex justify-between h-full">
            <div className="mt-[30vh] ml-[5vw]">
                <p>TAKE THE QUIZ</p>
                <h2 className="font-elanor text-6xl">Discover your Dosha</h2>
                <p className="mt-6 w-[80%] text-xl">Learn what makes you unique and unpack a whole world of personalized healthcare recommendations for feeling your best.</p>
            </div>
            <img src={yogaDeck} className="w-[50%]"/>
        </div>
        <div className="flex justify-between px-[5vw] py-[40vh] bg-[#efdcdc] h-[100vh]">
            <div>
                <p>DOSHA QUIZ</p>
                <h2 className="font-elanor text-5xl text-[#aa1640]">An introduction to Doshas</h2>
            </div>
           <div className="w-[50%] text-justify">
                <p className="text-lg">In Ayurveda, each of us has a unique mind-body type, known as a dosha. Think of a dosha as your individual blueprint that describes your unique personality, tendencies, and physical nature. Understanding your dosha reveals how to keep yourself in balance to stay happy, healthy and disease free.</p>
                <br/>
                <p className="text-lg">By gathering information in this quiz, we’ll give you a breakdown of your specific dosha blend along with personalized practices for mind, body and spirit well-being.</p>
           </div>
        </div>
        <div className="h-[100vh] px-[5vw] pt-[17vh] text-justify">
            <h2 className="font-elanor text-4xl mb-6">Discover your mind-body type</h2>
           <div>
                <p className="text-lg">Answer each question as objectively as possible, selecting the option that best describes yourself for most of your life, not necessarily in this moment or situationally. If you’re having a hard time doing so, try selecting the option that best describes someone similar to you.</p>
                <br />
                <p className="text-lg">If you developed an illness in childhood or as an adult, think of how things were for you before that illness. If more than one quality is applicable in each characteristic, choose the one that applies the most.</p>
           </div>
           {currentQuestion < 10 ?
           <div className="mt-12 bg-[#efdcdc] px-10 py-16 rounded-lg flex flex-col justify-between">
               <h3 className="mb-10 font-elanor text-3xl text-[#aa1640]">{questions[currentQuestion].question}</h3>
               <ul className="flex items-center justify-between">
                   {questions[currentQuestion].answers.map((answer) => {
                       return <li key={answer.id} className="mr-6 mb-4 rounded-xl bg-[#f3efeb] shadow-lg p-6 hover:cursor-pointer hover:bg-[#aa1640] hover:text-white" onClick={() => {handleSelect(answer.id)}}>{answer.text}</li>
                    })}
               </ul>
               <p className="mt-auto">Question: {currentQuestion+1}/10</p>
           </div>
           :
           <div className="mt-12 bg-[#efdcdc] px-10 py-16 rounded-lg flex flex-col items-center">
                <h2 className="font-mundial text-2xl mb-6">Your dosha is: <Link to={`/${doshas.indexOf(yourDosha)+1}`} className="text-[#aa1640] font-elanor text-4xl">{yourDosha}</Link></h2>
                <ul>
                    <li>Vata: {answer1Count / 10 * 100}%</li>
                    <li>Pitta: {answer2Count / 10 * 100}%</li>
                    <li>Kapha: {answer3Count/10 * 100}%</li>
                </ul>
           </div>
           }
        </div>
    </div>
  );
};

export default DoshaQuiz;
