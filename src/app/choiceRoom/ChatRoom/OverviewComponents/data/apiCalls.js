const url = "https://osquared-backend.onrender.com";

const authToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUYWJva2EiLCJpYXQiOjE3MzYxNzczNTIsIm5iZiI6MTczNjE3NzM1MiwianRpIjoiYzc4NDYwOGItMDY0OC00MTE3LTllNjktNzJhOTBjNDk4NDNkIiwiZXhwIjoxNzM2NzgyMTUyLCJ0eXBlIjoiYWNjZXNzIiwiZnJlc2giOmZhbHNlfQ.0jj8T1yO9Z2z4VX7R8GTtqHs3iHlSw_-NwAXVLqS1ss"

export const retrieveData = async ( setMessages ) => {
    try {
        const response = await fetch(
            `${url}/chat/initial-message/scammer`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                    "Accept-encoding": "gzip, deflate, br",
                    Connection: "keep-alive",
                    Authorization: `Token ${authToken}`,
                },
            }
        );

        if (!response.ok) {
            console.log("Response status:", response.status);
            throw new Error("Failed to retrieve data");
        }

        const data = await response.json();
        console.log("Retrieved data:", data);
        const message = data.message.content

        // Dispatch the data to the local store

        setMessages([
            {
                sender: "Dave",
                text: message
            }
        ]);
    } catch (error) {
        console.error("Error retrieving data:", error.message);
    }
};

export const sendNewMessage = async ( body,  ) => {
    try {
        const response = await fetch(
            `${url}/chat/chat/scammer`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                    "Accept-encoding": "gzip, deflate, br",
                    Connection: "keep-alive",
                    Authorization: `Token ${authToken}`,
                },
                body: JSON.stringify(body),
            },
        );

        if (!response.ok) {
            console.log("Response status:", response.status);
            throw new Error("Failed to send new message");
        }

        const data = await response.json();

    } catch (error) {
        console.error("Error sending new message:", error.message);
    }
};

