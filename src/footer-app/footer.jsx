import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer({ copyright }) {
  const footerSections = [
    { title: 'Company', items: ['About Us', 'Our Mission', 'Our Story'] },
    { title: 'Contact', items: ['Contact Us', 'Phone:0724154315', 'Email: info@example.com'] },
    { title: 'Resources', items: ['Blog', 'FAQs', 'Support Center'] },
    { title: 'Opportunities', items: ['Careers', 'Job Openings', 'Internships'] },
    { title: 'Connect', items: ['Newsletter Signup', 'Refer a Friend', 'Follow Us'] }
  ];

  const socialIcons = [
    { icon: faFacebookF, link: '#', name: 'Facebook' },
    { icon: faTwitter, link: '#', name: 'Twitter' },
    { icon: faInstagram, link: '#', name: 'Instagram' }
  ];

  return (
    <footer className="bg-black text-white py-10 px-4 md:px-10">
      <div className="flex flex-row flex-wrap justify-between">
        {footerSections.map((section, index) => (
          <div key={index} className=" sm:w-1/2 md:w-1/5 mb-6">
            <h3 className="text-lg font-bold mb-4">{section.title}</h3>
            <ul className="list-none p-0">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-2">
                  {item === 'Email: info@example.com' ? (
                    <a href="mailto:info@example.com" className="hover:text-gray-300">info@example.com</a>
                  ) : item === 'Follow Us' ? (
                    <div>
                      {item}:
                      {socialIcons.map(({ icon, link, name }) => (
                        <a key={name} href={link} className="ml-2 hover:text-gray-300" aria-label={name}>
                          <FontAwesomeIcon icon={icon} />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a href="#" className="hover:text-gray-300">{item}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-sm text-white mt-8 text-center">{copyright}</p>
    </footer>
  );
}

export default Footer;