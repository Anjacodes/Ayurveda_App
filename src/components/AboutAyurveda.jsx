import React from 'react';
import stones from '../assets/images/stones.jpg'

function AboutAyurveda() {
  return (
    <div className="flex flex-col items-center bg-[#f3efeb]">
      <div className='flex h-full items-center'>
        <img src={stones} alt="image of stones" className="w-[50%] object-fit" />
        <div className="flex flex-col items-center w-[50%] ml-10">
          <h2 className="font-elanor text-6xl text-[#aa1640]">Ayurveda</h2>
          <p className="text-xl">The Science of Life</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="h-[100vh] pt-[30vh] bg-[#e2d5e7] px-[10vw] ">
          <p className="leading-loose">Our five senses serve as the portals between the internal and external realms, as the five great elements of ether, air, fire, water, and earth dance the dance of creation around and within us. Ayurveda groups these five elements into three basic types of energy and functional principles that are present in everybody and everything. Since there are no single words in English to describe these principles; we use the Sanskrit words Vata, Pitta, and Kapha to describe their combinations.</p>
          <br/>
          <p className="leading-loose">Everything that we experience, be it a physical substance, a thought, or emotion, has certain qualities. The ancient texts of Ayurveda classify these qualities — called gunas in Sanskrit — into 10 pairs of opposites, making 20 qualities total (for example, heavy vs. light). Theoretically, everything in the universe can be described in terms of these gunas, or qualities, including the doshas. The foundation of Ayurvedic treatment relies upon recognizing when gunas have become excessive or deficient, as this is known to cause doshic imbalance and lead to disease. Ayurveda applies the opposite qualities to return to balance.</p>
        </div>

        <div className="flex h-[100vh] items-center px-[10vw]">
          <h3 className="w-[50%]">Agni - The digestive fire</h3>
          <p className="w-[50%]">Agni, the universal principle of transformation that manifests as our digestive fire, mediates between the internal and external, transforming food into bodily tissue and waste; interpreting information into experiential knowledge; and discerning between nutritious material and waste product. Ayurveda kindles the agni of the body to digest toxins which have manifested due to internal or external stresses, ensuring optimal functioning of the physical and mental being.</p>
        </div>
        <p>Leveraging these basic principles, Ayurveda customizes preventative wellness to the unique constitution of every individual. In addition, ancient Ayurvedic doctors produced detailed descriptions of acute and chronic conditions (complete with causes, signs, and symptoms), and developed extensive holistic treatment protocols. Preventative care and treatment of disease falls under Ayurveda’s eight branches, which include:</p>
     <ul>
        <li>● Kaayachikitsa – Internal Medicine</li>
        <li>● Baalachikitsa – Pediatrics</li>
        <li> ● Bhuta Vidya – Psychiatry</li>
        <li>● Shalakya Tantra – Ear, Nose and Throat Treatment</li>
        <li>● Shalya Tantra – Surgery (not practiced in the United States today)</li>
        <li>● Vishagara Vairodh Tantra – Toxicology</li>
        <li>● Jarachikitsa/Rasayana – Geriatrics and Rejuvenation</li>
        <li>● Vajikarana — Aphrodisiac Therapy, Fertility, and Conception</li>
     </ul>
      <p>In addition, Ayurveda offers one of the world’s most comprehensive cleansing protocols, known as panchakarma. This ancient practice uses five primary therapies to release and eliminate accumulated toxins from deep within the tissues, and return the doshas to their proper seats in the body.</p>
      <p>Ayurveda offers renewed access to our natural intelligence. As the original circadian medicine, Ayurveda holds the key to resolving dis-ease creating a disconnect. Thus, this ancient medicine offers the promise of a more harmonious future for the people and planet.</p>
      </div>
    </div>
  );
}

export default AboutAyurveda;
