import { useState } from 'react';
import { 
  ChevronLeft, ChevronRight, BarChart3, ExternalLink, DollarSign, 
  TrendingUp, Users, Briefcase, Target, Zap, CheckCircle, Lightbulb, 
  Layout 
} from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';


const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#06b6d4', '#6366f1', '#f97316'];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Project Links
  const projectLinks = [
    { 
    name: 'G-MATE Ecosystem', 
    url: 'https://g-mate-delta.vercel.app/', 
    color: 'from-indigo-600 to-blue-500', // Blank thaka bondho hobe
    description: 'Click to view live demo →' 
  },
    { name: 'G-MATE Ecosystem', url: 'https://g-mate-delta.vercel.app/', color: 'indigo' },
    { name: 'EduStream ERP', url: 'https://edu-stream-erp.vercel.app/', color: 'blue' },
    { name: 'GKHIDMAH Platform', url: 'https://g-khidmah.vercel.app/index.html', color: 'green' },
    { name: 'GORUN Partner Ecosystem', url: 'https://gorun-partner-ecosystem.vercel.app/expert/index.html', color: 'purple' },
    { name: 'GNEXT Ecosystem', url: 'https://gnext-ecosystem.vercel.app/', color: 'orange' },
    { name: 'Study Abroad CRM', url: 'https://study-abroad-crm-nine.vercel.app/track.html', color: 'pink' }
  ];

  // Revenue Streams Data
  const revenueStreamsData = [
    { name: 'SaaS Subscriptions', value: 35 },
    { name: 'Marketplace Commissions', value: 25 },
    { name: 'Licensing Fees', value: 20 },
    { name: 'Custom Development', value: 15 },
    { name: 'Support Services', value: 5 }
  ];

  // Financial Projections (Converted to BDT in thousands)
const financialProjectionsData = [
  { month: 'M1', revenue: 60, costs: 40, profit: 20, users: 50 },
  { month: 'M3', revenue: 180, costs: 70, profit: 110, users: 200 },
  { month: 'M6', revenue: 420, costs: 120, profit: 300, users: 500 },
  { month: 'M9', revenue: 720, costs: 180, profit: 540, users: 850 },
  { month: 'M12', revenue: 1080, costs: 240, profit: 840, users: 1200 },
  { month: 'Y2', revenue: 2400, costs: 480, profit: 1920, users: 3000 },
  { month: 'Y3', revenue: 5400, costs: 960, profit: 4440, users: 7500 }
];

