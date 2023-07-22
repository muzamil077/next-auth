import React from "react";

const navigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
    },
    {
      name: "Instagram",
      href: "#",
    },
    {
      name: "Twitter",
      href: "#",
    },
    {
      name: "GitHub",
      href: "#",
    },
    {
      name: "YouTube",
      href: "#",
    },
  ],
};

const Footer = () => {
  return (
    <footer className="" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="dark:bg-[#0B141D]  ">
        <div className="w-[70%] m-auto justify-center px-6 pb-8 pt-5 sm:pt-24 lg:px-8 lg:pt-10">
          <div className="xl:grid xl:grid-cols-3 xl:gap-2">
            <div className="space-y-8">
              <h2 className="">MEIXU</h2>
              <p className="text-sm leading-6 ">
                Making the world a better place through constructing elegant
                hierarchies.
              </p>
              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className=" hover:text-gray-500"
                  >
                    <span className="sr-only">{item.name}</span>
                    {/* <item.icon className="h-6 w-6" aria-hidden="true" /> */}
                  </a>
                ))}
              </div>
            </div>
            <div className=" grid  grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-">
                <div>
                  <h3 className="text-[16px] font-semibold">Solutions</h3>
                  <ul role="list" className="mt-6 space-y-3">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-[14px] ">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-[16px] font-semibold ">Support</h3>
                  <ul role="list" className="mt-6 space-y-3">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-[14px] ">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-[16px] font-semibold ">Company</h3>
                  <ul role="list" className="mt-6 space-y-3">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-[14px] ">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-[16px] font-semibold leading-">Legal</h3>
                  <ul role="list" className="mt-6 space-y-3">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-[15px] font-[Poppins,sans-serif] "
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 border-t  pt-8 sm:mt-20 lg:mt-10">
            <p className="text-[16px]  ">
              &copy; 2023 Meixu GURU, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
