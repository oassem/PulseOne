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
  AboutUsDesigns,
  FeaturesDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import AboutUsSection from '../../components/WebPageComponents/AboutUsComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

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
      name: 'Comprehensive EMR',
      description:
        'Access and update electronic medical records effortlessly, ensuring accurate and up-to-date patient information for informed decision-making.',
      icon: 'mdiFileDocument',
    },
    {
      name: 'Seamless Appointment Management',
      description:
        'Efficiently schedule, reschedule, and manage appointments with automated reminders, reducing no-shows and improving patient satisfaction.',
      icon: 'mdiCalendarClock',
    },
    {
      name: 'Integrated Billing \u0026 Insurance',
      description:
        'Streamline billing processes with integrated insurance verification and invoicing, ensuring accurate and timely payments.',
      icon: 'mdiCashRegister',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`About Us - ${projectName}`}</title>
        <meta
          name='description'
          content={`Learn more about ${projectName}, our mission, and how we are transforming healthcare management in Saudi Arabia with innovative solutions tailored for clinics and hospitals.`}
        />
      </Head>
      <WebSiteHeader projectName={'PulseOne'} pages={pages} />
      <main className={`flex-grow  ${bgColor}    rounded-none  `}>
        <HeroSection
          projectName={'PulseOne'}
          image={['Team discussing healthcare innovations']}
          mainText={`Discover the Vision Behind ${projectName}`}
          subTitle={`At ${projectName}, we are committed to revolutionizing healthcare management in Saudi Arabia. Our platform empowers clinics and hospitals with cutting-edge solutions for efficient patient care.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Our Story`}
        />

        <AboutUsSection
          projectName={'PulseOne'}
          image={['Innovative healthcare management solutions']}
          mainText={`Our Journey with ${projectName}`}
          subTitle={`${projectName} is driven by a passion for innovation and excellence in healthcare management. Our mission is to provide seamless solutions that enhance patient care and streamline operations.`}
          design={AboutUsDesigns.IMAGE_LEFT || ''}
          buttonText={`Meet Our Team`}
        />

        <FeaturesSection
          projectName={'PulseOne'}
          image={['Efficient healthcare management tools']}
          withBg={1}
          features={features_points}
          mainText={`Explore ${projectName} Core Features`}
          subTitle={`Discover how ${projectName} enhances healthcare management with innovative features designed for efficiency and excellence.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <ContactFormSection
          projectName={'PulseOne'}
          design={ContactFormDesigns.HIGHLIGHTED || ''}
          image={['Customer support team ready']}
          mainText={`Connect with ${projectName} Team `}
          subTitle={`Reach out to us for any inquiries or support. Our team is ready to assist you with any questions about ${projectName}.`}
        />
      </main>
      <WebSiteFooter projectName={'PulseOne'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