// Investment Breakdown (Converted to BDT)
const investmentBreakdownData = [
  { category: 'Marketing Budget', amount: 55, detail: 'Paid ads, SEO, lead conversion' },
  { category: 'Workspace & Operations', amount: 30, detail: 'Office rent & utilities' },
  { category: 'Founder Allowance', amount: 25, detail: 'Professional dedication' },
  { category: 'Tools & Infrastructure', amount: 12, detail: 'Cloud & subscriptions' }
];

  // Market Opportunity Data
  const marketOpportunityData = [
    { sector: 'EduStream', potential: 95, reach: 85, competition: 40 },
    { sector: 'GKHIDMAH', potential: 88, reach: 70, competition: 60 },
    { sector: 'GORUN', potential: 82, reach: 65, competition: 45 },
    { sector: 'GLOOK', potential: 90, reach: 75, competition: 55 }
  ];

  // Partnership Options
  const partnershipOptions = [
    {
      type: 'Option A: Partner',
      benefits: [
        'Equity ownership in all products',
        'Profit-sharing model',
        'Monthly basic allowance',
        'Long-term value creation',
        'Strategic decision involvement'
      ],
      roi: '300-500% in 3 years'
    },
    {
      type: 'Option B: Employee',
      benefits: [
        'Fixed professional salary',
        'Sales-based incentives',
        'Performance bonuses',
        'Career growth path',
        'No equity stake'
      ],
      roi: 'Stable monthly income'
    }
  ];

  const slides = [
    // Slide 1: Cover Page
    {
      title: 'Cover',
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-12 text-center px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-2xl text-white -m-12 p-12">
          <div className="space-y-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-8 py-3 rounded-full">
              <p className="text-xl font-semibold">Strategic Business Proposal 2026</p>
            </div>
            <h1 className="text-7xl font-bold leading-tight">
              Strategic Software Venture<br/>& Partnership Proposal
            </h1>
            <p className="text-3xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Building Scalable B2B & B2C Ecosystems through Innovation
            </p>
          </div>

          <div className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                <Users className="w-12 h-12" />
              </div>
            </div>
            <p className="text-2xl font-semibold mb-2">Presented by</p>
            <p className="text-4xl font-bold mb-2">Mobashir Ahmed Nasrullah</p>
            <p className="text-xl text-blue-100">Tech Partner & Software Strategist</p>
          </div>

          <div className="flex items-center space-x-8 mt-8">
            <div className="text-5xl">🚀</div>
            <div className="text-5xl">💡</div>
            <div className="text-5xl">📈</div>
            <div className="text-5xl">🤝</div>
          </div>
        </div>
      )
    },

    // Slide 2: The Vision
    {
      title: 'Step 1 - The Vision (What, How, Why)',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 px-6 py-2 rounded-full mb-4">
              <p className="text-blue-800 font-bold">STEP 1</p>
            </div>
            <h2 className="text-5xl font-bold text-blue-600">The Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg border-2 border-blue-200">
              <div className="text-6xl mb-4 text-center">❓</div>
              <h3 className="text-3xl font-bold text-blue-800 mb-4 text-center">What It Is</h3>
              <p className="text-xl text-gray-700 text-center leading-relaxed">
                A next-generation software house focusing on high-growth <span className="font-bold text-blue-600">SaaS products</span> and <span className="font-bold text-blue-600">enterprise services</span>
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg border-2 border-purple-200">
              <div className="text-6xl mb-4 text-center">⚙️</div>
              <h3 className="text-3xl font-bold text-purple-800 mb-4 text-center">How It Works</h3>
              <p className="text-xl text-gray-700 text-center leading-relaxed">
                We use <span className="font-bold text-purple-600">modular technology</span> (Firebase/Firestore) to build products that solve <span className="font-bold text-purple-600">fragmented industry workflows</span>
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg border-2 border-green-200">
              <div className="text-6xl mb-4 text-center">🎯</div>
              <h3 className="text-3xl font-bold text-green-800 mb-4 text-center">Why It Matters</h3>
              <p className="text-xl text-gray-700 text-center leading-relaxed">
                Most businesses lack automation; we provide the <span className="font-bold text-green-600">"all-in-one" digital infrastructure</span> they need to scale
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-10 rounded-2xl shadow-2xl text-white">
            <div className="flex items-start space-x-6">
              <Lightbulb className="w-16 h-16 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-semibold mb-3 text-blue-200">KEY STATEMENT</p>
                <p className="text-3xl font-bold leading-relaxed">
                  "We are building a dual-revenue engine: immediate cash flow through custom services and long-term wealth through our own proprietary products like EduStream and GKHIDMAH."
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 3: Operational Requirements
    {
      title: 'Step 2 - Operational Requirements (The Essentials)',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-purple-100 px-6 py-2 rounded-full mb-4">
              <p className="text-purple-800 font-bold">STEP 2</p>
            </div>
            <h2 className="text-5xl font-bold text-purple-600">Operational Requirements</h2>
            <p className="text-2xl text-gray-600 mt-4">The Essentials for Success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg border-l-4 border-blue-600">
              <div className="flex items-start space-x-6">
                <div className="text-6xl">👥</div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-800 mb-4">Manpower</h3>
                  <ul className="space-y-3 text-xl text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                      <span>In-house expert developer team</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                      <span>Results-driven sales force</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                      <span>Dedicated customer support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg border-l-4 border-green-600">
              <div className="flex items-start space-x-6">
                <div className="text-6xl">🏢</div>
                <div>
                  <h3 className="text-3xl font-bold text-green-800 mb-4">Workspace</h3>
                  <ul className="space-y-3 text-xl text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                      <span>Professional operational hub</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                      <span>Collaboration-ready environment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                      <span>Client trust and credibility</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg border-l-4 border-purple-600">
              <div className="flex items-start space-x-6">
                <div className="text-6xl">⚙️</div>
                <div>
                  <h3 className="text-3xl font-bold text-purple-800 mb-4">Tools</h3>
                  <ul className="space-y-3 text-xl text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                      <span>Cloud infrastructure (Firebase/AWS)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                      <span>AI-driven virtual try-on tools</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-purple-600 mr-3 flex-shrink-0 mt-1" />
                      <span>Workforce tracking systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg border-l-4 border-orange-600">
              <div className="flex items-start space-x-6">
                <div className="text-6xl">📢</div>
                <div>
                  <h3 className="text-3xl font-bold text-orange-800 mb-4">Marketing Strategy</h3>
                  <ul className="space-y-3 text-xl text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                      <span>Multi-channel approach</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                      <span>100K verified leads ready</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                      <span>Global B2B networks</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4: The Basic Formula
    {
      title: 'Step 3 - The Basic Formula (Proprietary Portfolio)',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-green-100 px-6 py-2 rounded-full mb-4">
              <p className="text-green-800 font-bold">STEP 3</p>
            </div>
            <h2 className="text-5xl font-bold text-green-600">The Basic Formula</h2>
            <p className="text-2xl text-gray-600 mt-4">Our Proprietary Portfolio Approach</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-8 rounded-2xl shadow-2xl text-white transform hover:scale-105 transition-all">
              <div className="text-6xl mb-4 text-center">🛠️</div>
              <h3 className="text-3xl font-bold mb-4 text-center">Customized Orders</h3>
              <p className="text-lg leading-relaxed text-center">
                Building bespoke ERPs and mobile apps for <span className="font-bold">high-ticket enterprise clients</span>
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-8 rounded-2xl shadow-2xl text-white transform hover:scale-105 transition-all">
              <div className="text-6xl mb-4 text-center">💎</div>
              <h3 className="text-3xl font-bold mb-4 text-center">Proprietary Products</h3>
              <p className="text-lg leading-relaxed text-center">
                Our core value: <span className="font-bold">EduStream ERP, GKHIDMAH, GORUN, and GLOOK</span>
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-700 p-8 rounded-2xl shadow-2xl text-white transform hover:scale-105 transition-all">
              <div className="text-6xl mb-4 text-center">⚡</div>
              <h3 className="text-3xl font-bold mb-4 text-center">The Synergy</h3>
              <p className="text-lg leading-relaxed text-center">
                Client feedback from custom orders <span className="font-bold">fuels innovation</span> of our internal products
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-200">
            <h3 className="text-3xl font-bold mb-6 text-center">Live Product Ecosystem</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projectLinks.map((project, idx) => (
                <a
                  key={idx}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gradient-to-r from-${project.color}-500 to-${project.color}-600 text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 group`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold">{project.name}</h4>
                    <ExternalLink className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-sm opacity-90">Click to view live demo →</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      )
    },
    
    {
      title: 'Business Pillars',
      content: (
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-blue-800 border-b-4 border-blue-200 pb-2">Business Pillars</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-6 bg-blue-50 rounded-2xl shadow-sm border border-blue-100">
              <h3 className="font-bold text-blue-900 text-xl mb-2">1. Custom Dev</h3>
              <p className="text-sm">Upwork (Global) & Digital Marketing (Local)</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-2xl shadow-sm border border-purple-100">
              <h3 className="font-bold text-purple-900 text-xl mb-2">2. SaaS ERP</h3>
              <p className="text-sm">Abroad Agency Solution via Telemarketing</p>
            </div>
            <div className="p-6 bg-orange-50 rounded-2xl shadow-sm border border-orange-100">
              <h3 className="font-bold text-orange-900 text-xl mb-2">3. Startups</h3>
              <p className="text-sm">G-Mate (Campus) & G-Next (80k Leads)</p>
            </div>
          </div>
        </div>
      )
    },

    // 3. NEW: Marketing Strategy (Local & Global)
    {
      title: 'Marketing Plan',
      content: (
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl border-l-8 border-blue-600 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><Megaphone className="text-blue-600" /> Digital Marketing</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Targeted FB/IG Video Ads</li>
              <li>• Google Search Optimization (SEO)</li>
              <li>• Explainer content for local businesses</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border-l-8 border-purple-600 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2"><PhoneCall className="text-purple-600" /> Telemarketing</h3>
            <p className="text-gray-700 mb-4">Focusing on Subscription SaaS closing.</p>
            <div className="bg-purple-100 p-3 rounded-lg font-bold text-purple-800">Available: 80K+ Verified Leads</div>
          </div>
        </div>
      )
    },

    // Slide 5: Investment Model
    {
      title: 'Step 4 - Detailed Investment Model (Financial Split)',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-100 px-6 py-2 rounded-full mb-4">
              <p className="text-orange-800 font-bold">STEP 4</p>
            </div>
            <h2 className="text-5xl font-bold text-orange-600">Detailed Investment Model</h2>
            <p className="text-2xl text-gray-600 mt-4">Clear Financial Split</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg border-t-4 border-blue-600">
              <div className="text-center mb-6">
                <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full mb-4">
                  <p className="text-xl font-bold">Technical Partner's Contribution</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl shadow">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">💻</div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-800 mb-2">100% Development Costs</h4>
                      <p className="text-gray-700">All coding, testing, and deployment</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">🔬</div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-800 mb-2">R&D Investment</h4>
                      <p className="text-gray-700">Research and innovation costs</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">👨‍💼</div>
                    <div>
                      <h4 className="text-xl font-bold text-blue-800 mb-2">Technical Leadership</h4>
                      <p className="text-gray-700">Architecture and strategic direction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg border-t-4 border-green-600">
              <div className="text-center mb-6">
                <div className="inline-block bg-green-600 text-white px-6 py-3 rounded-full mb-4">
                  <p className="text-xl font-bold">Investor's Contribution</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl shadow">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">📢</div>
                    <div>
                      <h4 className="text-xl font-bold text-green-800 mb-2">Marketing Budget</h4>
                      <p className="text-gray-700">Paid ads, SEO, lead conversion campaigns</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">🏢</div>
                    <div>
                      <h4 className="text-xl font-bold text-green-800 mb-2">Workspace</h4>
                      <p className="text-gray-700">Office rent and operational utility costs</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">💰</div>
                    <div>
                      <h4 className="text-xl font-bold text-green-800 mb-2">Basic Allowance</h4>
                      <p className="text-gray-700">Monthly professional allowance for founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-10 rounded-2xl shadow-2xl text-white">
            <div className="flex items-start space-x-6">
              <Target className="w-16 h-16 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-semibold mb-3 text-purple-200">KEY ADVANTAGE</p>
                <p className="text-3xl font-bold leading-relaxed">
                  "By bearing the development costs myself, I am taking on the technical risk, allowing your investment to go directly toward growth and scaling."
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6: Financial Projections & Profit Sharing
    {
      title: 'Financial Projections & Profit Sharing',
      content: (
        <div className="space-y-8">
          <h2 className="text-5xl font-bold text-blue-600 mb-6 text-center">Financial Projections & Profit Sharing</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Revenue Streams</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={revenueStreamsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {revenueStreamsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {revenueStreamsData.map((stream, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: COLORS[idx % COLORS.length] }}></div>
                      <span>{stream.name}</span>
                    </div>
                    <span className="font-bold">{stream.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Partnership Selection</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-lg text-blue-600 mb-2">Option A: Partner</p>
                    <p className="text-gray-700">Profit-sharing model with monthly basic allowance</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-lg text-green-600 mb-2">Option B: Employee</p>
                    <p className="text-gray-700">Fixed professional salary + sales-based incentives (No equity)</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg border-l-4 border-green-600">
                <h3 className="text-2xl font-bold text-green-800 mb-4">ROI Projection</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Total Leads Available:</span>
                    <span className="font-bold text-2xl text-green-600">100,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Conservative Conversion (1%):</span>
                    <span className="font-bold text-2xl text-green-600">1,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Active Paying Users:</span>
                    <span className="font-bold text-2xl text-green-600">Immediate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">3-Year Revenue Projection (in thousands ৳)</h3>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={financialProjectionsData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fillOpacity={1} fill="url(#colorRevenue)" name="Revenue" />
                <Area type="monotone" dataKey="profit" stroke="#10b981" fillOpacity={1} fill="url(#colorProfit)" name="Profit" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )
    },

    // Slide 7: Why Revenue is Guaranteed
    {
      title: 'Step 5 - Why Revenue is Guaranteed (The Strategy)',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 px-6 py-2 rounded-full mb-4">
              <p className="text-blue-800 font-bold">STEP 5</p>
            </div>
            <h2 className="text-5xl font-bold text-blue-600">Why Revenue is Guaranteed</h2>
            <p className="text-2xl text-gray-600 mt-4">The Strategy for Success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg border-2 border-green-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-green-800 mb-4">Product-Market Fit</h3>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our products, like <span className="font-bold text-green-600">EduStream</span>, target the massive, <span className="font-bold">underserved study-abroad agency market</span>
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg border-2 border-purple-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-purple-800 mb-4">Unique Features</h3>
              </div>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>GKHIDMAH's</strong> "Unified Delivery"</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-2 flex-shrink-0 mt-1" />
                  <span><strong>GLOOK's</strong> "AI Virtual Try-On"</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-purple-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Superior to competitors</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg border-2 border-orange-300">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-orange-800 mb-4">Retention</h3>
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                <span className="font-bold text-orange-600">Built-in credit and cashback models</span> ensure customers stay within our ecosystem
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold mb-8 text-center">Market Opportunity Analysis</h3>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={marketOpportunityData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="sector" />
                <PolarRadiusAxis />
                <Radar name="Market Potential" dataKey="potential" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                <Radar name="Market Reach" dataKey="reach" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                <Radar name="Competition Level" dataKey="competition" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
                <Legend />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )
    },

    // Slide 8: Marketing Survey
    {
      title: 'Step 6 - Marketing Survey & Lead Generation',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-purple-100 px-6 py-2 rounded-full mb-4">
              <p className="text-purple-800 font-bold">STEP 6</p>
            </div>
            <h2 className="text-5xl font-bold text-purple-600">Marketing Survey & Lead Generation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-8 rounded-2xl shadow-2xl text-white">
              <div className="text-6xl mb-4 text-center">📊</div>
              <h3 className="text-3xl font-bold mb-4 text-center">Market Survey Report</h3>
              <p className="text-lg leading-relaxed text-center">
                Internal research confirms that <span className="font-bold">manual documentation is the #1 pain point</span> for agencies and retail partners
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-700 p-8 rounded-2xl shadow-2xl text-white">
              <div className="text-6xl mb-4 text-center">🎯</div>
              <h3 className="text-3xl font-bold mb-4 text-center">Strategic Advantage</h3>
              <p className="text-lg leading-relaxed text-center">
                Direct access to <span className="font-bold">100,000 verified e-commerce entrepreneur leads</span> for instant market entry
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-8 rounded-2xl shadow-2xl text-white">
              <div className="text-6xl mb-4 text-center">💰</div>
              <h3 className="text-3xl font-bold mb-4 text-center">Lead Acquisition</h3>
              <p className="text-lg leading-relaxed text-center">
                <span className="font-bold">Low-cost conversion strategy</span> utilizing our existing partner networks
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold mb-8 text-center">Lead Conversion Funnel</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4">
                  <div>
                    <p className="text-4xl font-bold text-blue-600">100K</p>
                    <p className="text-sm text-blue-800">Total Leads</p>
                  </div>
                </div>
                <p className="font-semibold text-gray-700">Verified Database</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4">
                  <div>
                    <p className="text-4xl font-bold text-green-600">10K</p>
                    <p className="text-sm text-green-800">Engaged (10%)</p>
                  </div>
                </div>
                <p className="font-semibold text-gray-700">Initial Outreach</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4">
                  <div>
                    <p className="text-4xl font-bold text-purple-600">3K</p>
                    <p className="text-sm text-purple-800">Qualified (30%)</p>
                  </div>
                </div>
                <p className="font-semibold text-gray-700">Sales Pipeline</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4">
                  <div>
                    <p className="text-4xl font-bold text-orange-600">1K+</p>
                    <p className="text-sm text-orange-800">Converted (33%)</p>
                  </div>
                </div>
                <p className="font-semibold text-gray-700">Paying Customers</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-600">
              <h4 className="text-xl font-bold text-blue-800 mb-3">Primary Pain Points Identified</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Manual data entry and documentation</li>
                <li>• Fragmented workflow systems</li>
                <li>• Lack of real-time tracking</li>
                <li>• Poor customer experience</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-l-4 border-green-600">
              <h4 className="text-xl font-bold text-green-800 mb-3">Our Solution Advantages</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Fully automated workflows</li>
                <li>• Unified platform approach</li>
                <li>• Real-time analytics & tracking</li>
                <li>• Superior user experience</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Slide 8: G-MATE Ecosystem
{
  title: 'Step 6 - Community & Engagement (G-MATE)',
  content: (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <div className="inline-block bg-indigo-100 px-6 py-2 rounded-full mb-4">
          <p className="text-indigo-800 font-bold">STEP 6 - SOCIAL ENGINE</p>
        </div>
        <h2 className="text-5xl font-bold text-indigo-600">G-MATE Ecosystem</h2>
        <p className="text-2xl text-gray-600 mt-4">The Student & Professional Community Hub</p>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-indigo-800 mb-2">Empowering Student Lifestyle</h3>
          <p className="text-xl text-gray-600">A unified social platform for commerce, networking, and support</p>
        </div>

        <a
          href="https://g-mate-delta.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-600 text-white px-8 py-4 rounded-xl flex items-center space-x-3 hover:bg-indigo-700 transition-all shadow-lg hover:shadow-2xl transform hover:scale-105"
        >
          <span className="text-xl font-bold">View Live Demo</span>
          <ExternalLink className="w-6 h-6" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl shadow-lg text-center border-2 border-indigo-300">
          <Users className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
          <h4 className="text-2xl font-bold text-indigo-800 mb-2">User Growth</h4>
          <p className="text-lg text-gray-700">Central hub for <span className="font-bold">100K+ entrepreneurs</span> and student networks</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg text-center border-2 border-purple-300">
          <Layout className="w-16 h-16 text-purple-600 mx-auto mb-4" />
          <h4 className="text-2xl font-bold text-purple-800 mb-2">Engagement</h4>
          <p className="text-lg text-gray-700">Multi-feature platform ensuring <span className="font-bold">high daily active users</span> (DAU)</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg text-center border-2 border-blue-300">
          <Zap className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h4 className="text-2xl font-bold text-blue-800 mb-2">Synergy</h4>
          <p className="text-lg text-gray-700">Drives users to <span className="font-bold">EduStream & GKHIDMAH</span> via cross-promotion</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">Key G-MATE Features</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {[
            { icon: '📚', name: 'Academic Marketplace', desc: 'Buy/sell lecture notes & guides' },
            { icon: '🍳', name: 'Student Chefs', desc: 'Order home-cooked meals' },
            { icon: '❤️', name: 'Mental Health', desc: 'Anonymous peer support' },
            { icon: '🛡️', name: 'SOS Emergency', desc: 'Instant safety alerts' },
            { icon: '💼', name: 'Part-time Jobs', desc: 'Student-specific job boards' },
            { icon: '🎁', name: 'Student Privileges', desc: 'Exclusive digital discounts' },
            { icon: '🏠', name: 'Rental Service', desc: 'Peer-to-peer essentials' },
            { icon: '👥', name: 'Group Shopping', desc: 'Split costs & bulk deals' },
            { icon: '🎟️', name: 'Ticket Exchange', desc: 'P2P bus/train tickets' }
          ].map((feature, idx) => (
            <div 
              key={idx} 
              onClick={() => window.open('https://g-mate-delta.vercel.app/', '_blank')}
              className="group bg-gradient-to-r from-gray-50 to-white p-5 rounded-2xl border border-gray-200 hover:border-indigo-400 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
              <p className="font-bold text-lg text-indigo-900">{feature.name}</p>
              <p className="text-sm text-gray-600 mt-1">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
},
// 4. NEW: G-Mate Roadmap
    {
      title: 'G-Mate Campus Roadmap',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-indigo-900">G-Mate Campus Growth</h2>
          <div className="flex justify-between items-center gap-4">
             <div className="flex-1 bg-white p-6 rounded-xl border-2 border-indigo-500 shadow-md">
                <div className="text-2xl font-bold text-indigo-600">Phase 1</div>
                <p className="font-bold">University Ambassadors</p>
             </div>
             <div className="flex-1 bg-white p-6 rounded-xl border-2 border-blue-500 shadow-md">
                <div className="text-2xl font-bold text-blue-600">Phase 2</div>
                <p className="font-bold">Digital Campaigns</p>
             </div>
             <div className="flex-1 bg-white p-6 rounded-xl border-2 border-orange-500 shadow-md">
                <div className="text-2xl font-bold text-orange-600">Phase 3</div>
                <p className="font-bold">Campus Bootcamps</p>
             </div>
          </div>
        </div>
      )
    },
    // Slide 9: EduStream Status
    {
  title: 'Step 7 - Current Project Status (EduStream ERP)',
  content: (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <div className="inline-block bg-green-100 px-6 py-2 rounded-full mb-4">
          <p className="text-green-800 font-bold">STEP 7 - FLAGSHIP PRODUCT</p>
        </div>
        <h2 className="text-5xl font-bold text-green-600">EduStream ERP</h2>
        <p className="text-2xl text-gray-600 mt-4">Current Project Status</p>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div className="flex-1">
          <h3 className="text-3xl font-bold text-blue-800 mb-2">Smart ERP for Study Abroad Agencies</h3>
          <p className="text-xl text-gray-600">Complete solution for consultancies worldwide</p>
        </div>

        <a
          href="https://edu-stream-erp.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-8 py-4 rounded-xl flex items-center space-x-3 hover:bg-blue-700 transition-all shadow-lg hover:shadow-2xl transform hover:scale-105"
        >
          <span className="text-xl font-bold">View Live Demo</span>
          <ExternalLink className="w-6 h-6" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg text-center border-2 border-green-300">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h4 className="text-2xl font-bold text-green-800 mb-2">Flagship Progress</h4>
          <p className="text-lg text-gray-700">EduStream ERP is <span className="font-bold">ready for deployment</span> with modules for lead tracking and compliance</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg text-center border-2 border-blue-300">
          <DollarSign className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h4 className="text-2xl font-bold text-blue-800 mb-2">Revenue Readiness</h4>
          <p className="text-lg text-gray-700"><span className="font-bold">Subscription models</span> and partnership agreements are finalized</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg text-center border-2 border-purple-300">
          <Target className="w-16 h-16 text-purple-600 mx-auto mb-4" />
          <h4 className="text-2xl font-bold text-purple-800 mb-2">Target Market</h4>
          <p className="text-lg text-gray-700"><span className="font-bold">1,000+</span> study abroad agencies globally</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <h3 className="text-3xl font-bold mb-6">Core Modules & Features</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { icon: '👥', name: 'Student Management' },
            { icon: '📊', name: 'Lead Tracking' },
            { icon: '📝', name: 'Application Processing' },
            { icon: '📁', name: 'Document Management' },
            { icon: '🏫', name: 'University Communication' },
            { icon: '🤝', name: 'Agent Management' },
            { icon: '💰', name: 'Financial Reporting' },
            { icon: '👨‍💼', name: 'Team Collaboration' },
            { icon: '✅', name: 'Compliance Workflow' },
            { icon: '📧', name: 'Email Automation' },
            { icon: '📱', name: 'Mobile Access' },
            { icon: '🔒', name: 'Security & Permissions' }
          ].map((feature, idx) => (
            <div key={idx} className="bg-blue-50 p-4 rounded-xl text-center hover:bg-blue-100 transition-all">
              <div className="text-4xl mb-2">{feature.icon}</div>
              <p className="font-semibold text-sm text-gray-800">{feature.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 p-8 rounded-2xl text-white shadow-xl">
        <h3 className="text-3xl font-bold mb-8">Revenue Model</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-extrabold mb-1">৳6k - 24k</p>
            <p className="text-sm opacity-90 text-blue-50">Monthly Subscription</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold mb-1">৳60k+</p>
            <p className="text-sm opacity-90 text-blue-50">Annual Licensing</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold mb-1">৳1.2L+</p>
            <p className="text-sm opacity-90 text-blue-50">Setup & Customization</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold mb-1">৳24k/mo</p>
            <p className="text-sm opacity-90 text-blue-50">Premium Support</p>
          </div>
        </div>
      </div>
    </div> // Closing main div
  ) // Closing content parenthesis
}, // Closing slide object

    // Slide 10: GKHIDMAH & GORUN Status
    {
      title: 'Step 7 (Cont.) - GKHIDMAH & GORUN Status',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 px-6 py-2 rounded-full mb-4">
              <p className="text-blue-800 font-bold">STEP 7 - CONTINUED</p>
            </div>
            <h2 className="text-5xl font-bold text-blue-600">GKHIDMAH & GORUN Status</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg border-t-4 border-green-600">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-4xl font-bold text-green-800">GKHIDMAH</h3>
                <a
                  href="https://g-khidmah.vercel.app/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-all"
                >
                  <span>View</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xl text-gray-700 mb-6">All-in-One Daily Needs Platform</p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <div className="text-3xl">🛒</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Unified Commerce</h4>
                      <p className="text-gray-600">Developing the "Unified Commerce" experience for daily needs</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <div className="text-3xl">📦</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Multiple Categories</h4>
                      <p className="text-gray-600">Grocery, medicine, fashion, essentials in one order</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <div className="text-3xl">🚚</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Single Delivery</h4>
                      <p className="text-gray-600">Everything delivered together for maximum convenience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg border-t-4 border-purple-600">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-4xl font-bold text-purple-800">GORUN</h3>
                <a
                  href="https://gorun-partner-ecosystem.vercel.app/expert/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-purple-700 transition-all"
                >
                  <span>View</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xl text-gray-700 mb-6">Workforce Management Platform</p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <div className="text-3xl">👔</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Workforce Management</h4>
                      <p className="text-gray-600">Finalizing the workforce management system</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <div className="text-3xl">📍</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Geo-fenced Attendance</h4>
                      <p className="text-gray-600">Location-based attendance verification system</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl">
                  <div className="flex items-start space-x-3">
                    <div className="text-3xl">📱</div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Real-time Tracking</h4>
                      <p className="text-gray-600">Live task monitoring and performance analytics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Pilot Launch Status</h3>
            <p className="text-2xl mb-2">Both products are ready for a <span className="font-bold">3-month pilot testing phase</span></p>
            <p className="text-lg opacity-90">Expected pilot start: Q2 2026</p>
          </div>
        </div>
      )
    },

    // Slide 11: GNEXT/GLOOK Ecosystem
    {
      title: 'Step 7 (Cont.) - GNEXT / GLOOK Ecosystem',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-orange-100 px-6 py-2 rounded-full mb-4">
              <p className="text-orange-800 font-bold">STEP 7 - THE FUTURE</p>
            </div>
            <h2 className="text-5xl font-bold text-orange-600">GNEXT / GLOOK Ecosystem</h2>
            <p className="text-2xl text-gray-600 mt-4">Next-Generation Commerce with AI & AR</p>
          </div>

          <div className="flex items-center justify-between mb-8 bg-gradient-to-r from-orange-500 to-pink-600 p-8 rounded-2xl text-white">
            <div>
              <h3 className="text-4xl font-bold mb-2">The Future of Shopping</h3>
              <p className="text-xl opacity-90">AI-driven body measurements + AR product visualization</p>
            </div>
            <a
              href="https://gnext-ecosystem.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-orange-600 px-8 py-4 rounded-xl flex items-center space-x-3 hover:bg-gray-100 transition-all font-bold text-xl"
            >
              <span>View Live</span>
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg text-center border-2 border-blue-300">
              <div className="text-6xl mb-4">🥽</div>
              <h4 className="text-2xl font-bold text-blue-800 mb-3">The Future</h4>
              <p className="text-lg text-gray-700">Integrating <span className="font-bold">AI-driven body measurements</span> and <span className="font-bold">AR product visualization</span></p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg text-center border-2 border-green-300">
              <div className="text-6xl mb-4">🌍</div>
              <h4 className="text-2xl font-bold text-green-800 mb-3">Market Reach</h4>
              <p className="text-lg text-gray-700">Fashion, jewelry, eyewear, and <span className="font-bold">home decor categories</span></p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-lg text-center border-2 border-purple-300">
              <div className="text-6xl mb-4">🏆</div>
              <h4 className="text-2xl font-bold text-purple-800 mb-3">Competitive Edge</h4>
              <p className="text-lg text-gray-700"><span className="font-bold">High-tech shopping experience</span> that increases merchant sales and customer loyalty</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
            <h3 className="text-3xl font-bold mb-6 text-center">Revolutionary Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: '👕', title: 'Virtual Try-On', desc: 'See how clothes look on you before buying', color: 'blue' },
                { icon: '📏', title: 'AI Body Measurement', desc: 'Precise measurements using smartphone camera', color: 'green' },
                { icon: '🎨', title: 'AR Visualization', desc: 'Place furniture in your room virtually', color: 'purple' },
                { icon: '🎯', title: 'Smart Size Recommendation', desc: 'AI suggests perfect size based on your body', color: 'pink' },
                { icon: '🏪', title: 'Online & Offline Integration', desc: 'Seamless experience across channels', color: 'orange' },
                { icon: '📱', title: 'Showroom QR Ordering', desc: 'Scan and order from physical stores', color: 'teal' }
              ].map((feature, idx) => (
                <div key={idx} className={`bg-${feature.color}-50 border-l-4 border-${feature.color}-600 p-6 rounded-xl hover:shadow-lg transition-all`}>
                  <div className="flex items-start space-x-4">
                    <div className="text-5xl">{feature.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                      <p className="text-gray-700">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold mb-6 text-center">Product Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { icon: '👗', name: 'Fashion' },
                { icon: '💄', name: 'Cosmetics' },
                { icon: '👓', name: 'Eyewear' },
                { icon: '💍', name: 'Jewelry' },
                { icon: '⌚', name: 'Watches' },
                { icon: '👟', name: 'Footwear' },
                { icon: '📱', name: 'Electronics' },
                { icon: '🛋️', name: 'Furniture' },
                { icon: '🏠', name: 'Home Decor' },
                { icon: '👜', name: 'Bags' }
              ].map((cat, idx) => (
                <div key={idx} className="bg-gradient-to-br from-orange-100 to-pink-100 p-6 rounded-xl text-center hover:shadow-lg transition-all">
                  <div className="text-5xl mb-3">{cat.icon}</div>
                  <p className="font-bold text-gray-800">{cat.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },

    // ... (Ager slides gulo ekhane thakbe)

    // Slide 12: Conclusion & Roadmap
    {
      title: 'Conclusion & Strategic Roadmap',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-blue-600 mb-4">Conclusion & Strategic Roadmap</h2>
            <p className="text-2xl text-gray-600">Phased Approach to Market Leadership</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Phase 1 */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-8 rounded-2xl shadow-2xl text-white transform hover:scale-105 transition-all">
              <div className="text-6xl mb-4 text-center">🚀</div>
              <div className="text-center mb-6">
                <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-2">
                  <p className="text-sm font-bold">Q1-Q2 2026</p>
                </div>
                <h3 className="text-3xl font-bold">Phase 1</h3>
              </div>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-2 flex-shrink-0 mt-1" />
                  <span>Launch EduStream ERP</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-2 flex-shrink-0 mt-1" />
                  <span>Acquire first 100 B2B clients</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-2 flex-shrink-0 mt-1" />
                  <span>Establish market presence</span>
                </li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="bg-gradient-to-br from-green-500 to-green-700 p-8 rounded-2xl shadow-2xl text-white transform hover:scale-105 transition-all">
              <div className="text-6xl mb-4 text-center">📈</div>
              <div className="text-center mb-6">
                <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-2">
                  <p className="text-sm font-bold">Q3-Q4 2026</p>
                </div>
                <h3 className="text-3xl font-bold">Phase 2</h3>
              </div>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-2 flex-shrink-0 mt-1" />
                  <span>Scale GKHIDMAH & GORUN</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-2 flex-shrink-0 mt-1" />
                  <span>Expand subscription base</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-2 flex-shrink-0 mt-1" />
                  <span>Optimize operations</span>
                </li>
              </ul>
            </div>

            {/* Phase 3 & 4 */}
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-8 rounded-2xl shadow-2xl text-white transform hover:scale-105 transition-all">
              <div className="text-6xl mb-4 text-center">🌍</div>
              <div className="text-center mb-6">
                <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-2">
                  <p className="text-sm font-bold">2027-2028</p>
                </div>
                <h3 className="text-3xl font-bold">Phase 3 & 4</h3>
              </div>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-2 flex-shrink-0 mt-1" />
                  <span>Global GLOOK expansion</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-2 flex-shrink-0 mt-1" />
                  <span>International scaling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-2 flex-shrink-0 mt-1" />
                  <span>Investment rounds & partnerships</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-12 rounded-2xl shadow-2xl text-white text-center">
            <div className="mb-6">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-4">
                <p className="text-lg font-bold">CLOSING STATEMENT</p>
              </div>
            </div>
            <p className="text-4xl font-bold leading-relaxed mb-8">
              "We have the technology, we have the leads, and I am taking the technical risk."
            </p>
            <p className="text-3xl font-bold mb-8">
              Let's partner to scale these innovations into industry leaders.
            </p>

            <div className="flex flex-col items-center">
              <p className="text-xl text-blue-100 mb-4 opacity-90 font-medium italic">
                For more details on our technical expertise:
              </p>
              <a 
                href="https://gtech-gtny.vercel.app/#home" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-2xl hover:bg-blue-50 transition-all shadow-xl flex items-center space-x-3 group"
              >
                <span>Visit G-Tech Official Website</span>
                <ExternalLink className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center space-x-8">
              <div className="text-6xl">🤝</div>
              <div className="text-6xl">💡</div>
              <div className="text-6xl">🚀</div>
              <div className="text-6xl">📈</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">6</p>
              <p className="text-gray-700 font-semibold">Live Products</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">100K</p>
              <p className="text-gray-700 font-semibold">Verified Leads</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <p className="text-4xl font-bold text-purple-600 mb-2">৳3.5M</p>
              <p className="text-gray-700 font-semibold">Year 3 Revenue Target</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl text-center">
              <p className="text-4xl font-bold text-orange-600 mb-2">300%+</p>
              <p className="text-gray-700 font-semibold">Projected ROI</p>
            </div>
          </div>
        </div>
      )
    }
  ]; // Slides array end

  // UI Logic
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col">
      <div className="bg-white shadow-md py-4 px-8 flex items-center justify-between border-b-2 border-blue-200">
        <div className="flex items-center space-x-3">
          <Briefcase className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Strategic Software Venture Proposal</h1>
        </div>
        <div className="flex items-center space-x-4">
          <BarChart3 className="w-6 h-6 text-blue-600" />
          <span className="text-lg font-semibold text-gray-700">
            Slide {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>

      <div className="flex-1 p-8 overflow-hidden">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl h-full overflow-y-auto">
          <div className="p-12">
            {currentSlide !== 0 && (
              <h2 className="text-3xl font-bold text-gray-500 mb-8 border-b-2 border-blue-200 pb-4">
                {slides[currentSlide].title}
              </h2>
            )}
            <div className="mt-6">
              {slides[currentSlide].content}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="bg-white border-t-2 border-blue-200 py-6 px-8 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center space-x-2 px-8 py-4 rounded-xl font-bold text-lg transition-all ${
              currentSlide === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
            <span>Previous</span>
          </button>

          <div className="flex items-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all ${
                  index === currentSlide
                    ? 'w-12 h-3 bg-blue-600 rounded-full'
                    : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400'
                }`}
                title={`Slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`flex items-center space-x-2 px-8 py-4 rounded-xl font-bold text-lg transition-all ${
              currentSlide === slides.length - 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105'
            }`}
          >
            <span>Next</span>
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

