import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Icon from "./AccordionIcon";
import { Accord_Data } from "./Accordiondata";

const Accordionlist = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="w-[90%] md:w-5/6 mx-auto py-8">
      {Accord_Data.map((faq) => (
        <Accordion
          key={faq.id}
          open={open === faq.id}
          icon={<Icon id={faq.id} open={open} />}
        >
          <AccordionHeader className="font-Open-sans font-medium text-xl text-secondary-prime" onClick={() => handleOpen(faq.id)}>
            {faq.question}
          </AccordionHeader>
          <AccordionBody className="text-lg" >{faq.answer}</AccordionBody>
        </Accordion>
      ))}
    </section>
  );
};

export default Accordionlist;
