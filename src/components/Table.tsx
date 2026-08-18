export default function Table() {
  return (
    <section id="protocolos" className="section">
      <div className="container">
        <div className="section-header slide-up">
          <h2>Protocolos de Intercambio de Datos</h2>
          <p>El estándar de comunicación entre los distintos nodos de la web moderna.</p>
        </div>

        <div className="table-container fade-in">
          <table className="tech-table">
            <thead>
              <tr>
                <th>Protocolo</th>
                <th>Formato (Payload)</th>
                <th>Caso de Uso Principal</th>
                <th>Latencia Esperada</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>REST API</strong></td>
                <td>JSON / XML</td>
                <td>Servicios CRUD estándar, integración con terceros, clientes web tradicionales.</td>
                <td><span className="latency-badge medium">Media</span></td>
              </tr>
              <tr>
                <td><strong>GraphQL</strong></td>
                <td>JSON (Estructurado)</td>
                <td>Aplicaciones complejas donde el cliente necesita pedir datos muy específicos sin over-fetching.</td>
                <td><span className="latency-badge medium">Media</span></td>
              </tr>
              <tr>
                <td><strong>gRPC / Protobuf</strong></td>
                <td>Binario (Comprimido)</td>
                <td>Contratos estrictos (.proto), serialización ultrarrápida, soporte nativo para streams multiplexados sobre HTTP/2.</td>
                <td><span className="latency-badge low">Ultra Baja</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
