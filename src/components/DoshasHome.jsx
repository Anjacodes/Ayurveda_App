import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDoshas } from '../redux/doshas/doshasSlice';
import promote from '../assets/images/promote.png';

function DoshasHome() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoshas());
  }, []);

  const { doshas, loading } = useSelector((state) => state.doshas);

  if (loading) return (<h3>Loading...</h3>);

  return (
    <div className="h-[100vh] bg-[#f3efeb] text-center px-[15%] border-2 border-solid border-b-[#aa1640]">
      <h2 className="mt-[15%] font-elanor text-6xl">The Three Doshas</h2>
      <div className="grid grid-cols-3">
        {doshas.map((dosha) => {
          return (
            <div key={dosha.id} className="relative group">
              <Link to={`/${dosha.id}`}>
                <img src={promote} alt="promote confetti" className="absolute z-1 opacity-30 hidden group-hover:block" />
                <img src={dosha.image} alt="dosha" className="z-[1000] transition-transform hover:cursor-pointer hover:scale-125" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DoshasHome;
