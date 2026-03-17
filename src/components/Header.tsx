import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import rdbizLogo from '@/assets/logo.jpg';
import ceoRavi from '@/assets/ceo-ravi.jpg';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="bg-card border-b-4 border-primary px-8 py-6 shadow-soft">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={rdbizLogo} 
              alt="RDBiz AI Solution Logo" 
              className="h-20 object-contain"
            />
          </div>

          {/* Header Text */}
          <div className="flex-1 mx-8 fade-in flex items-center justify-center text-center">
            <p className="text-foreground text-2xl leading-relaxed max-w-2xl">
              <span className="gradient-text font-bold text-4xl">RDBiz AI Solution</span>
              <br />
              <strong className="text-primary mt-2 block animate-pulse">Intelligence Driven • Innovation Delivered</strong>
            </p>
          </div>

          {/* CEO Section */}
          <div 
            className="text-center cursor-pointer hover-lift"
            onClick={() => setIsModalOpen(true)}
          >
            <img 
              src={ceoRavi} 
              alt="CEO Dr. Ravi Dakshinamoorthy" 
              className="w-20 h-20 rounded-full border-2 border-primary object-cover mx-auto"
            />
            <p className="mt-2 text-sm">
              <strong className="text-secondary">Dr. Ravi Dakshinamoorthy</strong>
              <br />
              <span className="text-primary text-xs font-medium">Our Founder & CEO</span>
            </p>
          </div>
        </div>
      </header>

      {/* CEO Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto text-left">

          <DialogHeader>
            <div className="flex justify-center mb-4">
              <img 
                src={ceoRavi} 
                alt="CEO Dr. Ravi Dakshinamoorthy" 
                className="w-32 h-32 rounded-full border-4 border-primary object-cover"
              />
            </div>
            <DialogTitle className="text-2xl gradient-text">
             Dr. Ravi Dakshinamoorthy
            </DialogTitle>
          </DialogHeader>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p className="text-lg font-semibold text-primary">Dr. Ravi Dakshinamoorthy, Ph.D. (USA)</p>

            <p>Dr. Ravi Dakshinamoorthy, our CEO, is a multi-disciplinary, multi-project professional who has served in WCDMA/GSM/GPRS/GERAN/3GPP standards body as an American Representative.</p>

            <p>He has served in multiple boards, councils, interviewing committees, and selection boards. He also served as a Proposal & Program Manager for the $2.4 Billion U.S. Joint Force Programme "Objective Gateway Inc. 2" at Boeing Integrated Defense Systems division.</p>

            <p>Dr. Ravi also served as the Chief Systems Architect for the prestigious VC-X Recapitalization IRAD Programme for the US AF1 programme.</p>

            <p>With deep expertise in U.S. defense and aerospace, Dr. Ravi has held very high capacities, leading multi-million to billion-dollar programmes for over 24 years.</p>

            <p>He has successfully led System-of-Systems, System Engineering, and Architecture Management, along with integrated tasks for many large-scale programmes and projects world wide.</p>

            <div className="bg-primary/10 p-4 rounded-lg">
              <p className="font-semibold text-secondary mb-3">Major Programme Leadership:</p>
              <ul className="space-y-2 ml-4">
                <li>• <strong>The Future Combat Systems</strong> (US Army)</li>
                <li>• <strong>Objective Gateway Increment 2</strong> (US Joint Services)</li>
                <li>• <strong>Presidential Aircraft Recapitalizations VC-X</strong> (US AF-1) – Supreme Commander-in-Chief of operations plane (planned tentatively for the 2019 per 2009 predictions)</li>
              </ul>
            </div>

            <p>✅ <strong>Dr. Ravi has also served as an independent consultant and Project Manager to the State Governor of Washington, USA,</strong> in producing a 640-page report on the RV–1 Consolidation Program "for legislative assembly members' discussion and budgetary debate."</p>

            <div className="bg-secondary/10 p-4 rounded-lg">
              <p className="font-semibold text-primary mb-3">✅ Dr. Ravi is a legendary leader in IT development with thirty years of post-doctorate experience, having interest in diversified subject areas including:</p>
              <div className="grid md:grid-cols-2 gap-2 ml-4">
                <ul className="space-y-1">
                  <li>• System-of-Systems (SoS)</li>
                  <li>• Service Oriented Architecture (SOA)</li>
                  <li>• Very Large Scale Systems Integration</li>
                  <li>• Artificial Intelligence & Machine Learning</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Wired – Wireless – Mobile Ad-hoc Networks</li>
                  <li>• Embedded Systems & Deep Learning</li>
                  <li>• Application Development in a variety of domains</li>
                  <li>• Natural Language Processing & Computer Vision</li>
                </ul>
              </div>
            </div>

            <p>✅ <strong className="text-primary">Dr. Ravi is a great mentor,</strong> involved in numerous projects and programmes in skills development and training. Mentees worldwide are pursuing their careers very successfully under his career guidance and training.</p>

            <p>⭐ <strong className="text-secondary">Dr. Ravi has coached and developed students</strong> entering the workforce in core professional categories, and working professionals to achieve and advance in their career to the next level.</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Header;
