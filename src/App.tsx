/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { AudienceSwitcher, AudienceType } from './components/AudienceSwitcher';
import { Hero } from './components/Hero';
import { PathwayFinder } from './components/PathwayFinder';
import { LearnWorkEarnCalculator } from './components/LearnWorkEarnCalculator';
import { CourseCatalog } from './components/CourseCatalog';
import { AudiencePortals } from './components/AudiencePortals';
import { ProposalRoadmap } from './components/ProposalRoadmap';
import { VerificationPortal } from './components/VerificationPortal';
import { CenterLocator } from './components/CenterLocator';
import { LeadershipSection } from './components/LeadershipSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

// Modals
import { AdmissionModal } from './components/modals/AdmissionModal';
import { AffiliationModal } from './components/modals/AffiliationModal';
import { TrainerModal } from './components/modals/TrainerModal';
import { CourseDetailModal } from './components/modals/CourseDetailModal';
import { ProposalModal } from './components/modals/ProposalModal';
import { AdminDownloadModal } from './components/modals/AdminDownloadModal';
import { Course } from './data/courses';

export default function App() {
  const [currentAudience, setCurrentAudience] = useState<AudienceType>('student');

  // Modal states
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [selectedCourseForAdmission, setSelectedCourseForAdmission] = useState<string | undefined>(undefined);
  const [isAffiliationOpen, setIsAffiliationOpen] = useState(false);
  const [isTrainerModalOpen, setIsTrainerModalOpen] = useState(false);
  const [isProposalModalOpen, setIsProposalModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [detailCourse, setDetailCourse] = useState<Course | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Secret Admin Hotkey: Ctrl+Shift+A or Alt+A
      if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') || (e.altKey && e.key.toLowerCase() === 'a')) {
        e.preventDefault();
        setIsAdminModalOpen(true);
      }
    };

    const handleHash = () => {
      if (window.location.hash === '#admin-download' || window.location.hash === '#admin') {
        setIsAdminModalOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('hashchange', handleHash);
    handleHash();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  const handleOpenAdmission = (courseId?: string) => {
    setSelectedCourseForAdmission(courseId);
    setIsAdmissionOpen(true);
  };

  const handleExplorePrograms = () => {
    const el = document.getElementById('programs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenVerification = () => {
    const el = document.getElementById('verification');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfd] text-slate-900 selection:bg-[#0e3c6a] selection:text-white antialiased">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        onOpenAdmission={() => handleOpenAdmission()}
        onOpenProposal={() => setIsProposalModalOpen(true)}
      />

      {/* Audience Personalization Context Strip */}
      <AudienceSwitcher
        currentAudience={currentAudience}
        onSelectAudience={setCurrentAudience}
        onOpenAdmission={() => handleOpenAdmission()}
        onOpenTrainerModal={() => setIsTrainerModalOpen(true)}
        onOpenAffiliationModal={() => setIsAffiliationOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          currentAudience={currentAudience}
          onOpenAdmission={() => handleOpenAdmission()}
          onOpenProposal={() => setIsProposalModalOpen(true)}
          onExplorePrograms={handleExplorePrograms}
        />

        {/* Stakeholder Portals (Students, Teachers, Admission Centers) */}
        <AudiencePortals
          currentAudience={currentAudience}
          onOpenAdmission={() => handleOpenAdmission()}
          onOpenTrainerModal={() => setIsTrainerModalOpen(true)}
          onOpenAffiliationModal={() => setIsAffiliationOpen(true)}
          onOpenVerificationModal={handleOpenVerification}
        />

        {/* Interactive Student Career Compass */}
        <PathwayFinder
          onSelectCourse={(course) => setDetailCourse(course)}
          onOpenAdmission={handleOpenAdmission}
        />

        {/* Learn, Work & Earn Calculator (Vemosa Replica + Proposal) */}
        <LearnWorkEarnCalculator
          onOpenAdmission={handleOpenAdmission}
        />

        {/* Comprehensive Academic & Skill Course Catalog */}
        <CourseCatalog
          onSelectCourse={(course) => setDetailCourse(course)}
          onOpenAdmission={handleOpenAdmission}
        />

        {/* 2027–2030 Council Strategic Roadmap */}
        <ProposalRoadmap
          onOpenProposal={() => setIsProposalModalOpen(true)}
        />

        {/* Online Student Enrollment & Certificate Verification */}
        <VerificationPortal />

        {/* Authorized Admission & Training Centers Locator */}
        <CenterLocator
          onOpenAffiliationModal={() => setIsAffiliationOpen(true)}
        />

        {/* Academic Advisory Board & Leadership Team */}
        <LeadershipSection />

        {/* Official Liaison, Naresh Kr. Gautam Desk & Inquiry Form */}
        <ContactSection />
      </main>

      {/* Compliant Executive Footer */}
      <Footer
        onOpenProposal={() => setIsProposalModalOpen(true)}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
      />

      {/* Modal Dialogs */}
      <AdmissionModal
        isOpen={isAdmissionOpen}
        onClose={() => setIsAdmissionOpen(false)}
        preselectedCourseId={selectedCourseForAdmission}
      />

      <AffiliationModal
        isOpen={isAffiliationOpen}
        onClose={() => setIsAffiliationOpen(false)}
      />

      <TrainerModal
        isOpen={isTrainerModalOpen}
        onClose={() => setIsTrainerModalOpen(false)}
      />

      <CourseDetailModal
        course={detailCourse}
        onClose={() => setDetailCourse(null)}
        onOpenAdmission={handleOpenAdmission}
      />

      {/* Interactive Council Strategic Masterplan Modal */}
      <ProposalModal
        isOpen={isProposalModalOpen}
        onClose={() => setIsProposalModalOpen(false)}
        onOpenAdmission={() => handleOpenAdmission()}
      />

      {/* Secret Admin Only PDF Download Console */}
      <AdminDownloadModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
      />
    </div>
  );
}
