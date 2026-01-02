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
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-4">
            Produtos em Destaque
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            O melhor para seu <span className="text-gradient">pet</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selecionamos os melhores produtos com preços especiais para você.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <article
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                  <span className="bg-card/90 backdrop-blur-sm text-sm px-3 py-1 rounded-full font-medium">
                    {product.badge}
                  </span>
                  {product.discount && (
                    <span className="bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full font-bold">
                      {product.discount}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-heading font-bold text-foreground">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <Button variant="default" className="w-full">
                  <ShoppingCart className="w-4 h-4" />
                  Comprar Agora
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Tag className="w-5 h-5" />
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
