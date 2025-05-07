import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  ContactFormDesigns,
  HeroDesigns,
  FeaturesDesigns,
} from '../../components/WebPageComponents/designs';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

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
      name: 'Patient Registration',
      description:
        'Efficiently register patients with comprehensive data capture, ensuring accurate records and seamless access to medical history.',
      icon: 'mdiAccountPlus',
    },
    {
      name: 'Appointment Management',
      description:
        'Streamline appointment scheduling with automated reminders and conflict checks, improving patient satisfaction and clinic efficiency.',
      icon: 'mdiCalendarCheck',
    },
    {
      name: 'Billing \u0026 Insurance',
      description:
        'Simplify billing processes with integrated insurance verification and invoicing, ensuring accurate and timely payments.',
      icon: 'mdiCashRegister',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Our Services - ${projectName}`}</title>
        <meta
          name='description'
          content={`Explore the comprehensive services offered by ${projectName}, designed to enhance healthcare management and improve patient care in clinics and hospitals across Saudi Arabia.`}
        />
      </Head>
      <WebSiteHeader projectName={'PulseOne'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'PulseOne'}
          image={['Healthcare services in action']}
          mainText={`Transform Healthcare with ${projectName} Services`}
          subTitle={`Discover the range of services offered by ${projectName} to streamline healthcare management and enhance patient care in Saudi Arabia's clinics and hospitals.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Explore Services`}
        />

        <FeaturesSection
          projectName={'PulseOne'}
          image={['Innovative healthcare service solutions']}
          withBg={0}
          features={features_points}
          mainText={`Comprehensive Services by ${projectName}`}
          subTitle={`Explore the diverse services offered by ${projectName} to enhance healthcare management and patient care.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <ContactFormSection
          projectName={'PulseOne'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Customer support team available']}
          mainText={`Reach Out to ${projectName} `}
          subTitle={`For inquiries or support, contact us anytime. Our team is ready to assist you with any questions about ${projectName}.`}
        />
      </main>
      <WebSiteFooter projectName={'PulseOne'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
