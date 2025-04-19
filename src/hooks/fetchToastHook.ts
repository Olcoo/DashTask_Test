import { useEffect } from "react";
import { toast } from "react-toastify";

export const useFetchToast = (status: string, error: string | null) => {
  useEffect(() => {
    if (status === 'loading') {
      toast('Request is sending!', {
        type: "info",
        autoClose: 500,
        closeOnClick: true,
        theme: "light",
      });
    }

    if (status === 'succeeded') {
      toast('Request success!', {
        type: "success",
        autoClose: 500,
        closeOnClick: true,
        theme: "light",
      });
    }

    if (status === 'failed') {
      toast(`Request error: ${error || 'Unknown error'}`, {
        type: "error",
        autoClose: 500,
        closeOnClick: true,
        theme: "light",
      });
    }
  }, [status, error]);
};
