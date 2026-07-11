const ContactValue = ({ value, href }: { value: string; href: string }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={href}
      className="text-PRIMARY underline underline-offset-2 hover:text-PRIMARY_HEAVY dark:text-PRIMARY_LIGHT dark:hover:text-white"
    >
      {value}
    </a>
  );
};

export default ContactValue;
