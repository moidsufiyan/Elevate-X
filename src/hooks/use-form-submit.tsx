
import { useState } from "react";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface UseFormSubmitOptions<T, R> {
  onSubmit: (data: T) => Promise<R>;
  onSuccess?: (result: R) => void;
  onError?: (error: Error) => void;
  successMessage?: string;
  errorMessage?: string;
  invalidateQueries?: string[];
}

export function useFormSubmit<T, R>({
  onSubmit,
  onSuccess,
  onError,
  successMessage = "Successfully submitted",
  errorMessage = "An error occurred",
  invalidateQueries = []
}: UseFormSubmitOptions<T, R>) {
  const queryClient = useQueryClient();

  const { 
    mutate: handleSubmit, 
    isPending: isSubmitting, 
    ...rest 
  } = useMutation({
    mutationFn: onSubmit,
    onSuccess: (result) => {
      // Show success toast
      toast.success(successMessage);
      
      // Invalidate relevant queries to refresh data
      if (invalidateQueries.length > 0) {
        invalidateQueries.forEach(query => {
          queryClient.invalidateQueries({ queryKey: [query] });
        });
      }
      
      // Call success callback if provided
      if (onSuccess) {
        onSuccess(result);
      }
    },
    onError: (err) => {
      // Show error toast
      toast.error(errorMessage);
      
      // Call error callback if provided
      if (onError && err instanceof Error) {
        onError(err);
      }
    }
  });

  return {
    isSubmitting,
    handleSubmit,
    ...rest
  };
}
