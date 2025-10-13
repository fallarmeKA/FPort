import { motion } from 'framer-motion';
import { Download, FileText, Eye } from 'lucide-react';

export default function ResumeSection() {
  const handleDownloadResume = () => {
    // In a real implementation, this would generate or serve a PDF
    // For now, we'll simulate the download
    const link = document.createElement('a');
    link.href = '/resume-kyle-fallarme.pdf'; // You would put your actual resume file here
    link.download = 'Kyle-Fallarme-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = () => {
    // Open resume in new tab for viewing
    window.open('/resume-kyle-fallarme.pdf', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 text-center"
    >
      <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
        <FileText className="w-8 h-8 text-primary" />
      </div>
      
      <h3 className="text-2xl font-bold mb-4">Download My Resume</h3>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        Get a detailed overview of my experience, skills, and accomplishments in a professional format.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleDownloadResume}
          className="flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          <Download className="w-4 h-4" />
          <span>Download PDF</span>
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleViewResume}
          className="flex items-center space-x-2 px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
        >
          <Eye className="w-4 h-4" />
          <span>View Online</span>
        </motion.button>
      </div>
      
      <p className="text-sm text-muted-foreground mt-4">
        Last updated: December 2023
      </p>
    </motion.div>
  );
}