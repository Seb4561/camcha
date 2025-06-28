import React, { useState } from 'react';
import { User, Building2, Mail, ArrowRight, Shield, Star, Users } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-300/30 to-rose-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-br from-rose-300/25 to-orange-300/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-br from-orange-300/20 to-amber-300/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-amber-400/15 to-rose-400/15 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-amber-400/40 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-rose-400/40 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-32 left-16 w-5 h-5 bg-orange-400/40 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-amber-500/40 rounded-full animate-bounce delay-1500"></div>
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-rose-500/40 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute top-1/3 right-10 w-4 h-4 bg-orange-500/40 rounded-full animate-bounce delay-100"></div>
        
        {/* Diagonal lines pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-amber-600/10 to-transparent transform rotate-12"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-rose-600/10 to-transparent transform -rotate-12"></div>
        </div>
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/20 via-transparent to-rose-100/20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/30 to-transparent"></div>
      </div>

      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-200/30 via-rose-200/20 to-orange-200/30 backdrop-blur-sm"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-amber-600 via-rose-600 to-orange-600 bg-clip-text text-transparent mb-6 tracking-tight drop-shadow-sm">
              Camcha
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-amber-500 via-rose-500 to-orange-500 mx-auto rounded-full shadow-lg"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-stone-700 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            El punto de encuentro profesional para modelos webcam y estudios.
          </p>
          
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-10 max-w-4xl mx-auto shadow-2xl border border-white/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-rose-50/50"></div>
            <div className="relative">
              <p className="text-lg text-stone-700 leading-relaxed">
                Nuestra misión es transformar la industria webcam en un entorno{' '}
                <span className="font-bold text-amber-700 bg-amber-100/50 px-2 py-1 rounded-lg">seguro y profesional</span>. Conectamos
                modelos con estudios verificados, garantizando{' '}
                <span className="font-bold text-rose-700 bg-rose-100/50 px-2 py-1 rounded-lg">transparencia y respeto</span> en cada conexión.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {/* Para Modelos */}
            <div className="group">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/60 hover:border-amber-200/60 h-full relative overflow-hidden hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 to-rose-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-rose-500 rounded-3xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-stone-800 mb-6">Para Modelos</h3>
                  
                  <p className="text-stone-600 leading-relaxed mb-8 text-lg">
                    Descubre oportunidades con estudios verificados en un entorno seguro para crecer
                    profesionalmente.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-stone-600 group-hover:text-stone-700 transition-colors">
                      <div className="flex items-center justify-center w-8 h-8 bg-amber-100 rounded-full mr-4">
                        <Shield className="w-4 h-4 text-amber-600" />
                      </div>
                      <span className="font-medium">Estudios verificados y seguros</span>
                    </div>
                    <div className="flex items-center text-stone-600 group-hover:text-stone-700 transition-colors">
                      <div className="flex items-center justify-center w-8 h-8 bg-amber-100 rounded-full mr-4">
                        <Star className="w-4 h-4 text-amber-600" />
                      </div>
                      <span className="font-medium">Crecimiento profesional</span>
                    </div>
                    <div className="flex items-center text-stone-600 group-hover:text-stone-700 transition-colors">
                      <div className="flex items-center justify-center w-8 h-8 bg-amber-100 rounded-full mr-4">
                        <Users className="w-4 h-4 text-amber-600" />
                      </div>
                      <span className="font-medium">Comunidad de apoyo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Para Estudios */}
            <div className="group">
              <div className="bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/60 hover:border-rose-200/60 h-full relative overflow-hidden hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/30 to-orange-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-500 to-orange-500 rounded-3xl mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <Building2 className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-stone-800 mb-6">Para Estudios</h3>
                  
                  <p className="text-stone-600 leading-relaxed mb-8 text-lg">
                    Encuentra el talento ideal para tu estudio. Publica vacantes y conecta con modelos profesionales.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-stone-600 group-hover:text-stone-700 transition-colors">
                      <div className="flex items-center justify-center w-8 h-8 bg-rose-100 rounded-full mr-4">
                        <User className="w-4 h-4 text-rose-600" />
                      </div>
                      <span className="font-medium">Modelos verificados</span>
                    </div>
                    <div className="flex items-center text-stone-600 group-hover:text-stone-700 transition-colors">
                      <div className="flex items-center justify-center w-8 h-8 bg-rose-100 rounded-full mr-4">
                        <Shield className="w-4 h-4 text-rose-600" />
                      </div>
                      <span className="font-medium">Proceso transparente</span>
                    </div>
                    <div className="flex items-center text-stone-600 group-hover:text-stone-700 transition-colors">
                      <div className="flex items-center justify-center w-8 h-8 bg-rose-100 rounded-full mr-4">
                        <Star className="w-4 h-4 text-rose-600" />
                      </div>
                      <span className="font-medium">Talento profesional</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/30 via-rose-100/20 to-orange-100/30"></div>
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/60 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/40 via-rose-50/30 to-orange-50/40"></div>
            <div className="relative">
              <div className="text-center mb-10">
                <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-amber-500 via-rose-500 to-orange-500 rounded-full mb-8 mx-auto shadow-2xl">
                  <Mail className="w-12 h-12 text-white" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-700 via-rose-700 to-orange-700 bg-clip-text text-transparent mb-6">
                  Sé de los primeros en enterarte
                </h2>
                
                <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
                  Deja tu correo para recibir una notificación exclusiva de nuestro lanzamiento.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo electrónico"
                    className="flex-1 px-8 py-5 rounded-2xl border-2 border-stone-200 focus:outline-none focus:ring-4 focus:ring-amber-500/20 focus:border-amber-500 text-stone-700 placeholder-stone-400 bg-white/80 backdrop-blur-sm text-lg transition-all duration-300"
                    required
                  />
                  
                  <button
                    type="submit"
                    disabled={isSubmitted}
                    className="px-10 py-5 bg-gradient-to-r from-amber-600 via-rose-600 to-orange-600 text-white font-bold rounded-2xl hover:from-amber-700 hover:via-rose-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group shadow-xl hover:shadow-2xl transform hover:scale-105 text-lg"
                  >
                    {isSubmitted ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 bg-green-400 rounded-full flex items-center justify-center">
                          <span className="text-xs">✓</span>
                        </span>
                        Enviado
                      </span>
                    ) : (
                      <>
                        Notifícame
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
              
              {isSubmitted && (
                <div className="mt-6 p-6 bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-200 rounded-2xl text-center backdrop-blur-sm">
                  <p className="text-green-800 font-bold text-lg">
                    ¡Gracias! Te notificaremos cuando estemos listos.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-stone-100/80 to-transparent backdrop-blur-sm"></div>
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="mb-8">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-700 to-rose-700 bg-clip-text text-transparent mb-4">Camcha</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-600 via-rose-600 to-orange-600 mx-auto rounded-full shadow-lg"></div>
          </div>
          
          <p className="text-stone-600 mb-6 text-lg font-medium">
            Transformando la industria webcam con profesionalismo y respeto.
          </p>
          
          <p className="text-stone-500">
            © 2024 Camcha. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;