import register, { activeRequestsGauge, httpRequestCounter, httpRequestDuration } from '@/lib/prom';

export async function GET(request: Request) {
  httpRequestCounter.inc({ method: 'GET', route: '/api/metrics', status: '200' });

  const randomActiveUsers = Math.floor(Math.random() * 10) + 1;
  activeRequestsGauge.set(randomActiveUsers);

  const fakeDuration = Math.random() * 0.5; 
  httpRequestDuration.observe({ method: 'GET', route: '/api/metrics', status: '200' }, fakeDuration);

  const metrics = await register.metrics();
  return new Response(metrics, {
    headers: { 'Content-Type': register.contentType },
  });
}

export const dynamic = 'force-dynamic';