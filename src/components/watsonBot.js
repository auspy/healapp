"use client";
import { useEffect } from "react";

const WatsonBot = () => {
  useEffect(() => {
    window.watsonAssistantChatOptions = {
      integrationID: "edc25df8-b42f-4794-9ea6-6dfec4a6bc1a", // The ID of this integration.
      region: "eu-gb", // The region your integration is hosted in.
      serviceInstanceID: "bce0226c-661e-4908-8804-3b084b831297", // The ID of your service instance.
      onLoad: function (instance) {
        instance.render();
      },
    };
    setTimeout(function () {
      const t = document.createElement("script");
      t.src =
        "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
        (window.watsonAssistantChatOptions.clientVersion || "latest") +
        "/WatsonAssistantChatEntry.js";
      document.head.appendChild(t);
    });
  }, []);
  return <></>;
};

export default WatsonBot;
