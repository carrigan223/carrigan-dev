import Script from "next/script";

import React from "react";

interface ChatbotScriptProps {
  chatbotId: string;
  domain: string;
}

const ChatbotScript = ({ chatbotId, domain }: ChatbotScriptProps) => {
  return (
    <>
      <Script id="chatbot-script">
        {`
          window.ripeChatSettings = {
            chatbotId: "${chatbotId}",
            domain: "${domain}"
          };
          (function() {
            var d = document;
            var s = d.createElement("script");
            s.src = "https://ripe.chat/islands/client-chat-button.island.umd.js";
            s.async = true;
            d.getElementsByTagName("head")[0].appendChild(s);
            var chatButtonElement = d.createElement("client-chat-button-island");
            d.body.appendChild(chatButtonElement);
          })();
        `}
      </Script>
    </>
  );
};

export default ChatbotScript;
