
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const AuthCallback = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { data, error } = await supabase.auth.getSession();
      
      if (error) {
        toast({
          title: "Authentication error",
          description: error.message,
          variant: "destructive"
        });
        navigate('/auth');
        return;
      }
      
      if (data.session) {
        toast({
          title: "Authentication successful",
          description: "You have been successfully authenticated"
        });
        navigate('/');
      } else {
        navigate('/auth');
      }
    };
    
    handleAuthCallback();
  }, [navigate, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-exceed-blue mx-auto"></div>
        <p className="mt-4 text-lg text-gray-600">Completing authentication...</p>
      </div>
    </div>
  );
};

export default AuthCallback;
