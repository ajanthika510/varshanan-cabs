import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/94776716786"
      target="_blank"
      className="fixed bottom-15 right-6 bg-green-500 p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition"
    >
      <MessageCircle />
    </a>
  );
}