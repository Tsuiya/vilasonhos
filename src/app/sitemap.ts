import { MetadataRoute } from 'next'
import { MOCK_PRODUCTS } from '@/lib/mock-data'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.viladossonhosibitinga.com.br'

  // Rotas estáticas
  const routes = [
    '',
    '/outono-inverno',
    '/categoria/meninas',
    '/categoria/meninos',
    '/categoria/bebes',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Rotas dinâmicas de produtos
  const productRoutes = MOCK_PRODUCTS.map((product) => ({
    url: `${baseUrl}/produto/${product.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...routes, ...productRoutes]
}
