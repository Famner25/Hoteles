import type React from 'react';

const PageHeader: React.FC = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Top 5 Mejores Hoteles de Riohacha
        </h1>
        <p className="mt-2 text-lg text-primary-foreground/90">Tu guía esencial para una estadía inolvidable en La Guajira</p>
      </div>
    </header>
  );
};

export default PageHeader;
