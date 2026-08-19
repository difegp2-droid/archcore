import { Lightbulb } from 'lucide-react';

interface EasyModeCardProps {
  title?: string;
  description: string;
}

export default function EasyModeCard({ title = "💡 En palabras simples...", description }: EasyModeCardProps) {
  return (
    <div style={{
      backgroundColor: '#0F172A', // Dark blue background
      border: '2px solid #38BDF8', // Light blue border
      borderRadius: '1rem',
      padding: '1.5rem',
      marginBottom: '2.5rem',
      display: 'flex',
      gap: '1rem',
      alignItems: 'flex-start',
      boxShadow: '0 4px 20px rgba(56, 189, 248, 0.15)'
    }}>
      <div style={{
        backgroundColor: 'rgba(56, 189, 248, 0.2)',
        padding: '0.75rem',
        borderRadius: '50%',
        color: '#38BDF8',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}>
        <Lightbulb size={24} />
      </div>
      <div>
        <h4 style={{ color: '#38BDF8', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 600 }}>
          {title}
        </h4>
        <p style={{ color: 'white', fontSize: '1.05rem', lineHeight: 1.6 }}>
          {description}
        </p>
      </div>
    </div>
  );
}
