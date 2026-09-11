import { useState, useEffect } from 'react';
import { Clock, Activity, User, ChevronRight } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import ExecutiveOverview from '@/components/tabs/ExecutiveOverview';
import FaceMatcher from '@/components/tabs/FaceMatcher';
import FirClusterEngine from '@/components/tabs/FirClusterEngine';
import NetworkGraph from '@/components/tabs/NetworkGraph';
import GisMap from '@/components/tabs/GisMap';
import XaiAudit from '@/components/tabs/XaiAudit';

export type TabId =
  | 'overview'
  | 'face'
  | 'fir'
  | 'network'
  | 'gis'
  | 'xai';

const TABS: { id: TabId; label: string; component: React.FC }[] = [
  { id: 'overview', label: 'Executive Overview', component: ExecutiveOverview },
  { id: 'face', label: 'Target Re-ID & Face Matcher', component: FaceMatcher },
  { id: 'fir', label: 'FIR Entity & M.O. Cluster Engine', component: FirClusterEngine },
  { id: 'network', label: 'Suspect Network Graph', component: NetworkGraph },
  { id: 'gis', label: 'GIS Crime Map & Patrol Optimizer', component: GisMap },
  { id: 'xai', label: 'Court-Ready XAI Audit Generator', component: XaiAudit },
];

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const ActiveComponent = TABS.find((t) => t.id === activeTab)!.component;
  const activeLabel = TABS.find((t) => t.id === activeTab)!.label;

  return (
    <div className="relative h-screen text-[#F1F5F9] flex flex-col overflow-hidden">
      <div className="ambient-bg" />

      {/* Header */}
      <header className="relative z-50 glass border-b border-[#243044] px-5 py-2.5 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative w-11 h-11">
            <div className="absolute inset-0 rounded-xl bg-[#080B11] border border-amber-500/40 flex items-center justify-center glow-amber overflow-hidden">
              <img src="/image.png" alt="RakshaNetra logo" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 rounded-xl border border-amber-400/20 animate-pulse-ring" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-xl font-black tracking-tight text-amber-400 text-glow-amber" style={{ letterSpacing: '0.05em' }}>
                RAKSHANETRA
              </h1>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 tracking-[0.15em]">
                TACTICAL INTELLIGENCE GRID v3.0
              </span>
            </div>
            <p className="text-[10px] text-slate-500 font-mono mt-0.5 tracking-wide">
              Integrated Surveillance · Predictive Analytics · National Security Shield
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 font-mono text-sm text-slate-300">
            <Clock className="w-4 h-4 text-amber-400" />
            <span className="tabular-nums">
              {now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
              {'  '}
              {now.toLocaleTimeString('en-IN', { hour12: false })}
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
            <span className="relative flex">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="absolute w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </span>
            <span className="text-[11px] font-mono text-emerald-400 tracking-wide">
              ALL 6 AI NODES OPERATIONAL
            </span>
          </div>
          <div className="flex items-center gap-2 pl-4 border-l border-[#243044]">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-600/30 to-slate-700 border border-amber-500/30 flex items-center justify-center">
              <User className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-slate-200">Inspector R. Sharma</p>
              <p className="text-[10px] text-slate-500">Crime Branch · L3 Clearance</p>
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="relative z-10 flex flex-1 overflow-hidden">
        <Sidebar tabs={TABS} activeTab={activeTab} onSelect={setActiveTab} />
        <main className="flex-1 overflow-y-auto grid-bg relative">
          {/* Breadcrumb */}
          <div className="sticky top-0 z-20 glass border-b border-[#243044] px-6 py-2 flex items-center gap-2 text-[11px] font-mono text-slate-500">
            <span>RAKSHANETRA</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-amber-400">{activeLabel}</span>
            <span className="ml-auto flex items-center gap-2">
              <Activity className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">SECURE CHANNEL · AES-256</span>
            </span>
          </div>
          <div className="p-6">
            <div key={activeTab} className="animate-slide-up">
              <ActiveComponent />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
