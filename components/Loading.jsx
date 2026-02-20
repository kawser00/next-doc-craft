export default function Loading() {
  return (
    <div className="h-full flex items-center justify-center flex-grow py-12">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 w-12 h-12 border-4 border-dark border-opacity-20 rounded-full"></div>

          <div className="absolute inset-0 w-12 h-12 border-4 border-t-dark border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        </div>

        <p className="text-gray-500 text-sm">Loading ...</p>
      </div>
    </div>
  );
}
