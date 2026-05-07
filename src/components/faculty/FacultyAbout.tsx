import React from 'react';
interface FacultyAboutProps {
  facultyName: string;
  facultyId: string;
}
const FacultyAbout: React.FC<FacultyAboutProps> = ({
  facultyName,
  facultyId
}) => {
  let facultyContent;
  if (facultyId === 'maritime') {
    facultyContent = <>
        <p className="text-gray-600 mb-4">
          The Faculty of Maritime Studies at AMET University is one of the premier maritime education institutions globally. With state-of-the-art facilities and experienced faculty, we provide comprehensive education in all aspects of maritime sciences and technologies.
        </p>
        <p className="text-gray-600 mb-4">
          Our programs are designed in close collaboration with the maritime industry to ensure that graduates are well-prepared for the challenges of the modern maritime world. The faculty maintains strong ties with shipping companies, port authorities, and maritime organizations worldwide.
        </p>
        <p className="text-gray-600">
          With a focus on practical training alongside theoretical knowledge, our students benefit from hands-on experience using advanced simulators, workshops, and training vessels. This dual approach ensures that graduates are ready to take on leadership roles in the global maritime industry.
        </p>
      </>;
  } else if (facultyId === 'management') {
    facultyContent = <>
        <p className="text-gray-600 mb-4">
          Faculty of Management Studies offers a globally recognised UG, PG and Ph.D. Programmes with a strong focus on Maritime, Logistics, and Management education.
        </p>
        <p className="text-gray-600 mb-4">
          Established in 2001, AMET Business School stands as a Centre of Excellence offering India's first MBA in Shipping and Logistics Management.
        </p>
        <p className="text-gray-600">
          The Programmes emphasises experiential learning through Industrial Internships, Case Studies, and live projects. Students gain global exposure through collaborations with International Universities, which help develop students' skills and exposure to excel as future-ready business professionals.
        </p>
      </>;
  } else if (facultyId === 'commerce') {
    facultyContent = <>
        <p className="text-gray-600 mb-4">
          The Faculty of Commerce at AMET University is renowned for its excellence in business and commerce education. Our comprehensive curriculum covers accounting, finance, economics, and international trade with a focus on both theoretical foundations and practical applications.
        </p>
        <p className="text-gray-600 mb-4">
          Our faculty consists of experienced professionals and academics who bring real-world insights into the classroom. We maintain strong partnerships with financial institutions, accounting firms, and commercial organizations to ensure our programs remain industry-relevant.
        </p>
        <p className="text-gray-600">
          Students benefit from our state-of-the-art commerce laboratory, trading floor simulation, and extensive business resource center. Through internships, industry projects, and case studies, our graduates develop the practical skills and analytical abilities needed to excel in the competitive business world.
        </p>
      </>;
  } else if (facultyId === 'life-sciences') {
    facultyContent = <>
        <p className="text-gray-600 mb-4">
          The Faculty of Life Sciences at AMET University is a leading center for education and research in biological sciences with specialized focus on marine biotechnology and food technology. Established with a vision to advance scientific knowledge and develop innovative solutions for global challenges, our faculty combines cutting-edge research with industry-relevant education.
        </p>
        <p className="text-gray-600 mb-4">
          Our departments feature state-of-the-art laboratories, research centers, and collaborative spaces where students and faculty engage in groundbreaking research. With strong industry partnerships and international collaborations, we provide our students with unique opportunities for hands-on experience and exposure to real-world applications of life sciences.
        </p>
        <p className="text-gray-600">
          The faculty is home to acclaimed researchers and educators working on diverse areas including marine biotechnology, food processing technologies, biologically active molecules from marine organisms, and sustainable food systems. Through our innovative curriculum and research initiatives, we prepare students to become future leaders in addressing global challenges in food security, marine conservation, and biotechnology industries.
        </p>
      </>;
  } else if (facultyId === 'engineering') {
    facultyContent = <>
        <p className="text-gray-600 mb-4">
          The Faculty of Engineering and Technology at AMET University is a hub of innovation and excellence in engineering education. We offer diverse programs across computer science, electrical and electronics, mechanical engineering, petroleum engineering, and food processing technology, preparing students to address complex technological challenges of the modern world.
        </p>
        <p className="text-gray-600 mb-4">
          Our state-of-the-art laboratories, research centers, and innovation hubs provide students with hands-on experience using industry-standard equipment and technologies. We emphasize a project-based learning approach where theoretical knowledge is applied to real-world engineering problems through capstone projects, internships, and industry collaborations.
        </p>
        <p className="text-gray-600">
          With a distinguished faculty comprising experienced academics and industry professionals, we ensure our curriculum remains at the cutting edge of technological advancements. Our strong partnerships with leading engineering firms, technology companies, and research institutions create opportunities for collaborative research, industry internships, and employment pathways for our graduates.
        </p>
      </>;
  } else if (facultyId === 'engineering-tech') {
    facultyContent = <>
        <p className="text-gray-600 mb-4">
          The Faculty of Engineering and Technology focuses on advanced fields spanning computer science, naval architecture, mechanical, electrical, petroleum, and food processing technologies. In today's interconnected world, these disciplines play a vital role in driving technological innovation and economic development across multiple sectors.
        </p>
        <p className="text-gray-600 mb-4">
          Our engineering programs emphasize both theoretical foundations and practical applications. Mechanical engineering, one of the broadest disciplines, deals with the design of machines, manufacturing processes, thermal systems, and various heavy machinery. Computer Science explores cutting-edge technologies in AI, software development, and cybersecurity. Naval Architecture and Petroleum Engineering provide specialized knowledge for maritime and energy sectors, respectively.
        </p>
        <p className="text-gray-600">Every aspect of modern life has been touched by the work of engineers from our faculty from healthcare solutions to transportation systems, energy production to food processing. Our mission is to prepare students to solve today's complex problems while creating sustainable solutions for the future through hands-on learning, industry collaboration, and innovative research.</p>
      </>;
  } else if (facultyId === 'science-humanities') {
    facultyContent = <>
        <p className="text-gray-600 mb-4">
          The Faculty of Science and Humanities consists of Mathematics, Physics, Chemistry, English and Physical Education departments. Each department exists as a separate division and maintains individual identity. The vision of the Faculty is to provide quality teaching and research which would make an impact at a global level.
        </p>
        <p className="text-gray-600 mb-4">
          The departments have highly qualified and experienced faculty members with specialization in various fields. In addition to the regular courses offered by the departments to different programs, Open Elective Courses and Value Added Courses are also offered to enrich their knowledge in their respective fields and improve job opportunities.
        </p>
        <p className="text-gray-600">
          The Faculty gives utmost importance to inculcate the moral behavior among the students. The students are consistently encouraged to organize workshops, symposia and conferences in new emerging areas which provide opportunities to acquire knowledge and develop the organizational skills.
        </p>
      </>;
  } else if (facultyId === 'aviation') {
    facultyContent = <>
        <p className="text-gray-600 mb-4">
          Our comprehensive INDUSTRY INTEGRATED undergraduate programs will equip you with the skills and knowledge needed to excel in the dynamic aviation industry.
        </p>
        <p className="text-gray-600 mb-4">
          These courses are jointly offered in technical association with Global Flight Handling Services Pvt. Limited, Chennai. The First year alone will be based on classroom teaching of fundamental subjects. The Second Year and Final Year will be fully focused on the experiential learning (along with aviation specific classroom trainings), learning at industry and training by serving aviation professionals. Students of both the programmes will be provided with On the Job Training (OJT) at Aviation Sector.
        </p>
        <p className="text-gray-600">
          Our Industry Partner, Global Flight Handling Services (GFHS) Pvt. Limited, is a Bureau of Civil Aviation Security (BCAS) security cleared company by the Ministry of Civil Aviation, Government of India providing a comprehensive Ground Handling Services to various airlines for all types of Aircrafts with State-of-the-art Ground Handling Equipment. GFHS is affiliated with Aerospace and Aviation Sector Skill Council (AASSC). GFHS has been awarded Concessionaire Agreement by the Airport Authority of India (AAI) to operate ground handling services in AAI Airports on Pan India basis with ISO certifications (ISO 9001:2015, ISO 14001:2015 & ISO 45001:2018) for ground handling and aviation training.
        </p>
      </>;
  } else if (facultyId === 'computing-sciences') {
    facultyContent = <>
        <p className="text-gray-600 mb-4">
          The Faculty of Advanced Computing Science is an academic department dedicated to teaching and researching advanced computer science topics. Our main objective is to provide students with a comprehensive understanding of the latest theories and technologies in computer science.
        </p>
        <p className="text-gray-600 mb-4">
          We offer undergraduate and graduate programs in advanced computing science, including Bachelor of Science (BSc) and Doctor of Philosophy (PhD) programs. These programs cover a wide range of topics such as algorithms and data structures, artificial intelligence, computer graphics, computer networks, computer security, databases, distributed systems, machine learning, and software engineering.
        </p>
        <p className="text-gray-600 mb-4">
          Our faculty has a team of experienced and highly qualified professors and researchers who are actively engaged in research projects and collaborations with industry partners and other academic institutions. They provide students with a comprehensive understanding of the theoretical and practical aspects of computing science through lectures, tutorials, and practical sessions.
        </p>
        <p className="text-gray-600 mb-4">
          In addition to academic programs, we also offer various outreach and community engagement activities including workshops, seminars, and conferences. Our state-of-the-art research facilities and equipment provide students with opportunities to engage in cutting-edge research projects and gain hands-on experience in this dynamic and innovative field.
        </p>
      </>;
  } else {
    facultyContent = <p className="text-gray-600">
        Information about this faculty will be available soon.
      </p>;
  }
  return <div className="bg-white rounded-lg shadow-md p-6 h-full">
      <h2 className="text-2xl font-bold text-aemet-navy mb-4">About {facultyName}</h2>
      {facultyContent}
    </div>;
};
export default FacultyAbout;