import Cookies from "js-cookie";

const baseURL = "http://192.168.1.13:8080";

const apiInterceptor = async (url, options = {}) => {
    const token = Cookies.get("token");

    const headers = {
        "Content-Type": "application/json",
        ...options.headers,
    };

    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    try {
        const response = await fetch(`${baseURL}${url}`, {
            ...options,
            headers,
        });

        if (response.status === 401) {
            console.warn("Unauthorized access. Please log in again.");
        }

        if (!response.ok) {
            const errorData = await response.text(); // Use text() if response is not JSON
            throw new Error(errorData || "Request failed");
        }

        console.log(`Request to ${url} was successful.`);

        // Check if the response is JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            return await response.json();
        }

        // If not JSON, return response as text (this handles messages like "Tech deleted")
        return await response.text();
    } catch (error) {
        console.error("API Interceptor Error:", error);
        throw error;
    }
};


export const apiFetch = (url, options = {}) => apiInterceptor(url, options);
