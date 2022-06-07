import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDoshas } from '../redux/doshas/doshasSlice';

function DoshasHome() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoshas());
  }, []);

  const { doshas, loading } = useSelector((state) => state.doshas);

  doshas.forEach((dosha) => { console.log(dosha.image); });

  if (loading) return (<h3>Loading...</h3>);

  return (
    <div className="h-[100vh] bg-[#f3efeb] text-center px-[15%] border-2 border-solid border-b-[#aa1640]">
      <h2 className="mt-[15%] font-elanor text-6xl">The Three Doshas</h2>
      <div className="grid grid-cols-3">
        {doshas.map((dosha) => {
            return (
              <div key={dosha.id}>
                <Link to={`/${dosha.id}`} >
                  <img src={dosha.image} alt="dosha image" className="hover:cursor-pointer"/>
                </Link>
              </div>
            )
        })}
    </div>
    </div>
  )
}

export default DoshasHome