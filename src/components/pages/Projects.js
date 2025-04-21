import React, { useState } from "react";
import '../../App.css';
import CardItem from '../CardItem';
import Modal from "./Modal";

export default function Projects() {

  const [modalData, setModalData] = useState(null);

  const handleOpenModal = (project) => setModalData(project);
  const handleCloseModal = () => setModalData(null);
  const projects = [
    {
      title: 'Wildfire Classifier',
      image: '/images/project1.jpeg',
      label: 'Computer Vision',
      description: 'Uses YOLOv8 to classify wildfire threats from camera footage.',
      course: 'CS470: Computer Vision(Capstone)',
      tags: ['YOLOv8', 'Python', 'OpenCV', 'PyTorch'],
        functionalities: [
            'Real-time detection of fire and smoke',
            'Multi-class classification for various weather conditions',
            'Integration with california mountain video data'
        ],
      challenges: [
        'Adapting YOLOv8 for multi-class fire/smoke detection',
        'Training on limited, imbalanced dataset',
        'Running inference efficiently on drone-collected video'
      ]
    },
    {
      title: 'Portfolio Website',
      image: '/images/project2.jpeg',
      label: 'Web Dev',
      description: 'Built this entire portfolio with React and custom glowing themes.',
      course: 'Independent Project',
      tags: ['React', 'Tailwind CSS', 'GitHub Pages'],
      functionalities: [
            'Responsive design for all viewports',
            'Reusable glowing components',
            'Smooth modals and navigation'
        ],
      challenges: [
        'Responsive layout for all viewports',
        'Designing reusable glowing components',
        'Handling modals and navigation smoothly'
      ]
    },
    {
        title: 'HTML Tag Parser and Validator',
        image: '/images/project3.jpeg',
        label: 'Computer Vision',
        description: 'This project is a C++-based HTML tag parser and validator that efficiently processes structured documents to identify well-formed and mismatched tags. ',
        course: 'CS315: Data Structures',
        tags: ['C++', 'Data Structures', 'HTML'],
        functionalities: [
            'Tokenization – Uses a custom Tokenizer to break input files into meaningful tokens (open tags, close tags, standalone tags, etc.).',
            'Tag Parsing – Implements a TagParser that ensures proper nesting and handles mismatched or unclosed tags.',
            'Data Structures – Utilizes a TraversableStack for tracking open tags and a mapping system to store valid tag pairs.',
            'Error Reporting – Provides detailed error messages for mismatched tags, including line numbers and expected tags.'
        ],
        challenges: [
          'Implementing a stack-based approach for tag validation',
          'Handling nested and self-closing tags',
          'Ensuring efficient parsing for large documents'
        ]
    }
  ];

  return (
    <div className="Projects">
      <div className="project-grid">
        {projects.map((proj, i) => (
            <CardItem
                key={i}
                src={proj.image}
                text={proj.title}
                label={proj.label}
                onClick={() => handleOpenModal(proj)}
            />
        ))}
    </div>

    <Modal
        isOpen={!!modalData}
        onClose={handleCloseModal}
        title={modalData?.title}
        image={modalData?.image}
        description={modalData?.description}
        course={modalData?.course}
        tags={modalData?.tags}
        challenges={modalData?.challenges}
        functionalities={modalData?.functionalities}
    />

    </div>
  );
}