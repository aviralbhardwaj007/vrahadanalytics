
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-vrahad-blue/5 to-vrahad-purple/5 p-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-8xl font-bold bg-gradient-to-r from-vrahad-blue to-vrahad-purple bg-clip-text text-transparent">
            404
          </div>
          <h1 className="text-2xl font-bold mt-4 mb-2">Page Not Found</h1>
          <p className="text-slate-600">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button asChild className="w-full bg-gradient-to-r from-vrahad-blue to-vrahad-purple hover:from-vrahad-purple hover:to-vrahad-blue transition-all">
            <Link to="/">Return to Homepage</Link>
          </Button>
          
          <div className="text-sm text-slate-500">
            If you believe this is an error, please{" "}
            <Link to="/contact" className="text-vrahad-blue hover:underline">
              contact our support team
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
