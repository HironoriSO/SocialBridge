'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-black text-red-600 mb-4">エラーが発生しました</h1>
        <p className="text-gray-600 mb-6">
          申し訳ございません。予期しないエラーが発生しました。再度お試しください。
        </p>
        <button
          onClick={reset}
          className="btn-primary"
        >
          再試行する
        </button>
      </div>
    </div>
  );
}
