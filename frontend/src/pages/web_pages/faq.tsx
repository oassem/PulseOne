import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

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

  const faqs = [
    {
      question: 'What is ${projectName} and who can use it?',
      answer:
        '${projectName} is a healthcare management platform designed for clinics, hospitals, and healthcare organizations in Saudi Arabia. It serves healthcare professionals and patients by streamlining operations and enhancing care.',
    },
    {
      question: 'How does ${projectName} ensure data security?',
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
        <title>{`Frequently Asked Questions - ${projectName}`}</title>
        <meta
          name='description'
          content={`Find answers to common questions about ${projectName}. Learn more about our services, features, and how we can assist you in enhancing healthcare management.`}
        />
      </Head>
      <WebSiteHeader projectName={'PulseOne'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'PulseOne'}
          image={['FAQ section with answers']}
          mainText={`Your Questions Answered with ${projectName}`}
          subTitle={`Explore our FAQ section to find answers to common questions about ${projectName}. Learn how our platform can enhance your healthcare management experience.`}
          design={HeroDesigns.TEXT_CENTER || ''}
          buttonText={`Learn More`}
        />

        <FaqSection
          projectName={'PulseOne'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Common Questions about ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'PulseOne'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
