import React from "react";

const FooterLinks = () => {
  const footerLinks = [
    {
      name: "Applications",
      subLinks: [
        {
          name: "Apparel",
          link: "/apparel"
        },
        {
          name: "Automotive",
          link: "/automotive"
        },
        {
          name: "Filtration",
          link: "/filtration"
        },
        {
          name: "Customised Nonwoven",
          link: "/customised-nonwoven"
        },
      ]
    },
    {
      name: "Company",
      subLinks: [
        {
          name: "Who We Are",
          link: "/who-we-are"
        },
        {
          name: "Global Competency",
          link: "/global-competency"
        },
        {
          name: "Innovation",
          link: "/innovation"
        },
        {
          name: "ESG Impact",
          link: "/esg-impact"
        },
      ]
    },
    {
      name: "More",
      subLinks: [
        {
          name: "Contact Us",
          link: "/contact-us"
        },
        {
          name: "Careers",
          link: "/careers"
        }
      ]
    },
{
      name: "Follow",
      subLinks: [
        {
          name: "Linkedin",
          link: "https://www.linkedin.com/company/supreme-group-company"
        }
      ]
    }
  ]

  return (
    <ul className="mt-8 z-10 flex w-full justify-between">
      {footerLinks.map((flink, fIndex) => (
        <li key={fIndex}>
          <p className="uppercase font-bold">{flink.name}</p>
          <ul className="mt-8 space-y-4">
            {flink.subLinks.map((slink, sIndex) => (
              <li key={sIndex}>
                <a href={slink.link}>{slink.name}</a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;
