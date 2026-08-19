import HelpPopover from '../../components/HelpPopover';
import EasyModeCard from '../../components/EasyModeCard';

export default function Plantillas() {
  return (
    <div className="fade-in">
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          Plantillas IaC (Terraform)
          <HelpPopover text="Las 'Plantillas' son como los planos de una casa ya dibujados por un arquitecto profesional. En lugar de inventar cómo conectar la base de datos con la página, simplemente usas una plantilla que ya funciona." />
        </h1>
        
        <EasyModeCard description="Imagina que todas las profesoras del nido tienen que hacer libretas de notas a mano con regla y lápiz. Tomaría horas. Las 'Plantillas' son como usar un formato de Word ya hecho donde solo llenas los nombres. En programación, usamos plantillas (Infraestructura como Código) para armar servidores enteros en 5 minutos en lugar de configurarlos a mano uno por uno." />

        <p style={{ color: 'var(--text-body)' }}>Infraestructura como código. Despliega arquitecturas validadas en AWS, GCP o Azure.</p>
      </header>

      <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
        <div className="bento-card" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--text-dark)' }}>Clúster EKS (Kubernetes)</h3>
          <div style={{ height: '250px', backgroundColor: '#0F172A', borderRadius: '1rem', padding: '1.5rem', fontFamily: 'var(--font-mono)', color: '#2DD4BF', fontSize: '0.85rem', overflowY: 'auto' }}>
            {`resource "aws_eks_cluster" "main" {
  name     = "archcore-cluster"
  role_arn = aws_iam_role.eks_role.arn

  vpc_config {
    subnet_ids = aws_subnet.public[*].id
  }
}

resource "aws_eks_node_group" "workers" {
  cluster_name    = aws_eks_cluster.main.name
  node_role_arn   = aws_iam_role.worker_role.arn
  subnet_ids      = aws_subnet.private[*].id
}`}
          </div>
          <button className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%' }}>Desplegar Plantilla</button>
        </div>

        <div className="bento-card" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--text-dark)' }}>Serverless API Gateway</h3>
          <div style={{ height: '250px', backgroundColor: '#0F172A', borderRadius: '1rem', padding: '1.5rem', fontFamily: 'var(--font-mono)', color: '#2DD4BF', fontSize: '0.85rem', overflowY: 'auto' }}>
            {`resource "aws_api_gateway_rest_api" "api" {
  name = "serverless-gateway"
}

resource "aws_lambda_function" "edge_func" {
  filename      = "function.zip"
  function_name = "EdgeHandler"
  role          = aws_iam_role.lambda.arn
  handler       = "index.handler"
  runtime       = "nodejs18.x"
}`}
          </div>
          <button className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%' }}>Desplegar Plantilla</button>
        </div>
      </div>
    </div>
  );
}
