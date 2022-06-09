import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../redux/doshas/doshaDetailsSlice';

function DoshaDetails() {
  const params = useParams();
  const doshaId = params.dosha_id
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetails(doshaId))
  }, [])


  const { loading, doshaDetails } = useSelector(state => state.doshaDetails)

  if (loading) return <h2>Loading...</h2>

  if (doshaDetails.length !== 0) {
    return (
      <div className="flex flex-col items-center mx-[10vw] pt-[25vh]">
        <div className="flex items-center">
          <img src={doshaDetails.image} className="w-[20vw]"/>
          <div>
            <h2 className="font-elanor text-2xl">{doshaDetails.name}</h2>
            <h3>{doshaDetails.subtitle}</h3>
            <h3>Elements: {doshaDetails.elements}</h3>
          </div>
        </div>
        <div className="flex text-justify gap-10">
          <div>
            <h2 className="self-start mb-3">Description:</h2>
            <p>{doshaDetails.description}</p>
          </div>
          <div>
            <h2 className="self-start mb-3">Diet:</h2>
            <p>{doshaDetails.diet}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return <h2>There is nothing here to display...</h2>
  }
}

export default DoshaDetails;
