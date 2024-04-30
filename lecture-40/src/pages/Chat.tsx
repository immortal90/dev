import { useState } from "react";
import axios from "axios";

const Chat = () => {
  const [response, setResponse] = useState("");

  const callOpenAPI = async () => {
    try {
      const apiKey = "Немає в мене ключа";
      const prompt = "Once upon a time";
      const url = "https://api.openai.com/v1/completions";
      const requestBody = {
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 100,
      };

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      };

      const response = await axios.post(url, requestBody, { headers });
      setResponse(response.data.choices[0].text);
    } catch (error) {
      console.error("Error fetching data from OpenAI API:", error);
    }
  };

  return (
    <div>
      <button onClick={callOpenAPI}>Generate Story</button>
      <p>{response}</p>
    </div>
  );
};

export default Chat;
