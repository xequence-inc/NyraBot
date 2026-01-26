'use client';

import { useEffect } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center p-6 bg-background">
      <Card className="max-w-md w-full text-center p-8 border-danger/20 bg-danger/5">
        <h2 className="text-2xl font-bold mb-4 text-white">Something went wrong!</h2>
        <p className="text-zinc-400 mb-6 text-sm">
          {error.message || "An unexpected error occurred while loading the dashboard."}
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={() => window.location.href = '/dashboard'} variant="secondary">
            Go Main Menu
          </Button>
          <Button onClick={() => reset()} variant="danger">
            Try Again
          </Button>
        </div>
      </Card>
    </div>
  );
}
