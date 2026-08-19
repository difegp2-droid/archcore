import { useState, useEffect, useRef } from 'react';
import { Activity, Server, AlertTriangle, PowerOff, Terminal } from 'lucide-react';
import HelpPopover from '../../components/HelpPopover';
import EasyModeCard from '../../components/EasyModeCard';

interface NodeMetrics {
  id: string;
  region: string;
  cpu: number;
  latency: number;
  status: 'healthy' | 'warning' | 'danger' | 'offline';
  replicas: number;
}

interface LogEntry {
  id: number;
  time: string;
  type: 'INFO' | 'WARN' | 'ERROR';
  message: string;
}

export default function Simuladores() {
  const [isRunning, setIsRunning] = useState(false);
  const [targetTraffic, setTargetTraffic] = useState<number>(1000);
  const [currentTraffic, setCurrentTraffic] = useState<number>(1000);
  
  const [nodes, setNodes] = useState<NodeMetrics[]>([
    { id: '1', region: 'us-east-1 (N. Virginia)', cpu: 15, latency: 35, status: 'healthy', replicas: 2 },
    { id: '2', region: 'eu-central-1 (Frankfurt)', cpu: 12, latency: 42, status: 'healthy', replicas: 2 },
    { id: '3', region: 'ap-northeast-1 (Tokyo)', cpu: 18, latency: 60, status: 'healthy', replicas: 2 },
  ]);

  const [logs, setLogs] = useState<LogEntry[]>([{ id: 0, time: new Date().toLocaleTimeString(), type: 'INFO', message: 'Sistema inicializado. Esperando tráfico...' }]);
  const logContainerRef = useRef<HTMLDivElement>(null);

  const addLog = (type: 'INFO' | 'WARN' | 'ERROR', message: string) => {
    setLogs(prev => {
      const newLogs = [...prev, { id: Date.now(), time: new Date().toLocaleTimeString(), type, message }];
      if (newLogs.length > 50) newLogs.shift();
      return newLogs;
    });
  };

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Suavizar la transición del tráfico actual hacia el tráfico objetivo
      setCurrentTraffic(prev => {
        const diff = targetTraffic - prev;
        return Math.floor(prev + diff * 0.2);
      });

      setNodes(currentNodes => {
        const activeNodes = currentNodes.filter(n => n.status !== 'offline');
        
        if (activeNodes.length === 0) return currentNodes; // Total outage

        const baseTrafficPerNode = currentTraffic / activeNodes.length;

        return currentNodes.map(node => {
          if (node.status === 'offline') {
            return { ...node, cpu: 0, latency: 0 };
          }

          // La carga real depende del tráfico asignado y cuántas réplicas tiene para soportarlo
          // 1 réplica sana puede manejar ~2000 req/s antes de saturarse
          const capacity = node.replicas * 2000;
          let loadRatio = baseTrafficPerNode / capacity;
          
          // Añadir ruido aleatorio
          loadRatio += (Math.random() * 0.1 - 0.05);

          let newCpu = Math.min(100, Math.max(5, loadRatio * 100));
          let newLatency = 20 + (newCpu * 1.5) + (Math.random() * 10);

          if (newCpu > 95) {
            newLatency += 500 + Math.random() * 1000; // Penalización por saturación
          }

          let status: 'healthy' | 'warning' | 'danger' | 'offline' = 'healthy';
          if (newCpu > 90 || newLatency > 1000) status = 'danger';
          else if (newCpu > 70 || newLatency > 300) status = 'warning';

          // Auto-scaling logic (Triggered probabilísticamente si CPU está alta)
          let newReplicas = node.replicas;
          if (newCpu > 85 && Math.random() > 0.6 && newReplicas < 10) {
            newReplicas++;
            addLog('INFO', `[Auto-Scaling] Añadiendo réplica en ${node.region} (Total: ${newReplicas})`);
            newCpu -= 20; // Alivio inmediato simulado
          } else if (newCpu < 30 && newReplicas > 2 && Math.random() > 0.8) {
            newReplicas--;
            addLog('INFO', `[Auto-Scaling] Removiendo réplica en ${node.region} (Total: ${newReplicas})`);
          }

          // Warnings and Alerts
          if (status === 'danger' && node.status !== 'danger') {
            addLog('WARN', `Saturación crítica detectada en ${node.region} (CPU: ${newCpu.toFixed(1)}%)`);
          }

          return { ...node, cpu: newCpu, latency: newLatency, status, replicas: newReplicas };
        });
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTraffic, currentTraffic]);

  const killNode = (id: string) => {
    setNodes(prev => prev.map(n => {
      if (n.id === id) {
        const isOffline = n.status === 'offline';
        addLog(isOffline ? 'INFO' : 'ERROR', isOffline ? `Nodo ${n.region} reiniciado manualmente.` : `Caída catastrófica inducida en ${n.region}`);
        return { ...n, status: isOffline ? 'healthy' : 'offline', cpu: 0, latency: 0, replicas: isOffline ? 2 : 0 };
      }
      return n;
    }));
  };

  const activeNodesCount = nodes.filter(n => n.status !== 'offline').length;
  const isGlobalOutage = activeNodesCount === 0;

  return (
    <div className="fade-in">
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-dark)', display: 'flex', alignItems: 'center' }}>
          Simulador de Tráfico Global
          <HelpPopover text="Este panel simula cómo una aplicación web mundial (como Netflix o WhatsApp) reacciona cuando millones de personas intentan entrar exactamente al mismo tiempo." />
        </h1>
        <p style={{ color: 'var(--text-body)' }}>Ingeniería del caos en tiempo real. Controla la carga y observa cómo el clúster reacciona.</p>
      </header>

      <EasyModeCard description="¡Esta es la parte más divertida! Si le das a 'Iniciar Prueba de Estrés', es como si tocaras el timbre del recreo y salieran 45,000 niños corriendo al patio al mismo tiempo. Vas a ver cómo los 'profesores' (los servidores en Virginia, Frankfurt y Tokyo) se estresan (se ponen rojos). Pero como son muy inteligentes, automáticamente llamarán a más profesores de refuerzo (los Pods) para calmar la situación." />

      {isGlobalOutage && (
        <div style={{ padding: '1rem', backgroundColor: '#EF444420', border: '1px solid #EF4444', borderRadius: '0.5rem', marginBottom: '2rem', color: '#EF4444', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
          <AlertTriangle size={20} />
          OUTAGE GLOBAL: Todos los nodos están caídos. El sistema no puede procesar tráfico.
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
        
        {/* Controles */}
        <div className="bento-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Activity size={24} color={isRunning ? '#EF4444' : 'var(--primary)'} />
              Métricas en Vivo: {currentTraffic.toLocaleString()} Req/s
              <HelpPopover text="'Req/s' significa 'Peticiones por Segundo'. Es la cantidad de personas o dispositivos haciendo clic en la página en este instante." />
            </h3>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              {!isRunning ? (
                <button 
                  className="btn btn-primary" 
                  onClick={() => { setIsRunning(true); setTargetTraffic(45000); addLog('INFO', 'Iniciando prueba de estrés masiva...'); }}
                >
                  Iniciar Prueba de Estrés
                </button>
              ) : (
                <button 
                  className="btn btn-outline" 
                  style={{ borderColor: '#EF4444', color: '#EF4444' }} 
                  onClick={() => { setIsRunning(false); setTargetTraffic(1000); addLog('INFO', 'Deteniendo simulación. Enfriando clúster...'); }}
                >
                  Detener Simulación
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Nodos */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {nodes.map(node => (
            <div key={node.id} style={{ 
              backgroundColor: 'var(--bg-sec)', 
              padding: '1.5rem', 
              borderRadius: '1rem', 
              border: `1px solid ${node.status === 'danger' || node.status === 'offline' ? '#EF4444' : node.status === 'warning' ? '#F59E0B' : 'var(--border)'}`,
              opacity: node.status === 'offline' ? 0.6 : 1,
              position: 'relative'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Server size={18} /> {node.region}
                </span>
                
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  {node.status !== 'offline' && (
                    <span className="tag" style={{ display: 'flex', alignItems: 'center' }}>
                      {node.replicas} Pods
                      <HelpPopover text="Los Pods son 'clones' del servidor. Si hay mucho tráfico, el sistema crea más clones automáticamente para repartir el trabajo y evitar colapsar." />
                    </span>
                  )}
                  <button 
                    onClick={() => killNode(node.id)}
                    title={node.status === 'offline' ? 'Reiniciar Nodo' : 'Matar Nodo (Chaos)'}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: node.status === 'offline' ? 'var(--primary)' : 'var(--text-muted)', padding: '0.2rem', display: 'flex', alignItems: 'center' }}
                  >
                    <PowerOff size={18} />
                  </button>
                  <HelpPopover text="Este botón apaga el servidor a la fuerza. Sirve para ver cómo los otros servidores se estresan intentando hacer el trabajo del servidor que acabas de matar." />
                </div>
              </div>
              
              {node.status === 'offline' ? (
                <div style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#EF4444', fontWeight: 600 }}>
                  NODO APAGADO
                </div>
              ) : (
                <>
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontSize: '0.85rem', color: 'var(--text-body)' }}>
                      <span>CPU Usage</span>
                      <span>{node.cpu.toFixed(1)}%</span>
                    </div>
                    <div style={{ height: '6px', backgroundColor: 'var(--bg)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${node.cpu}%`, backgroundColor: node.status === 'danger' ? '#EF4444' : node.status === 'warning' ? '#F59E0B' : 'var(--primary)', transition: 'width 0.5s ease' }} />
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontSize: '0.85rem', color: 'var(--text-body)' }}>
                      <span>Latency</span>
                      <span style={{ color: node.status === 'danger' ? '#EF4444' : 'inherit' }}>{node.latency.toFixed(0)} ms</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Consola de Logs */}
        <div style={{ backgroundColor: '#0F172A', borderRadius: '1rem', border: '1px solid var(--border)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '0.75rem 1.5rem', backgroundColor: '#1E293B', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', borderBottom: '1px solid #334155' }}>
            <Terminal size={16} /> Cluster Events (Live)
            <HelpPopover text="Aquí puedes leer como un 'hacker' las decisiones que está tomando el sistema robótico para evitar una caída, como encender nuevos clones (Auto-Scaling) o detectar errores." />
          </div>
          <div ref={logContainerRef} style={{ padding: '1.5rem', height: '200px', overflowY: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {logs.map(log => (
              <div key={log.id} style={{ 
                color: log.type === 'ERROR' ? '#F87171' : log.type === 'WARN' ? '#FBBF24' : '#38BDF8',
                display: 'flex', gap: '1rem'
              }}>
                <span style={{ color: '#64748B' }}>[{log.time}]</span>
                <span style={{ width: '45px', fontWeight: 600 }}>{log.type}</span>
                <span>{log.message}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
