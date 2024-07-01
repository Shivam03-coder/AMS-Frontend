import { Typography } from "@material-tailwind/react";
import { LINKS } from "./FooterLinks";
import { SOCIALICONS } from "../../shared/icons/Socialicons.js";
import FooterSvg from "../../shared/svgs/FooterSvg";
import DeveloperAvatar from "../../shared/avatar/DeveloperAvatar.jsx";


const currentYear = new Date().getFullYear();

export function FooterWithSocialLinks() {
  return (
    <footer className="relative w-full mt-9 md:mt-6 font-Roboto">
      <div className="FooterSvg absolute bottom-0  w-full  -z-0">
        <FooterSvg />
      </div>
      <div className="w-full max-w-7xl px-8 ">
        <div className="grid grid-cols-1 justify-between gap-7 md:grid-cols-2">
          <div className="developer">
            <DeveloperAvatar />
          </div>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  className="mb-3 font-medium opacity-40 text-secondary-prime"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      className="py-1.5 font-normal transition-colors hover:text-secondary-prime"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center text-lg font-normal text-secondary-prime md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">SHIVAM ANAND</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            {SOCIALICONS.map((icons) => {
              const IconComponent = icons.components;
              return (
                <Typography
                  key={icons.id}
                  Typography
                  as="a"
                  href={icons.socialLink}
                  className="opacity-80 transition-opacity hover:opacity-100"
                >
                  <IconComponent size={25} />
                </Typography>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
