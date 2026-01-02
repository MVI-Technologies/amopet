import { Button } from '@/components/ui/button';
import { ShoppingCart, Tag } from 'lucide-react';
import productRacao from '@/assets/product-racao.jpg';
import productBrinquedo from '@/assets/product-brinquedo.jpg';
import productShampoo from '@/assets/product-shampoo.jpg';
import productCama from '@/assets/product-cama.jpg';

const products = [
  {
    id: 1,
    name: 'Ração Premium Gold',
    description: 'Alimento completo para cães adultos com ingredientes naturais e proteína de alta qualidade.',
    price: 189.90,
    originalPrice: 229.90,
    image: productRacao,
    badge: '🔥 Mais Vendido',
    discount: '-17%',
  },
  {
    id: 2,
    name: 'Brinquedo Ossinho Soft',
    description: 'Pelúcia macia e resistente para horas de diversão. Ideal para cães de todos os portes.',
    price: 49.90,
    originalPrice: null,
    image: productBrinquedo,
    badge: '🆕 Novidade',
    discount: null,
  },
  {
    id: 3,
    name: 'Shampoo Neutro Premium',
    description: 'Fórmula suave com extrato de aveia e camomila. Ideal para peles sensíveis.',
    price: 39.90,
    originalPrice: 54.90,
    image: productShampoo,
    badge: '⭐ Favorito',
    discount: '-27%',
  },
  {
    id: 4,
    name: 'Caminha Nuvem Soft',
    description: 'Cama ultra macia com espuma de memória. Seu pet vai dormir como nunca!',
    price: 159.90,
    originalPrice: 199.90,
    image: productCama,
    badge: '😴 Conforto',
    discount: '-20%',
  },
];

const Products = () => {
  return (
    <section id="produtos" className="section-padding bg-background">
      <div className="container-amopet">
        {/* Section Header */}
        <div className="section-header animate-slide-up">
          <span className="section-label">
            Produtos em Destaque
          </span>
          <h2 className="section-title">
            O melhor para seu <span className="text-gradient">pet</span>
          </h2>
          <p className="section-description">
            Selecionamos os melhores produtos com preços especiais para você.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid-4-cols">
          {products.map((product, index) => (
            <article
              key={product.id}
              className="group bg-card rounded-xl md:rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-slide-up flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Badges */}
                <div className="absolute top-2 md:top-3 left-2 md:left-3 right-2 md:right-3 flex justify-between items-start gap-2">
                  <span className="bg-card/90 backdrop-blur-sm text-xs md:text-sm px-2 md:px-3 py-1 rounded-full font-medium truncate">
                    {product.badge}
                  </span>
                  {product.discount && (
                    <span className="bg-primary text-primary-foreground text-xs md:text-sm px-2 md:px-3 py-1 rounded-full font-bold flex-shrink-0">
                      {product.discount}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-5 flex flex-col flex-grow">
                <h3 className="font-heading font-bold text-base md:text-lg text-foreground mb-1.5 md:mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 md:mb-4 line-clamp-2 flex-grow">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl font-heading font-bold text-foreground">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs md:text-sm text-muted-foreground line-through">
                      R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <Button variant="default" className="w-full" size="default">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Comprar Agora</span>
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10 md:mt-12">
          <Button variant="outline" size="lg">
            <Tag className="w-5 h-5" />
            <span>Ver Todos os Produtos</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
