import { cn } from "@/lib/cn";

const controlClasses =
  "w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600/20 disabled:bg-ink-50";

export function Field({
  id,
  label,
  required,
  error,
  className,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink-800">
        {label}
        {required && (
          <span className="ml-1 text-brand-600" aria-hidden>
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-medium text-brand-600">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextInput({
  className,
  hasError,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { hasError?: boolean }) {
  return <input className={cn(controlClasses, hasError && "border-brand-500", className)} {...props} />;
}

export function Select({
  className,
  hasError,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { hasError?: boolean }) {
  return (
    <select className={cn(controlClasses, hasError && "border-brand-500", className)} {...props}>
      {children}
    </select>
  );
}

export function TextArea({
  className,
  hasError,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { hasError?: boolean }) {
  return (
    <textarea
      className={cn(controlClasses, "resize-y", hasError && "border-brand-500", className)}
      {...props}
    />
  );
}
