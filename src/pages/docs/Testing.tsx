import HelpPopover from '../../components/HelpPopover';
import EasyModeCard from '../../components/EasyModeCard';

export default function Testing() {
  return (
    <div className="fade-in">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
        Testing y Calidad de Código
        <HelpPopover text="El 'Testing' es como un simulacro de incendios. Programamos robots (tests) para que intenten usar la página y se aseguren de que nada esté roto antes de lanzarla al público." />
      </h1>

      <EasyModeCard description="Hacer 'Testing' a una página web es literalmente igual a hacer un simulacro de sismos con los niños. Antes de que ocurra una emergencia real o lleguen los usuarios de verdad, nosotros ensayamos los pasos una y otra vez con robots simulados para estar 100% seguros de que nadie se va a lastimar ni la página se va a caer." />

      <p style={{ fontSize: '1.1rem', color: 'var(--text-body)', marginBottom: '2rem', lineHeight: 1.8 }}>
        Probar microservicios requiere ir más allá de los test unitarios. Debemos validar los contratos de las APIs y orquestar flujos End-to-End completos simulando usuarios reales.
      </p>

      <div style={{ backgroundColor: 'var(--bg-sec)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)', marginBottom: '2rem' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>End-to-End Testing (Cypress)</h3>
        <p style={{ color: 'var(--text-body)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          Cypress permite controlar un navegador Chromium automatizado para probar el Frontend y el Backend integrados, interceptando llamadas de red si es necesario.
        </p>
        <div className="code-snippet">
          {`// cypress/e2e/login_checkout.cy.js
describe('Flujo de Compra E2E', () => {
  it('Debe permitir a un usuario loguearse y comprar un producto', () => {
    cy.visit('https://app.archcore.dev/login');
    
    // Login
    cy.get('input[name=email]').type('demo@archcore.dev');
    cy.get('input[name=password]').type('SuperSecret123!');
    cy.get('button[type=submit]').click();
    
    // Verificamos que el JWT se haya seteado
    cy.window().its('localStorage.access_token').should('exist');
    
    // Interceptar la API de pagos para no cobrar dinero real en tests
    cy.intercept('POST', '/api/v1/payments', { statusCode: 200, body: { status: 'CONFIRMED' } }).as('pay');
    
    // Ejecutar compra
    cy.get('.product-card').first().click();
    cy.get('#buy-button').click();
    
    cy.wait('@pay');
    cy.contains('¡Compra exitosa!').should('be.visible');
  });
});`}
        </div>
      </div>
    </div>
  );
}
