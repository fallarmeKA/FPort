import { motion } from 'framer-motion';
import { CheckCircle, Clock, Calendar } from 'lucide-react';

export default function AvailabilityStatus() {
  const isAvailable = true; // You can make this dynamic based on your actual availability
  const nextAvailable = "January 2024";
  const responseTime = "Within 24 hours";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className={`bg-card border rounded-2xl p-4 shadow-lg backdrop-blur-sm ${
        isAvailable ? 'border-green-500/50' : 'border-orange-500/50'
      }`}>
        <div className="flex items-center space-x-3">
          <div className={`w-3 h-3 rounded-full ${
            isAvailable ? 'bg-green-500 animate-pulse' : 'bg-orange-500'
          }`} />
          <div>
            <div className="flex items-center space-x-2">
              {isAvailable ? (
                <CheckCircle className="w-4 h-4 text-green-500" />
              ) : (
                <Clock className="w-4 h-4 text-orange-500" />
              )}
              <span className="font-semibold text-sm">
                {isAvailable ? 'Available for freelance' : 'Currently booked'}
              </span>
            </div>
            <div className="flex items-center space-x-4 mt-1 text-xs text-muted-foreground">
              {!isAvailable && (
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>Next: {nextAvailable}</span>
                </div>
              )}
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{responseTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}