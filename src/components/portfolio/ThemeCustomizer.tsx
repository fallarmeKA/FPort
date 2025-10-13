import { motion } from 'framer-motion';
import { useState } from 'react';
import { Palette, Monitor, Smartphone } from 'lucide-react';

const colorThemes = [
  { name: 'Blue', primary: 'hsl(221, 83%, 53%)', secondary: 'hsl(221, 83%, 45%)' },
  { name: 'Purple', primary: 'hsl(262, 83%, 58%)', secondary: 'hsl(262, 83%, 50%)' },
  { name: 'Green', primary: 'hsl(142, 76%, 36%)', secondary: 'hsl(142, 76%, 30%)' },
  { name: 'Orange', primary: 'hsl(25, 95%, 53%)', secondary: 'hsl(25, 95%, 45%)' },
  { name: 'Pink', primary: 'hsl(330, 81%, 60%)', secondary: 'hsl(330, 81%, 52%)' },
  { name: 'Teal', primary: 'hsl(173, 80%, 40%)', secondary: 'hsl(173, 80%, 32%)' },
];

interface ThemeCustomizerProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeCustomizer({ isDark, onToggle }: ThemeCustomizerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(colorThemes[0]);

  const applyTheme = (theme: typeof colorThemes[0]) => {
    setSelectedTheme(theme);
    // Apply CSS custom properties to root
    const root = document.documentElement;
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--primary-foreground', isDark ? 'hsl(0, 0%, 98%)' : 'hsl(0, 0%, 9%)');
    
    // Update CSS variables for better integration
    const primaryHsl = theme.primary.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
    if (primaryHsl) {
      const [, h, s, l] = primaryHsl;
      root.style.setProperty('--primary', `${h} ${s}% ${l}%`);
    }
  };

  return (
    <>
      {/* Theme Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-20 right-6 z-50 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      >
        <Palette className="w-5 h-5" />
      </motion.button>

      {/* Theme Customizer Panel */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 right-20 z-40 w-80 bg-card border border-border rounded-2xl shadow-xl p-6"
        >
          <h3 className="text-lg font-semibold mb-6">Customize Theme</h3>
          
          {/* Dark/Light Mode Toggle */}
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3">Appearance</h4>
            <div className="flex space-x-2">
              <button
                onClick={onToggle}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                  !isDark ? 'bg-primary text-primary-foreground' : 'border-border hover:bg-accent'
                }`}
              >
                <Monitor className="w-4 h-4" />
                <span>Light</span>
              </button>
              <button
                onClick={onToggle}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                  isDark ? 'bg-primary text-primary-foreground' : 'border-border hover:bg-accent'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>Dark</span>
              </button>
            </div>
          </div>

          {/* Color Theme Selection */}
          <div>
            <h4 className="text-sm font-medium mb-3">Accent Color</h4>
            <div className="grid grid-cols-3 gap-3">
              {colorThemes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => applyTheme(theme)}
                  className={`relative w-full h-12 rounded-lg border-2 transition-all ${
                    selectedTheme.name === theme.name 
                      ? 'border-primary scale-105' 
                      : 'border-border hover:scale-105'
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`
                  }}
                >
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-medium">
                    {theme.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Preview */}
          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <h5 className="text-sm font-medium mb-2">Preview</h5>
            <div className="space-y-2">
              <div className="h-2 bg-primary rounded-full w-3/4"></div>
              <div className="h-2 bg-muted rounded-full w-1/2"></div>
              <div className="h-2 bg-muted rounded-full w-2/3"></div>
            </div>
          </div>

          {/* Reset Button */}
          <button
            onClick={() => applyTheme(colorThemes[0])}
            className="w-full mt-4 px-4 py-2 text-sm border border-border rounded-lg hover:bg-accent transition-colors"
          >
            Reset to Default
          </button>
        </motion.div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}