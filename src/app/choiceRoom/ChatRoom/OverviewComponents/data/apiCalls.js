import axios from 'axios';

const url = "https://osquared-backend.onrender.com";
const authToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUYWJva2EgIiwiaWF0IjoxNzM2MjAxNDE5LCJuYmYiOjE3MzYyMDE0MTksImp0aSI6ImYzMzE3NjFhLWNhYjctNGYwNi1hYjk4LTYyMGI5NmU5ZThlMSIsImV4cCI6MTczNjgwNjIxOSwidHlwZSI6ImFjY2VzcyIsImZyZXNoIjpmYWxzZX0.6DfCEE0owFKpq5rwIbCqHkNv6smaiwnTNsPC7fzWGEQ"

export const retrieveData = async (setMessages) => {
    try {
        const response = await axios.get(`${url}/chat/initial-message/scammer`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });

        const data = response.data;
        const messagesArray = [];
        console.log("Retrieved data:", data);
        const message = data.message.map((e) => {
            messagesArray.push({
                sender: e.role === "user" ? "Taboka" : "Dave",
                text: e.content
            });
        });

        // Dispatch the data to the local store
        setMessages([...messagesArray]);
    } catch (error) {
        console.error("Error retrieving data:", error.message);
    }
};

export const sendNewMessage = async (body, Messages ,setMessages) => {
    try {
        const response = await axios.post(`${url}/chat/chat/scammer`, body, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });

        const data = response.data;

        // Add the AI's response to the chat
        setMessages((prev) => [...prev, { sender: "Dave", text: data.message? data.message : data.response }]);
        return data;
    } catch (error) {
        console.error("Error sending new message:", error.message);
    }
};