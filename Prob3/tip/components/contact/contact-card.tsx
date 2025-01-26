import React from "react";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

interface Props {
  name: string;
  mail?: string;
  phone?: number;
}

const ContactCard = ({ name, mail, phone }: Props) => {
  return (
    <div className="font-medium text-center md:text-left">
      <div className="font-medium text-xl md:text-2xl mb-2.5">{name}</div>
      {mail && (
        <Link href={`mailto:${mail}`}>
          <div className="flex flex-row flex-wrap mb-1 items-center justify-center md:justify-start text-zinc-400">
            <Mail size={24} className="mr-2.5" />
            {mail}
          </div>
        </Link>
      )}
      {phone && (
        <div className="flex flex-row mb-1 items-center justify-center md:justify-start text-zinc-400">
          <Phone size={24} className="mr-2.5" />
          {phone}
        </div>
      )}
    </div>
  );
};

export default ContactCard;
