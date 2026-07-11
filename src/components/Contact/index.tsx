import SectionTitle from "../SectionTitle";
import ContactValue from "./ContactValue";

import { DataProps } from "@/types";

const Contact = ({ information }: Pick<DataProps, "information">) => {
  const { contact } = information;

  return (
    <div>
      <SectionTitle>Contact</SectionTitle>
      <div className="relative flex flex-col gap-4">
        <div className="absolute bottom-0 left-28 top-0 w-px bg-GRAY_LIGHT dark:bg-GRAY_HEAVY" />
        {contact.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <span className="w-24 text-lg font-semibold text-BLACK dark:text-white">{item.name}</span>
            <div className="pl-4">
              <ContactValue
                value={item.href}
                href={item.isPhone ? `tel:${item.href}` : item.isEmail ? `mailto:${item.href}` : item.href}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
