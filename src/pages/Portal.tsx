export default function Portal() {
  return (
    <div className="fade-in">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-dark)' }}>Portal de Arquitectura</h1>
          <p style={{ color: 'var(--text-body)' }}>Bienvenido a tu entorno de simuladores y plantillas.</p>
        </div>
        <button className="btn btn-primary">Nuevo Despliegue</button>
      </header>

      <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
        <div className="bento-card fade-in" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--text-dark)' }}>Simulador de Microservicios</h3>
          <p style={{ color: 'var(--text-body)', marginBottom: '2rem' }}>Prueba cómo reacciona tu infraestructura ante caídas en los nodos.</p>
          <div style={{ height: '200px', backgroundColor: 'var(--bg-sec)', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
            [Área Interactiva del Simulador]
          </div>
        </div>

        <div className="bento-card fade-in" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--text-dark)' }}>Plantillas Terraform (IaC)</h3>
          <p style={{ color: 'var(--text-body)', marginBottom: '2rem' }}>Despliega clústeres de Kubernetes pre-configurados en segundos.</p>
          <div style={{ height: '200px', backgroundColor: '#0F172A', borderRadius: '1rem', padding: '1.5rem', fontFamily: 'var(--font-mono)', color: '#2DD4BF', fontSize: '0.85rem' }}>
            {`resource "aws_eks_cluster" "main" {
  name     = "archcore-cluster"
  role_arn = aws_iam_role.eks_role.arn

  vpc_config {
    subnet_ids = aws_subnet.public[*].id
  }
}`}
          </div>
        </div>
      </div>
    </div>
  );
}
