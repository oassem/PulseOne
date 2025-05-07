import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../stores/hooks';
import LayoutGuest from '../layouts/Guest';
import WebSiteHeader from '../components/WebPageComponents/Header';
import WebSiteFooter from '../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  FeaturesDesigns,
  AboutUsDesigns,
  ContactFormDesigns,
  FaqDesigns,
} from '../components/WebPageComponents/designs';

import HeroSection from '../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../components/WebPageComponents/FeaturesComponent';

import AboutUsSection from '../components/WebPageComponents/AboutUsComponent';

import ContactFormSection from '../components/WebPageComponents/ContactFormComponent';

import FaqSection from '../components/WebPageComponents/FaqComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'PulseOne';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/about',
      label: 'about',
    },

    {
      href: '/services',
      label: 'services',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/faq',
      label: 'FAQ',
    },
  ];

  const features_points = [
    {
      name: 'Patient Management',
      description:
        'Efficiently register and manage patient profiles, ensuring accurate records and seamless access to medical history.',
      icon: 'mdiAccountCircle',
    },
    {
      name: 'Appointment Scheduling',
      description:
        'Streamline appointment bookings with automated reminders and conflict checks, enhancing patient experience and clinic efficiency.',
      icon: 'mdiCalendarCheck',
    },
    {
      name: 'EMR Integration',
      description:
        'Access and update electronic medical records with ease, ensuring comprehensive patient care and informed decision-making.',
      icon: 'mdiFileDocumentEdit',
    },
  ];

  const faqs = [
    {
      question: 'What is ${projectName} and who is it for?',
      answer:
        '${projectName} is a multi-tenant healthcare management platform designed for clinics, hospitals, and healthcare organizations in Saudi Arabia. It serves healthcare professionals and patients by streamlining operations and enhancing care.',
    },
    {
      question: 'How does ${projectName} handle patient data security?',
      answer:
        '${projectName} employs strict role-based access control and complies with local healthcare data privacy regulations to ensure patient data is secure and accessible only to authorized personnel.',
    },
    {
      question: 'Can ${projectName} integrate with existing systems?',
      answer:
        'Yes, ${projectName} integrates with national health insurance (NPHIES) and supports AI-powered voice-to-text for medical documentation. Future integrations with lab, pharmacy, or imaging systems are also possible.',
    },
    {
      question: 'Is ${projectName} available in multiple languages?',
      answer:
        'Yes, ${projectName} supports both English and Arabic, ensuring accessibility for users across Saudi Arabia.',
    },
    {
      question: 'How can I get started with ${projectName}?',
      answer:
        'To get started, contact our team for a demo and onboarding process. We will guide you through setting up your organization and configuring the platform to meet your needs.',
    },
    {
      question: 'What kind of support does ${projectName} offer?',
      answer:
        '${projectName} provides comprehensive support, including onboarding assistance, training, and ongoing technical support to ensure smooth operation and user satisfaction.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Comprehensive Healthcare Management Platform`}</title>
        <meta
          name='description'
          content={`Explore our multi-tenant healthcare management platform designed for clinics and hospitals in Saudi Arabia. Streamline patient registration, appointment scheduling, EMR, billing, and more with our innovative solutions.`}
        />
      </Head>
      <WebSiteHeader projectName={'PulseOne'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'PulseOne'}
          image={['Healthcare professionals collaborating efficiently']}
          mainText={`Revolutionize Healthcare with ${projectName}`}
          subTitle={`${projectName} offers a seamless, multi-tenant platform for clinics and hospitals in Saudi Arabia, enhancing patient care through efficient management of appointments, EMR, and billing.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Discover More`}
        />

        <FeaturesSection
          projectName={'PulseOne'}
          image={['Streamlined healthcare management interface']}
          withBg={0}
          features={features_points}
          mainText={`Discover ${projectName} Key Features`}
          subTitle={`Explore how ${projectName} transforms healthcare management with innovative solutions tailored for clinics and hospitals.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <AboutUsSection
          projectName={'PulseOne'}
          image={['Team collaborating on healthcare solutions']}
          mainText={`Empowering Healthcare with ${projectName}`}
          subTitle={`${projectName} is dedicated to revolutionizing healthcare management in Saudi Arabia. Our platform streamlines operations, enhances patient care, and supports healthcare professionals with innovative solutions.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Learn More`}
        />

        <FaqSection
          projectName={'PulseOne'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions about ${projectName} `}
        />

        <ContactFormSection
          projectName={'PulseOne'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Contact support team available 24/7']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Reach out to us anytime for inquiries or support. Our team is here to assist you with any questions about ${projectName}.`}
        />
      </main>
      <WebSiteFooter projectName={'PulseOne'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
