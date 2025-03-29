
import { useState } from "react";
import { toast } from "sonner";

interface UseFormSubmitOptions<T, R> {
  onSubmit: (data: T) => Promise<R>;
  onSuccess?: (result: R) => void;
  onError?: (error: Error) => void;
  successMessage?: string;
  errorMessage?: string;
}

export function useFormSubmit<T, R>({
  onSubmit,
  onSuccess,
  onError,
  successMessage = "Successfully submitted",
  errorMessage = "An error occurred"
}: UseFormSubmitOptions<T, R>) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: T) => {
    setIsSubmitting(true);
    
    try {
      const result = await onSubmit(data);
      
      // Show success toast
      toast.success(successMessage);
      
      // Call success callback if provided
      if (onSuccess) {
        onSuccess(result);
      }
      
      return result;
    } catch (err) {
      // Show error toast
      toast.error(errorMessage);
      
      // Call error callback if provided
      if (onError && err instanceof Error) {
        onError(err);
      }
      
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    isSubmitting,
    handleSubmit
  };
}
