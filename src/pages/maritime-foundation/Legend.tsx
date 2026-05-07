import React from 'react';
import MaritimeFoundationLayout from '@/components/maritime-foundation/MaritimeFoundationLayout';

const Legend: React.FC = () => {
  const achievements = [
    'Founder of Academy of Maritime Education and Training (1993), India\u2019s first Maritime Deemed-to-be University and one of the world\u2019s leading maritime knowledge hubs.',
    'Visionary educationist behind the establishment of AMET Knowledge Park, a large integrated educational ecosystem housing advanced maritime training centres, simulation facilities, research hubs, and industry-supported academies.',
    'Founder of Sarasvati Institute of Medical Sciences, Hapur, Uttar Pradesh, a leading medical education and healthcare institution with a multi-speciality teaching hospital.',
    'Pioneer of India\u2019s innovative \u201CAdmission with Appointment Order\u201D model through long-standing collaborations with global shipping leaders including A.P. Moller Maersk, V.Ships, Fleet Management, and Pacific International Lines, ensuring strong industry-linked career pathways for students.',
    'Instrumental in establishing landmark initiatives such as the Maersk Centre of Excellence and V.Ships Learning Academy, strengthening globally benchmarked maritime education and professional training.',
    'Founder of New Era Association of Educated Self Employed Youth (NAESEY), one of Tamil Nadu\u2019s pioneering rural development and self-employment organizations, which has positively impacted more than 1.5 lakh families through free skill development, vocational training, entrepreneurship promotion, and employment initiatives.',
    'Invited by the United States Information Service (USIS) as an International Visitor in recognition of his distinguished contributions to community development and social empowerment initiatives.',
    'Conferred with an Honorary Doctorate by York St John University, United Kingdom, in recognition of his outstanding contributions to education, social development, and youth empowerment.',
    'Recipient of Maritime Excellence Achievers Award 2025 for Maritime Education and Skill Development at India Maritime Week 2025. The award was presented by Shri Sarbananda Sonowal, Hon\u2019ble Minister of Ports, Shipping and Waterways on 30th October 2025.',
    'Recipient of the prestigious \u201CMaritime Excellence Achievers Award 2023\u201D presented during the Global Maritime India Summit for contributions to maritime education and national maritime development.',
    'Honoured with the \u201CLifetime Achievement Award 2017\u201D by Shri Nitin Gadkari, former Union Minister for Shipping, Government of India, recognizing his exceptional contributions to maritime education and capacity building.',
    'Recipient of the National Maritime Day Award for Excellence instituted by the Ministry of Shipping, Government of India, for lifetime contributions to the Indian maritime sector.',
    'Recipient of the prestigious \u201CSagar Gaurav Puraskar Award\u201D conferred in recognition of his outstanding and enduring contributions to maritime education, maritime capacity building, and the development of India\u2019s seafaring ecosystem.',
    'Recipient of the Times of India \u2013 \u201CEdupreneur 2012 Award\u201D for Education from His Excellency Shri K Rosiah, the then Governor of Tamil Nadu.',
    'Under his leadership, AMET has secured major national and international recognitions including NAAC \u2018A\u2019 Grade accreditation, NBA accreditation, repeated A1 (Outstanding) grading from the Directorate General of Shipping, and top global rankings in the PIMET ranking of IAMU.',
  ];

  return (
    <MaritimeFoundationLayout title="Dr. J. Ramachandran – A Maritime Legend">
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          Dr. J. Ramachandran, Founder-Chancellor of Academy of Maritime Education and Training, is widely
          recognized for transforming maritime education in India through visionary leadership, global
          collaborations, and industry-integrated academic models. Starting AMET in 1993 with just 14 cadets,
          he led its evolution into India&rsquo;s first Maritime Deemed-to-be University and a globally
          recognized maritime knowledge hub.
        </p>
        <p>
          Under his leadership, AMET pioneered the innovative &ldquo;Admission with Appointment Order&rdquo;
          model through its long-standing association with A.P. Moller Maersk, enabling cadets to secure
          employment opportunities at the time of admission itself. This unique industry-linked model has
          subsequently expanded through collaborations with leading international shipping companies like
          V.Ships, strengthening placement-oriented maritime education in India.
        </p>
        <p>
          Driven by his vision of creating integrated centres of excellence, Dr. Ramachandran established the
          AMET Knowledge Park, a large-scale educational ecosystem hosting advanced maritime training
          infrastructure, industry-supported centres, and multidisciplinary institutions. The campus houses
          landmark initiatives such as the Maersk Centre of Excellence and the V.Ships Learning Academy,
          reinforcing AMET&rsquo;s position as a preferred global partner for maritime education and training.
        </p>
        <p>
          Beyond maritime education, his educational initiatives expanded into healthcare and multidisciplinary
          education through institutions such as Sarasvati Institute of Medical Sciences and other academic
          establishments. His contributions to education, skill development, industry integration, and
          maritime capacity building have earned national and international recognition, establishing him as
          one of the pioneering architects of India&rsquo;s modern maritime education ecosystem.
        </p>

        <section className="pt-4">
          <h3 className="text-xl font-semibold text-aemet-navy mb-3">Key Achievements</h3>
          <ul className="list-disc pl-6 space-y-2">
            {achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </section>
      </div>
    </MaritimeFoundationLayout>
  );
};

export default Legend;