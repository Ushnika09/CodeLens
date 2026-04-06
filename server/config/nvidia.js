import OpenAI from "openai";

/**
 * Singleton NVIDIA/OpenAI-compatible client targeting Kimi K2 Thinking.
 * Created once at startup and reused for all streaming requests.
 */
const nvidiaClient = new OpenAI({
  apiKey: process.env.NVIDIA_API_KEY,
  baseURL: "https://integrate.api.nvidia.com/v1",
});

export default nvidiaClient;
