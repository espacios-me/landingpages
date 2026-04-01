import { MessageCircle } from 'lucide-react';

type Props = { title: string; label?: string; className?: string };

const whatsappNumber = '971559424193';

export function whatsappMessage(title: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi Nareen, I’m interested in ${title}. Please share full details and availability.`)}`;
}

export default function WhatsAppCTA({ title, label = 'WhatsApp Nareen', className = '' }: Props) {
  return (
    <a
      href={whatsappMessage(title)}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/90 px-4 py-2 text-sm font-semibold text-white shadow-lg ${className}`}
    >
      <MessageCircle size={16} />
      {label}
    </a>
  );
}
