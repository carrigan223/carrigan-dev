'use client';
import { useEffect } from "react";

const ChatbotScript = ({
  chatbotId,
  domain,
}: {
  chatbotId: string;
  domain: string;
}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://ripe.chat/islands/client-chat-button.island.umd.js";
    script.async = true;
    script.setAttribute("chatbotId", chatbotId);
    script.setAttribute("domain", domain);
    document.head.appendChild(script);

    const chatButtonElement = document.createElement(
      "client-chat-button-island"
    );
    document.body.appendChild(chatButtonElement);

    return () => {
      // Cleanup if necessary
      document.head.removeChild(script);
      document.body.removeChild(chatButtonElement);
    };
  }, [chatbotId, domain]);

  return null;
};

export default ChatbotScript;
