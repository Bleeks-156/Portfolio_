import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Head from 'next/head';
import React, { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';

// Certificate Image Viewer component
const CertificateViewer = ({ title, imagePath, isOpen, onToggle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-light rounded-xl w-full max-w-4xl flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-light rounded-t-xl z-10">
          <h3 className="font-bold">{title} Certificate</h3>
          <button
            onClick={onToggle}
            className="p-2 rounded-full hover:bg-dark/10 text-dark"
            aria-label="Close certificate viewer"
            type="button"
          >
            <span className="text-2xl font-bold">✕</span>
          </button>
        </div>
        <div className="flex-1 overflow-auto p-4 relative">
          <div className="relative w-full flex items-center justify-center">
            <Image
              src={imagePath}
              alt={`${title} Certificate`}
              className="object-contain max-h-[70vh] max-w-full"
              width={800}
              height={600}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Achievement Card Component with Image viewer
const AchievementCard = ({ title, organization, year, category, certificatePath, imagePath }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  // Use imagePath if provided, otherwise fall back to certificatePath
  const displayImagePath = imagePath || certificatePath;

  const toggleViewer = () => {
    setIsViewerOpen(!isViewerOpen);
  };

  const viewCertificateOnDrive = () => {
    // Open the drive link in a new tab
    window.open(certificatePath, '_blank');
  };

  return (
    <>
      <div
        ref={ref}
        className={`flex flex-col border-2 border-solid border-black rounded-xl p-4 sm:p-6 bg-light transition-all duration-500 h-full ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        <div className="relative h-full flex flex-col">
          <div className="absolute top-0 -right-3 -bottom-3 -z-10 w-full rounded-xl bg-blue" />

          {/* Content section */}
          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm sm:text-base font-medium">{organization}</p>
            <p className="text-xs sm:text-sm text-dark/75 mt-1">{year}</p>
          </div>

          {/* Spacer to push buttons to bottom */}
          <div className="flex-grow"></div>

          {/* Buttons section */}
          <div className="flex flex-wrap gap-2 mt-auto">
            <button
              onClick={toggleViewer}
              className="px-4 py-2 bg-blue text-light rounded-lg text-sm font-medium hover:bg-blue/80 transition-colors flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Certificate
            </button>
            <button
              onClick={viewCertificateOnDrive}
              className="px-4 py-2 bg-dark text-light rounded-lg text-sm font-medium hover:bg-dark/80 transition-colors flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              View on Drive
            </button>
          </div>
        </div>
      </div>

      <CertificateViewer
        title={title}
        imagePath={displayImagePath}
        isOpen={isViewerOpen}
        onToggle={toggleViewer}
      />
    </>
  );
};

// Achievement Section Component
const AchievementSection = ({ title, achievements }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={`mt-12 sm:mt-16 transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold text-center md:text-left">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            title={achievement.title}
            organization={achievement.organization}
            year={achievement.year}
            certificatePath={achievement.certificatePath}
            imagePath={achievement.imagePath}
          />
        ))}
      </div>
    </div>
  );
};

// Certificate Preview Card (small preview in section)
const CertificatePreviewCard = ({ title, imagePath, certificatePath, onClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const viewOnDrive = (e) => {
    e.stopPropagation(); // Prevent the card click from triggering
    window.open(certificatePath, '_blank');
  };

  return (
    <div
      ref={ref}
      className={`cursor-pointer border-2 border-solid border-black rounded-xl overflow-hidden transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      <div className="relative">
        <div className="absolute top-0 -right-3 -bottom-3 -z-10 w-full rounded-xl bg-blue" />
        <div className="relative h-48 bg-light">
          <Image
            src={imagePath}
            alt={`${title} Certificate Preview`}
            fill
            className="object-contain p-2"
            onClick={onClick}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-3">
            <h3 className="text-light font-medium text-sm truncate">{title}</h3>
            <div className="flex justify-between items-center mt-2">
              <button
                onClick={onClick}
                className="text-xs bg-blue text-light px-2 py-1 rounded hover:bg-blue/80"
              >
                View
              </button>
              <button
                onClick={viewOnDrive}
                className="text-xs bg-dark text-light px-2 py-1 rounded hover:bg-dark/80"
              >
                Drive
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Achievements = () => {
  // Replace these paths with your actual Google Drive links
  const certifications = [
    {
      title: "Hackathon",
      organization: "St Joseph Engineering College",
      year: "2023",
      imagePath: "/images/certificates/ST Joseph.png",
      certificatePath: "https://drive.google.com/file/d/1ePfe8GhkN2CnalBIQdLRw4F_4pOxURMG/view?usp=sharing" // Replace with your Drive link
    }
  ];

  const internships = [
    {
      title: "MERN Stack Development",
      organization: "WSA",
      year: "2023",
      imagePath: "/images/certificates/MERN Stack.png",
      certificatePath: "https://drive.google.com/file/d/1vr_BIrRWtUKBPcW-GDpH01uLlppE2-7K/view?usp=drive_link" // Replace with your Drive link
    },
    {
      title: "Front-end Development",
      organization: "CodeSoft",
      year: "2023",
      imagePath: "/images/certificates/CodeSoft.png",
      certificatePath: "https://drive.google.com/file/d/1VGvLDkd3mc5Q09MoNCER9wPkEEXK_7ch/view?usp=drive_link" // Replace with your Drive link
    },
    {
      title: "Oracle APEX Database Management",
      organization: "Vibathi Labs",
      year: "2023",
      imagePath: "/images/certificates/Oracle Apex.png",
      certificatePath: "https://drive.google.com/file/d/1h6pQZZ4xnd4Z5NjuUwlw7T6sQTg4V2se/view?usp=drive_link" // Replace with your Drive link
    },
    {
      title: "React Developer",
      organization: "Hudsmer Business Solutions",
      year: "2025",
      imagePath: "/images/certificates/HBS.png",
      certificatePath: "https://drive.google.com/file/d/181hJcyp6pKtH1FVjsRIMhtVpApaIn6lP/view?usp=sharing" // Replace with your Drive link
    }
  ];

  const onlineAchievements = [
    {
      title: "Cloud Computing",
      organization: "NPTEL",
      year: "2023",
      imagePath: "/images/certificates/Cloud Computing.png",
      certificatePath: "https://drive.google.com/file/d/1HNXo6MeoNapZVhmY85qzrd_qa6zbn_QG/view?usp=drive_link" // Replace with your Drive link
    },
    {
      title: "Internet Of Things",
      organization: "NPTEL",
      year: "2023",
      imagePath: "/images/certificates/IOT.png",
      certificatePath: "https://drive.google.com/file/d/1jFBOSFtXfi6G230pit7u-Ep6USsXBPqz/view?usp=drive_link" // Replace with your Drive link
    },
    {
      title: "Privacy And Security Resource In Social Media",
      organization: "NPTEL",
      year: "2023",
      imagePath: "/images/certificates/Privacy.png",
      certificatePath: "https://drive.google.com/file/d/1rUt8kOze-ZaZJEXsYf32Rp8UHD8u9p66/view?usp=drive_link" // Replace with your Drive link
    },
    {
      title: "Introduction to Industry 4.0 and Industrial Internet of Things",
      organization: "NPTEL",
      year: "2023",
      imagePath: "/images/certificates/IOT 4.0.jpg",
      certificatePath: "https://drive.google.com/file/d/1x50K6aKt7o2WMVwjie4d1Yp7gzgDOOII/view?usp=drive_link" // Replace with your Drive link
    },
    {
      title: "DBMS",
      organization: "Infosys Springboard",
      year: "2023",
      imagePath: "/images/certificates/Infosys Springboard.png",
      certificatePath: "https://drive.google.com/file/d/13BY18fKuKNzNtTh3Ou0qwt_HnXAguwBe/view?usp=drive_link" // Replace with your Drive link
    },
    {
      title: "DBMS",
      organization: "Scaler",
      year: "2023",
      imagePath: "/images/certificates/Scaler.png",
      certificatePath: "https://drive.google.com/file/d/1hTWfDY9GM-DlYkWFqgRUYW6vEmLjXaA1/view?usp=drive_link" // Replace with your Drive link
    }
  ];

  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const certificateRef = useRef(null);
  const isInView = useInView(certificateRef, { once: true });

  const openCertificate = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeCertificate = () => {
    setSelectedCertificate(null);
  };

  // Combine all achievements for the preview section
  const allCertificates = [...certifications, ...internships, ...onlineAchievements];

  return (
    <>
      <Head>
        <title>Hari&apos;s | Achievements</title>
        <meta name="description" content="Hari Shankar's professional achievements, certifications, internships, and online courses" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-4 sm:pt-6 md:pt-8 w-full px-4 sm:px-6 md:px-12 lg:px-24'>
          <AnimatedText
            text="Achievements !"
            className='mb-8 sm:mb-10 md:mb-12 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center w-full'
          />

          {/* Certificate Gallery Preview */}
          <div
            ref={certificateRef}
            className={`mb-16 transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
              Certificate Gallery
            </h2>
            <div className="relative p-6 sm:p-8 border-2 border-solid border-black rounded-2xl bg-light">
              <div className="absolute top-0 -right-3 -z-10 w-full h-full rounded-2xl bg-dark" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {allCertificates.slice(0, 5).map((cert, index) => (
                  <CertificatePreviewCard
                    key={index}
                    title={cert.title}
                    imagePath={cert.imagePath}
                    certificatePath={cert.certificatePath}
                    onClick={() => openCertificate(cert)}
                  />
                ))}
              </div>
            </div>
          </div>

          <AchievementSection title="Certifications" achievements={certifications} />
          <AchievementSection title="Internships" achievements={internships} />
          <AchievementSection title="Online Achievements" achievements={onlineAchievements} />

          {/* Certificate Viewer Modal */}
          {selectedCertificate && (
            <CertificateViewer
              title={selectedCertificate.title}
              imagePath={selectedCertificate.imagePath}
              isOpen={true}
              onToggle={closeCertificate}
            />
          )}
        </Layout>
      </main>
    </>
  );
};

export default Achievements;
