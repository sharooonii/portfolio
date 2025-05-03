import { Toaster } from 'sonner';

function ToastRoot({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster 
        position="top-right" // default is "top-right"
        richColors={false}  // default is false
        closeButton={false} // default is false
      />
    </>
  );
}

export default ToastRoot;