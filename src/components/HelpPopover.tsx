import { useState, useRef, useEffect } from 'react';
import { HelpCircle } from 'lucide-react';

export default function HelpPopover({ text }: { text: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={popoverRef} style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', marginLeft: '0.5rem', verticalAlign: 'middle' }}>
      <button 
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsOpen(!isOpen); }}
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', padding: '0' }}
        title="¿Qué es esto?"
      >
        <HelpCircle size={18} />
      </button>
      {isOpen && (
        <div style={{
          position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: '0.75rem',
          backgroundColor: '#1E293B', color: 'white', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.9rem',
          width: '280px', zIndex: 100, boxShadow: '0 10px 25px rgba(0,0,0,0.5)', border: '1px solid #334155', fontWeight: 400,
          textAlign: 'left', lineHeight: 1.5, cursor: 'default'
        }}>
          {text}
          <div style={{ textAlign: 'right', marginTop: '0.5rem' }}>
            <span style={{ color: '#38BDF8', cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600 }} onClick={() => setIsOpen(false)}>Entendido</span>
          </div>
          {/* Triangulito abajo */}
          <div style={{
            position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
            borderWidth: '6px', borderStyle: 'solid', borderColor: '#1E293B transparent transparent transparent'
          }} />
        </div>
      )}
    </div>
  );
}
