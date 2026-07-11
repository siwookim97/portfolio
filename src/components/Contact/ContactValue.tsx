const ContactValue = ({ value, href, isLink = true }: { value: string; href: string; isLink?: boolean }) => {
  if (!isLink) {
    return <span className="text-BLACK dark:text-white">{value}</span>;
  }

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
