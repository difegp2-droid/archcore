import HelpPopover from '../../components/HelpPopover';
import EasyModeCard from '../../components/EasyModeCard';

export default function Patrones() {
  return (
    <div className="fade-in">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
        Patrones de Diseño Distribuido
        <HelpPopover text="Los 'Patrones de Diseño' son como recetas de cocina que los ingenieros usan para resolver problemas comunes sin tener que reinventar la rueda cada vez." />
      </h1>
      
      <EasyModeCard description="Imagina que 'Saga Pattern' es como organizar una excursión del nido. Si el bus se cancela a última hora, la directora tiene que hacer un 'Rollback': llamar a los papás y devolver la plata. Por otro lado, 'CQRS' es como tener dos pizarras separadas: una pizarra pequeña solo para que la profesora escriba la asistencia rápido (escribir), y un mural gigante afuera para que los papás lean los avisos rápido (leer)." />

      <p style={{ fontSize: '1.1rem', color: 'var(--text-body)', marginBottom: '2rem', lineHeight: 1.8 }}>
        En la web moderna, los patrones arquitectónicos determinan cómo el código escala.
        Implementar un monolito es sencillo, pero escalar a millones de usuarios requiere segmentar responsabilidades y manejar la consistencia eventual.
      </p>

      <div style={{ display: 'grid', gap: '2rem' }}>
        <div style={{ backgroundColor: 'var(--bg-sec)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary)', display: 'flex', alignItems: 'center' }}>
            1. Saga Pattern
            <HelpPopover text="Imagina que compras algo por internet: El sistema tiene que cobrarte, luego reservar el producto y luego pedir el envío. Si falla el envío, el Saga Pattern es el encargado de devolverte el dinero automáticamente." />
          </h3>
          <p style={{ color: 'var(--text-body)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Gestiona transacciones largas y distribuidas dividiéndolas en una secuencia de transacciones locales. Si un paso falla, se ejecutan eventos de "compensación" (rollback).
          </p>
          <div className="code-snippet">
            {`async function createOrderSaga(order) {
  try {
    const payment = await paymentService.process(order);
    const inventory = await inventoryService.reserve(order);
    const shipping = await shippingService.schedule(order);
    return { status: 'CONFIRMED', shippingId: shipping.id };
  } catch (error) {
    // Si la reserva de inventario falla, debemos reembolsar el pago
    await compensationService.rollbackPayment(order);
    throw new SagaError('Transaction failed, rollback executed');
  }
}`}
          </div>
        </div>

        <div style={{ backgroundColor: 'var(--bg-sec)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--primary)', display: 'flex', alignItems: 'center' }}>
            2. CQRS (Command Query Responsibility Segregation)
            <HelpPopover text="Es como tener dos libretas: una solo para escribir muy rápido (cuando la gente publica cosas) y otra solo para leer muy rápido (cuando la gente busca cosas). Así el sistema nunca se traba." />
          </h3>
          <p style={{ color: 'var(--text-body)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Separa las operaciones de lectura (Queries) de las de escritura (Commands). Esto permite escalar bases de datos de lectura (ej. ElasticSearch) independientemente de la base transaccional maestra (ej. PostgreSQL).
          </p>
          <div className="code-snippet">
            {`// Command: Mutar estado (Escritura en base de datos primaria)
class CreateUserCommand {
  execute(userData) {
    const user = new User(userData);
    db.write.save(user);
    eventBus.publish('UserCreated', user);
  }
}

// Query: Leer estado (Lectura desde réplica o caché)
class GetUserQuery {
  execute(userId) {
    // Se lee de un almacén optimizado para lectura (ej. Redis)
    return cache.read(\`user:\${userId}\`);
  }
}`}
          </div>
        </div>
      </div>
    </div>
  );
}
