import { Link } from "react-router";
import Chat from "../components/Chat";

function Home() {
  const initialMessage =
    "Hello! I'm WelcomeAgent, the welcome specialist. I can help you navigate this portfolio website. Are you an employer, client, or fellow programmer?";

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/3">
          <h1 className="text-3xl font-bold mb-4">Welcome to my Portfolio</h1>
          <p className="text-lg mb-4">
            This portfolio showcases my work and skills with the help of
            specialized AI agents. Each agent is designed to assist you with
            different aspects of my portfolio.
          </p>
          <p className="text-lg">
            Feel free to interact with the WelcomeAgent to get personalized
            recommendations on which sections of the portfolio to explore based
            on your interests.
          </p>
        </div>
        <div className="md:w-2/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h5 className="text-xl font-semibold mb-2">
                Chat with WelcomeAgent
              </h5>
              <p className="text-gray-600 mb-4">
                Our welcome specialist can help you navigate this portfolio
                website.
              </p>
              <Chat
                agentType="welcome"
                initialMessage={initialMessage}
                agentInitials="WA"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Meet the Agents</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gray-500 text-white flex items-center justify-center text-lg font-bold mb-4">
                PA
              </div>
              <h5 className="text-xl font-semibold mb-2">ProjectAgent</h5>
              <p className="text-gray-600 mb-4">
                Provides detailed information about my projects, technologies
                used, and challenges overcome.
              </p>
              <Link
                to="/projects"
                className="mt-auto py-1.5 px-3 text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
              >
                View Projects
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gray-500 text-white flex items-center justify-center text-lg font-bold mb-4">
                CA
              </div>
              <h5 className="text-xl font-semibold mb-2">CareerAgent</h5>
              <p className="text-gray-600 mb-4">
                Shares information about my skills, experience, and professional
                background.
              </p>
              <Link
                to="/career"
                className="mt-auto py-1.5 px-3 text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
              >
                View Career
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gray-500 text-white flex items-center justify-center text-lg font-bold mb-4">
                BA
              </div>
              <h5 className="text-xl font-semibold mb-2">BusinessAdvisor</h5>
              <p className="text-gray-600 mb-4">
                Provides information about services, pricing, and client
                engagement process.
              </p>
              <Link
                to="/services"
                className="mt-auto py-1.5 px-3 text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
