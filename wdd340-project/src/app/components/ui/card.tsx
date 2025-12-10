import { ReactNode } from "react";
import clsx from "clsx";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "border rounded-2xl shadow-sm bg-white p-4",
        "transition hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("mb-3", className)}>
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={clsx(
        "text-xl font-semibold leading-tight truncate",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function CardContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={clsx("mt-2", className)}>{children}</div>;
}
