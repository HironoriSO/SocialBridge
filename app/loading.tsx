export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center" role="status" aria-label="読み込み中">
      <div className="text-center">
        <div className="inline-block w-10 h-10 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
        <p className="mt-4 text-gray-500 text-sm">読み込み中...</p>
      </div>
    </div>
  );
}
