import React from 'react';
import { GROUP_NAME } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{GROUP_NAME}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Advancing the frontier of intelligent systems through interdisciplinary research and collaboration.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-slate-400 text-sm">
              Computer Science Building, Room 404<br />
              123 University Ave<br />
              Cambridge, MA 02139
            </p>
            <p className="text-slate-400 text-sm mt-2">contact@novalab.edu</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Internal Wiki</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub Organization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">University Home</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} {GROUP_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};