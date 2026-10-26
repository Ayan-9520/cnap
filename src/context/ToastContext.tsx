import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X, Sparkles, ExternalLink } from 'lucide-react';

export type ToastType = 'success' | 'info' | 'warning' | 'error';

export interface ToastOptions {
  title: string;
  message?: string;
  type?: ToastType;
  duration?: number; // milliseconds, default 5000
  action?: {
    label: string;
    onClick: () => void;
  };
}

export interface ToastItem extends ToastOptions {
  id: string;
  createdAt: number;
}

interface ToastContextValue {
  showToast: (options: ToastOptions) => string;
  dismissToast: (id: string) => void;
  success: (title: string, message?: string, options?: Partial<ToastOptions>) => string;
  info: (title: string, message?: string, options?: Partial<ToastOptions>) => string;
  warning: (title: string, message?: string, options?: Partial<ToastOptions>) => string;
  error: (title: string, message?: string, options?: Partial<ToastOptions>) => string;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback((options: ToastOptions): string => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    const duration = options.duration ?? 5000;

    const newToast: ToastItem = {
      ...options,
      id,
      type: options.type || 'success',
      createdAt: Date.now(),
      duration,
    };

    setToasts((prev) => [newToast, ...prev].slice(0, 5)); // Keep max 5 toasts

    if (duration > 0) {
      setTimeout(() => {
        dismissToast(id);
      }, duration);
    }

    return id;
  }, [dismissToast]);

  const success = useCallback((title: string, message?: string, options?: Partial<ToastOptions>) => {
    return showToast({ ...options, title, message, type: 'success' });
  }, [showToast]);

  const info = useCallback((title: string, message?: string, options?: Partial<ToastOptions>) => {
    return showToast({ ...options, title, message, type: 'info' });
  }, [showToast]);

  const warning = useCallback((title: string, message?: string, options?: Partial<ToastOptions>) => {
    return showToast({ ...options, title, message, type: 'warning' });
  }, [showToast]);

  const error = useCallback((title: string, message?: string, options?: Partial<ToastOptions>) => {
    return showToast({ ...options, title, message, type: 'error' });
  }, [showToast]);

  return (
    <ToastContext.Provider value={{ showToast, dismissToast, success, info, warning, error }}>
      {children}

      {/* Floating Toast Container */}
      <aside
        aria-label="Notifications"
        className="fixed top-4 right-4 left-4 sm:left-auto sm:top-5 sm:right-5 z-[9999] pointer-events-none flex flex-col gap-2.5 max-w-md w-full"
      >
        {toasts.map((toast) => (
          <ToastCard key={toast.id} toast={toast} onDismiss={() => dismissToast(toast.id)} />
        ))}
      </aside>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextValue => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

// Sub-component for individual toast card with visual styling matching CNAP palette
const ToastCard: React.FC<{ toast: ToastItem; onDismiss: () => void }> = ({ toast, onDismiss }) => {
  const type = toast.type || 'success';

  const typeStyles = {
    success: {
      bg: 'bg-white/95 border-emerald-500/40 text-slate-900',
      badge: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      iconBg: 'bg-emerald-600 text-white',
      accentBorder: 'border-l-4 border-l-emerald-600',
      progress: 'bg-emerald-500',
      icon: <CheckCircle2 className="w-5 h-5 text-white" />,
      tag: 'CONFIRMED',
    },
    info: {
      bg: 'bg-white/95 border-blue-500/40 text-slate-900',
      badge: 'bg-blue-50 text-blue-800 border-blue-200',
      iconBg: 'bg-[#0e3c6a] text-white',
      accentBorder: 'border-l-4 border-l-[#0e3c6a]',
      progress: 'bg-[#0e3c6a]',
      icon: <Sparkles className="w-5 h-5 text-white" />,
      tag: 'NOTICE',
    },
    warning: {
      bg: 'bg-white/95 border-amber-500/40 text-slate-900',
      badge: 'bg-amber-50 text-amber-800 border-amber-200',
      iconBg: 'bg-amber-500 text-slate-950',
      accentBorder: 'border-l-4 border-l-amber-500',
      progress: 'bg-amber-500',
      icon: <AlertTriangle className="w-5 h-5 text-slate-950" />,
      tag: 'ATTENTION',
    },
    error: {
      bg: 'bg-white/95 border-rose-500/40 text-slate-900',
      badge: 'bg-rose-50 text-rose-800 border-rose-200',
      iconBg: 'bg-rose-600 text-white',
      accentBorder: 'border-l-4 border-l-rose-600',
      progress: 'bg-rose-600',
      icon: <AlertCircle className="w-5 h-5 text-white" />,
      tag: 'ERROR',
    },
  }[type];

  return (
    <div
      role="status"
      aria-live="polite"
      className={`pointer-events-auto w-full rounded-xl border ${typeStyles.bg} ${typeStyles.accentBorder} shadow-2xl backdrop-blur-md overflow-hidden transition-all duration-300 transform translate-y-0 opacity-100 animate-in fade-in slide-in-from-top-4`}
    >
      <div className="p-4 sm:p-4.5 flex items-start gap-3.5">
        {/* Leading Icon Badge */}
        <div className={`w-9 h-9 rounded-lg ${typeStyles.iconBg} flex items-center justify-center shrink-0 shadow-sm mt-0.5`}>
          {typeStyles.icon}
        </div>

        {/* Content Body */}
        <div className="flex-1 min-w-0 pr-1">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border uppercase tracking-wider ${typeStyles.badge}`}>
              {typeStyles.tag}
            </span>
            <span className="text-[11px] text-slate-400 font-medium">CNAP Systems</span>
          </div>

          <h4 className="text-sm font-bold text-slate-900 leading-tight">
            {toast.title}
          </h4>

          {toast.message && (
            <p className="text-xs text-slate-600 mt-1 leading-relaxed break-words font-normal">
              {toast.message}
            </p>
          )}

          {toast.action && (
            <div className="mt-2.5">
              <button
                type="button"
                onClick={toast.action.onClick}
                className="text-xs font-bold text-[#0e3c6a] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>{toast.action.label}</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

        {/* Dismiss Button */}
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss notification"
          className="text-slate-400 hover:text-slate-700 hover:bg-slate-100 p-1 rounded-lg transition-colors cursor-pointer shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Auto-dismiss progress countdown line */}
      {toast.duration && toast.duration > 0 ? (
        <div className="h-1 w-full bg-slate-100 overflow-hidden">
          <div
            className={`h-full ${typeStyles.progress}`}
            style={{
              animation: `toastCountdown ${toast.duration}ms linear forwards`,
            }}
          />
        </div>
      ) : null}
    </div>
  );
};
