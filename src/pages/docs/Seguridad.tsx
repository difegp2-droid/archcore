import HelpPopover from '../../components/HelpPopover';
import EasyModeCard from '../../components/EasyModeCard';

export default function Seguridad() {
  return (
    <div className="fade-in">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
        Seguridad Zero-Trust
        <HelpPopover text="'Zero-Trust' significa 'No confíes en nadie'. Incluso si alguien está dentro de la red privada, el sistema le pedirá su credencial para cada cosa que intente hacer." />
      </h1>
      
      <EasyModeCard description="'Zero Trust' es como el protocolo de seguridad de la puerta de tu nido. No importa si es un papá que viene todos los días (un usuario recurrente); el señor de seguridad SIEMPRE le va a pedir su DNI o su fotocheck antes de dejarlo entrar al salón. En la web, nunca confiamos en nadie por defecto, siempre pedimos 'fotocheck' (tokens)." />

      <p style={{ fontSize: '1.1rem', color: 'var(--text-body)', marginBottom: '2rem', lineHeight: 1.8 }}>
        La seguridad no es una característica, es la base de la arquitectura. Implementa estándares globales y previene vulnerabilidades (OWASP).
      </p>

      <div style={{ backgroundColor: 'var(--bg-sec)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)', marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>OAuth 2.0 y OpenID Connect</h3>
        <p style={{ color: 'var(--text-body)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          Nunca manejes contraseñas directamente. Delega la autenticación a un Identity Provider (Auth0, Okta, AWS Cognito) mediante tokens JWT de corta duración y Refresh Tokens.
        </p>
        <div className="code-snippet">
          {`// Middleware de validación JWT (Node.js/Express)
const jwt = require('jsonwebtoken');

function requireAuth(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.status(401).json({ error: 'Token missing' });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Token invalid or expired' });
    req.user = user; // RBAC roles attached
    next();
  });
}`}
        </div>
      </div>

      <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', marginTop: '3rem' }}>OWASP Top 10 Mitigation</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        <div style={{ backgroundColor: 'var(--bg-sec)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
          <h4 style={{ color: 'var(--text-dark)', marginBottom: '0.5rem' }}>A01: Inyección (SQL/NoSQL)</h4>
          <p style={{ color: 'var(--text-body)', fontSize: '0.95rem' }}>
            Usar Query Builders u ORMs (Prisma, TypeORM) que parametrizan las consultas automáticamente.
          </p>
        </div>

        <div style={{ backgroundColor: 'var(--bg-sec)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
          <h4 style={{ color: 'var(--text-dark)', marginBottom: '0.5rem' }}>A03: Cross-Site Scripting (XSS)</h4>
          <p style={{ color: 'var(--text-body)', fontSize: '0.95rem' }}>
            Evitar usar \`dangerouslySetInnerHTML\` en React y configurar CSP (Content Security Policy) en el servidor.
          </p>
        </div>

        <div style={{ backgroundColor: 'var(--bg-sec)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
          <h4 style={{ color: 'var(--text-dark)', marginBottom: '0.5rem' }}>A07: Fallos Criptográficos</h4>
          <p style={{ color: 'var(--text-body)', fontSize: '0.95rem' }}>
            Forzar TLS 1.3 en el Load Balancer. No usar MD5 o SHA1; usar Argon2id para hashear datos sensibles.
          </p>
        </div>
      </div>
    </div>
  );
}
