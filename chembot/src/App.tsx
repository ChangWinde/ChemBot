import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MEMBERS, NEWS, PUBLICATIONS, RESEARCH_AREAS, GROUP_DESCRIPTION } from './constants';
import { MemberRole } from './types';
import { ArrowRight, Mail, Download, ExternalLink, Search, ChevronRight, ArrowUpRight, ArrowDownUp } from 'lucide-react';

// --- Sub-components ---

const Home: React.FC<{ setView: (v: string) => void }> = ({ setView }) => (
  <div className="bg-white">
    {/* Apple-style Hero: Clean, Centered, Big Type */}
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden pt-20">
      
      {/* Subtle background gradient mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-tr from-blue-50 to-indigo-50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-slate-900 mb-6 leading-[1.05]">
          Building the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Autonomous AI Chemist.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
          Pioneering autonomous laboratory robots that combine chemical intelligence with dexterous manipulation to accelerate the frontiers of basic research.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => setView('projects')} 
            className="min-w-[160px] px-8 py-4 rounded-full bg-blue-600 text-white font-medium text-[17px] hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
          >
            Explore Projects
          </button>
          <button 
            onClick={() => setView('publications')} 
            className="min-w-[160px] px-8 py-4 rounded-full bg-slate-50 text-blue-600 font-medium text-[17px] hover:bg-slate-100 transition-all"
          >
            Latest Research
          </button>
        </div>
      </div>
    </div>

    {/* Bento Grid Layout for Highlights */}
    <div className="max-w-7xl mx-auto px-6 pb-32">
      <div className="mb-12 flex items-end justify-between">
         <h2 className="text-4xl font-semibold text-slate-900 tracking-tight">Focus Areas</h2>
         <button onClick={() => setView('projects')} className="text-blue-600 hover:text-blue-700 font-medium flex items-center transition-colors text-sm">
            View all <ChevronRight className="h-4 w-4" />
         </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
        {/* Large Featured Card */}
        <div 
          onClick={() => setView('projects')}
          className="lg:col-span-2 group relative overflow-hidden rounded-[32px] bg-slate-50 cursor-pointer transition-transform duration-500 hover:scale-[1.01]"
        >
          <div className="absolute inset-0">
             <img src={RESEARCH_AREAS[0].imageUrl} alt={RESEARCH_AREAS[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 p-10 text-white">
            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-xs font-semibold uppercase tracking-wider">
              Featured Project
            </span>
            <h3 className="text-4xl font-semibold mb-3">{RESEARCH_AREAS[0].title}</h3>
            <p className="text-lg text-white/90 max-w-lg leading-relaxed">{RESEARCH_AREAS[0].description}</p>
          </div>
        </div>

        {/* Secondary Vertical Card */}
        <div 
           onClick={() => setView('projects')}
           className="group relative overflow-hidden rounded-[32px] bg-white border border-slate-100 cursor-pointer hover:shadow-2xl transition-all duration-500"
        >
           <div className="h-1/2 overflow-hidden bg-slate-100">
             <img src={RESEARCH_AREAS[1].imageUrl} alt={RESEARCH_AREAS[1].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
           </div>
           <div className="h-1/2 p-8 flex flex-col justify-between">
             <div>
               <h3 className="text-2xl font-semibold text-slate-900 mb-2">{RESEARCH_AREAS[1].title}</h3>
               <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{RESEARCH_AREAS[1].description}</p>
             </div>
             <div className="flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
               Learn more <ArrowRight className="ml-2 h-4 w-4" />
             </div>
           </div>
        </div>

         {/* Third Card */}
         <div 
           onClick={() => setView('projects')}
           className="md:col-span-2 lg:col-span-3 group relative overflow-hidden rounded-[32px] bg-slate-50 cursor-pointer flex flex-col md:flex-row items-center border border-slate-100 hover:shadow-2xl transition-all duration-500"
        >
           <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center order-2 md:order-1">
             <h3 className="text-3xl font-semibold text-slate-900 mb-4">{RESEARCH_AREAS[2].title}</h3>
             <p className="text-slate-500 text-lg leading-relaxed mb-8">{RESEARCH_AREAS[2].description}</p>
             <span className="text-blue-600 font-medium flex items-center group-hover:gap-2 transition-all">
                Explore XAI Research <ArrowRight className="ml-2 h-4 w-4" />
             </span>
           </div>
           <div className="w-full md:w-1/2 h-[300px] md:h-full order-1 md:order-2 overflow-hidden">
             <img src={RESEARCH_AREAS[2].imageUrl} alt={RESEARCH_AREAS[2].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
           </div>
        </div>
      </div>
    </div>
  </div>
);

const People: React.FC = () => {
  const projectMembers = MEMBERS.filter(m => 
    [MemberRole.PI, MemberRole.POSTDOC, MemberRole.PHD].includes(m.role)
  );

  const internsAndAlumni = MEMBERS.filter(m => 
    ![MemberRole.PI, MemberRole.POSTDOC, MemberRole.PHD].includes(m.role) || 
    m.role === MemberRole.ALUMNI || 
    m.role === MemberRole.UNDERGRAD
  );

  const MemberCard = ({ member }: { member: typeof MEMBERS[0] }) => (
    <div className="group flex flex-col items-center text-center">
      <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden bg-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-500 ring-4 ring-transparent group-hover:ring-blue-50">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
           {member.email && (
             <a href={`mailto:${member.email}`} className="p-2 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform shadow-lg">
               <Mail className="h-4 w-4 text-blue-600" />
             </a>
           )}
           {member.website && (
             <a href={member.website} target="_blank" rel="noreferrer" className="p-2 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform shadow-lg">
               <ExternalLink className="h-4 w-4 text-blue-600" />
             </a>
           )}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
      <p className="text-blue-600 text-sm font-medium mb-3">{member.role}</p>
      <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{member.bio}</p>
    </div>
  );

  return (
    <div className="pt-32 pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen bg-white">
      <div className="text-center max-w-3xl mx-auto mb-24">
        <h1 className="text-5xl font-semibold text-gray-900 mb-6 tracking-tight">Team</h1>
        <p className="text-xl text-gray-500 font-light">
          A multidisciplinary group of researchers passionate about solving intelligence.
        </p>
      </div>
      
      {/* Project Members Section */}
      <div className="mb-32">
        <h2 className="text-3xl font-semibold text-gray-900 mb-16 text-center">Project Members</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {projectMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* Interns Section */}
      {(internsAndAlumni.length > 0) && (
        <div className="border-t border-gray-100 pt-24">
          <h2 className="text-2xl font-semibold text-gray-900 mb-12 text-center">Interns & Alumni</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {internsAndAlumni.map((member) => (
              <div key={member.id} className="text-center group">
                 <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 transition-all">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                 </div>
                 <h4 className="font-medium text-gray-900">{member.name}</h4>
                 <p className="text-xs text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Projects: React.FC = () => (
  <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen bg-white">
    <div className="max-w-3xl mb-24">
      <h1 className="text-5xl font-semibold text-gray-900 mb-6 tracking-tight">Our Projects</h1>
      <p className="text-xl text-gray-500 font-light">
        Long-term initiatives exploring the intersection of AI, design, and society.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-12">
      {RESEARCH_AREAS.map((area, index) => (
        <div 
          key={area.id} 
          className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row"
        >
          <div className="md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden">
             <img 
              src={area.imageUrl} 
              alt={area.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
          <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase mb-4">Project 0{index + 1}</span>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">{area.title}</h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">{area.description}</p>
            
            <button className="self-start px-6 py-3 rounded-full border border-gray-200 text-gray-900 font-medium hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all flex items-center">
              Explore Research <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

type SortOption = 'newest' | 'oldest' | 'az';

const Publications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [sortOption, setSortOption] = useState<SortOption>('newest');
  
  const allTags = useMemo(() => {
    const tags = new Set<string>(['All']);
    PUBLICATIONS.forEach(pub => pub.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  const filteredPubs = useMemo(() => {
    let result = PUBLICATIONS.filter(pub => {
      const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            pub.authors.some(a => a.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesTag = selectedTag === 'All' || pub.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });

    // Sorting Logic
    result = result.sort((a, b) => {
      if (sortOption === 'newest') return b.year - a.year;
      if (sortOption === 'oldest') return a.year - b.year;
      if (sortOption === 'az') return a.title.localeCompare(b.title);
      return 0;
    });

    return result;
  }, [searchTerm, selectedTag, sortOption]);

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen bg-white">
      <div className="mb-16">
         <h1 className="text-5xl font-semibold text-gray-900 mb-6 tracking-tight">Publications</h1>
         <p className="text-xl text-gray-500 font-light max-w-2xl mb-12">
           Selected peer-reviewed articles and conference papers.
         </p>

         {/* Toolbar: Search, Filter, Sort */}
         <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 flex flex-col md:flex-row gap-4 border border-gray-100 sticky top-20 z-30 shadow-sm">
            
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search authors, titles..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 pl-10 pr-4 py-2.5 rounded-xl text-sm border-none focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative min-w-[160px]">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <ArrowDownUp className="h-4 w-4" />
              </div>
              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as SortOption)}
                className="w-full appearance-none bg-gray-50 pl-10 pr-8 py-2.5 rounded-xl text-sm border-none focus:ring-2 focus:ring-blue-100 text-gray-700 font-medium cursor-pointer"
              >
                <option value="newest">Year (Newest)</option>
                <option value="oldest">Year (Oldest)</option>
                <option value="az">Title (A-Z)</option>
              </select>
            </div>
            
            {/* Tags */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 px-2 items-center scrollbar-hide max-w-full md:max-w-md">
               {allTags.map(tag => (
                 <button
                   key={tag}
                   onClick={() => setSelectedTag(tag)}
                   className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                     selectedTag === tag 
                       ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
                       : 'bg-white border border-gray-100 text-gray-600 hover:bg-gray-50'
                   }`}
                 >
                   {tag}
                 </button>
               ))}
            </div>
         </div>
      </div>

      <div className="space-y-4">
        {filteredPubs.length > 0 ? (
          filteredPubs.map((pub) => (
            <div key={pub.id} className="group bg-white rounded-xl border border-gray-100 p-6 sm:p-8 hover:shadow-xl hover:border-blue-100 transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                 {/* Left Info: Year & Venue */}
                 <div className="lg:w-48 flex-shrink-0 flex flex-row lg:flex-col gap-3 items-center lg:items-start">
                   <span className="text-3xl font-light text-gray-900">{pub.year}</span>
                   <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-wider rounded-md">
                     {pub.venue}
                   </span>
                 </div>
                 
                 {/* Main Content */}
                 <div className="flex-1">
                   <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                     {pub.title}
                   </h3>
                   <p className="text-gray-600 mb-3 font-medium text-sm">
                     {pub.authors.join(', ')}
                   </p>
                   
                   {/* Tags */}
                   <div className="flex gap-2 mb-4">
                     {pub.tags.map(tag => (
                       <span key={tag} className="text-xs text-gray-400 font-medium">#{tag}</span>
                     ))}
                   </div>

                   {/* Links */}
                   <div className="flex gap-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 pt-2">
                      {pub.pdfUrl && (
                        <a href="#" className="flex items-center text-xs font-bold text-gray-900 hover:text-blue-600 transition-colors">
                          <Download className="h-3 w-3 mr-1.5" /> PDF
                        </a>
                      )}
                      {pub.codeUrl && (
                        <a href="#" className="flex items-center text-xs font-bold text-gray-900 hover:text-blue-600 transition-colors">
                          <ExternalLink className="h-3 w-3 mr-1.5" /> Code
                        </a>
                      )}
                   </div>
                 </div>

                 {/* Decorative Arrow */}
                 <div className="hidden lg:block text-gray-200 group-hover:text-blue-600 transition-colors">
                    <ArrowUpRight className="h-6 w-6" />
                 </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 text-gray-400">
            No publications found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

// New Timeline Layout
const News: React.FC = () => (
  <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen bg-white">
    <div className="max-w-3xl mb-16">
      <h1 className="text-5xl font-semibold text-gray-900 mb-6 tracking-tight">Newsroom</h1>
      <p className="text-xl text-gray-500 font-light">
        Latest updates from the lab, including awards, publications, and events.
      </p>
    </div>
    
    <div className="max-w-4xl mx-auto relative pl-8 border-l-2 border-gray-100 space-y-16">
      {NEWS.map((item) => (
        <div key={item.id} className="relative">
          {/* Timeline Dot */}
          <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-blue-600 shadow-sm"></div>
          
          <div className="group">
            <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-semibold text-blue-600">
                  {item.date}
                </span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${
                      item.category === 'Award' ? 'bg-amber-50 text-amber-700 border-amber-100' : 
                      item.category === 'Publication' ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : 
                      'bg-gray-50 text-gray-600 border-gray-200'
                    }`}>
                  {item.category}
                </span>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors cursor-pointer">
              {item.title}
            </h2>
            
            <p className="text-gray-600 leading-relaxed max-w-2xl text-lg font-light">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Contact: React.FC = () => (
  <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen bg-white">
    <div className="max-w-3xl mb-20">
      <h1 className="text-5xl font-semibold text-gray-900 mb-6 tracking-tight">Get in Touch</h1>
      <p className="text-xl text-gray-500 font-light">
        We are always open to collaboration and new ideas.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
      <div className="space-y-12">
        <div>
           <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Visit Us</h3>
           <p className="text-lg text-gray-600 font-light leading-relaxed">
             Massachusetts Institute of Technology<br/>
             CSAIL, Building 32, Room 404<br/>
             32 Vassar Street<br/>
             Cambridge, MA 02139
           </p>
        </div>
        
        <div>
           <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Email</h3>
           <a href="mailto:contact@novalab.edu" className="text-lg text-blue-600 hover:text-blue-700 transition-colors font-medium">
             contact@novalab.edu
           </a>
        </div>

        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-2">Prospective Students</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            We review applications for Fall 2025. Please ensure you have read our recent work before reaching out.
          </p>
          <button className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-1 hover:border-gray-900 transition-all">
            Application Guidelines
          </button>
        </div>
      </div>

      <form className="space-y-6 bg-white" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">First Name</label>
            <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-100 transition-all outline-none" placeholder="Jane" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Last Name</label>
            <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-100 transition-all outline-none" placeholder="Doe" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-100 transition-all outline-none" placeholder="jane@example.com" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Message</label>
          <textarea rows={6} className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-100 transition-all outline-none resize-none" placeholder="How can we help?"></textarea>
        </div>
        <button className="w-full bg-blue-600 text-white font-medium py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-xl hover:-translate-y-1">
          Send Message
        </button>
      </form>
    </div>
  </div>
);

function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch (currentView) {
      case 'home': return <Home setView={setCurrentView} />;
      case 'people': return <People />;
      case 'publications': return <Publications />;
      case 'news': return <News />;
      case 'projects': return <Projects />;
      case 'contact': return <Contact />;
      default: return <Home setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar currentView={currentView} setView={setCurrentView} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
}

export default App;