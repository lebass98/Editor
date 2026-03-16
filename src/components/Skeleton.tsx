"use client";

export function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-zinc-200 dark:bg-zinc-800 rounded-sm ${className}`} />
  );
}

export function ArticleCardSkeleton() {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <Skeleton className="aspect-[4/5] w-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-[80%]" />
        <Skeleton className="h-4 w-full mt-2" />
        <div className="flex items-center justify-between mt-4">
            <Skeleton className="h-3 w-20" />
            <div className="flex flex-col items-center gap-1">
                <Skeleton className="h-9 w-9 rounded-full" />
                <Skeleton className="h-3 w-12" />
            </div>
        </div>
      </div>
    </div>
  );
}
