
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-32">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-aemet-navy mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-aemet-navy mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-6">
              Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
            </p>
            <div className="text-sm text-gray-500 mb-8 p-3 bg-gray-100 rounded">
              Attempted to access: <code className="font-mono">{location.pathname}</code>
            </div>
          </div>
          
          <div className="space-y-4">
            <Link 
              to="/" 
              className="inline-block bg-aemet-navy text-white px-6 py-3 rounded-md hover:bg-aemet-navy/90 transition-colors font-medium"
            >
              Return to Home
            </Link>
            <div className="text-center">
              <Link 
                to="/contact-us" 
                className="text-aemet-blue hover:text-aemet-navy underline"
              >
                Contact us if you need help
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
