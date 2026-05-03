import { useState } from 'react';
import { ChevronLeft, ChevronRight, BarChart3, ExternalLink, DollarSign, TrendingUp, Users, Briefcase } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

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
    { name: 'EduStream ERP', url: 'https://edu-stream-erp.vercel.app/' },
    { name: 'GKHIDMAH Platform', url: 'https://g-khidmah.vercel.app/index.html' },
    { name: 'GORUN Partner Ecosystem', url: 'https://gorun-partner-ecosystem.vercel.app/expert/index.html' },
    { name: 'GNEXT Ecosystem', url: 'https://gnext-ecosystem.vercel.app/' },
    { name: 'Study Abroad CRM', url: 'https://study-abroad-crm-nine.vercel.app/track.html' }
  ];

  // Revenue Streams Data
  const revenueStreamsData = [
    { name: 'Software Dev', value: 25 },
    { name: 'Licensing', value: 20 },
    { name: 'SaaS', value: 22 },
    { name: 'Enterprise', value: 15 },
    { name: 'Commission', value: 8 },
    { name: 'Marketplace', value: 7 },
    { name: 'Support', value: 3 }
  ];

  // Financial Projections Data
  const financialProjectionsData = [
    { month: 'M1', revenue: 50, costs: 30, profit: 20 },
    { month: 'M3', revenue: 120, costs: 45, profit: 75 },
    { month: 'M6', revenue: 250, costs: 80, profit: 170 },
    { month: 'M9', revenue: 400, costs: 120, profit: 280 },
    { month: 'M12', revenue: 600, costs: 150, profit: 450 },
    { month: 'Y2', revenue: 1200, costs: 300, profit: 900 },
    { month: 'Y3', revenue: 2500, costs: 500, profit: 2000 }
  ];

  // Monthly Costs Breakdown
  const monthlyCostsData = [
    { category: 'Salaries', amount: 45 },
    { category: 'Marketing', amount: 25 },
    { category: 'Workspace', amount: 15 },
    { category: 'Dev Tools', amount: 10 },
    { category: 'Operations', amount: 5 }
  ];

  // Growth Roadmap
  const growthRoadmapData = [
    { phase: 'Phase 1', revenue: 15, clients: 10 },
    { phase: 'Phase 2', revenue: 35, clients: 30 },
    { phase: 'Phase 3', revenue: 65, clients: 60 },
    { phase: 'Phase 4', revenue: 100, clients: 120 }
  ];

  const slides = [
    // Slide 1: Cover
    {
      title: 'Software Innovation & Business Partnership Proposal',
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-center px-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-blue-600 mb-4">Business Proposal Presentation</h1>
            <p className="text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Building a Scalable Software Venture Through Innovation, Productization & Strategic Partnership
            </p>
          </div>
          <div className="mt-12 space-y-3 text-2xl text-gray-600">
            <p className="font-semibold">Presented by Mobashir Ahmed Nasrullah</p>
            <p>Founder & Software Strategist</p>
            <p className="text-blue-500 italic mt-6">Vision: Transforming Ideas into Scalable Digital Businesses</p>
          </div>
        </div>
      )
    },

    // Slide 2: Executive Summary
    {
      title: 'Executive Summary',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Who We Are</h2>
          <p className="text-2xl text-gray-700 leading-relaxed">
            We are building a next-generation software company focused on two high-growth business models:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-600">
              <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Custom Software Development Services</h3>
              <p className="text-lg text-gray-700">For businesses and enterprises</p>
            </div>
            <div className="bg-purple-50 p-8 rounded-xl border-l-4 border-purple-600">
              <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Product-Based Software Solutions</h3>
              <p className="text-lg text-gray-700">Built from our own innovative ideas</p>
            </div>
          </div>
          <p className="text-xl text-gray-600 mt-8 italic">
            Our goal: Develop scalable, technology-driven businesses that solve real-world problems while creating recurring revenue streams.
          </p>
        </div>
      )
    },

    // Slide 3: Business Model
    {
      title: 'Our Business Model',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Dual Revenue Strategy</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl">
              <h3 className="text-3xl font-bold mb-4 text-blue-700">1. Software Development Services</h3>
              <ul className="space-y-2 text-xl text-gray-700">
                <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> Custom web, mobile, ERP, and enterprise solutions</li>
                <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> End-to-end development for clients</li>
                <li className="flex items-start"><span className="text-blue-600 mr-3">•</span> B2B and B2C software solutions</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-xl">
              <h3 className="text-3xl font-bold mb-4 text-purple-700">2. Proprietary Software Products</h3>
              <ul className="space-y-2 text-xl text-gray-700">
                <li className="flex items-start"><span className="text-purple-600 mr-3">•</span> Develop unique software platforms</li>
                <li className="flex items-start"><span className="text-purple-600 mr-3">•</span> License, sell, or partner with businesses</li>
                <li className="flex items-start"><span className="text-purple-600 mr-3">•</span> Build long-term intellectual property</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-xl">
              <h3 className="text-3xl font-bold mb-4 text-green-700">3. Subscription Revenue</h3>
              <ul className="space-y-2 text-xl text-gray-700">
                <li className="flex items-start"><span className="text-green-600 mr-3">•</span> SaaS-based recurring monthly or yearly income</li>
                <li className="flex items-start"><span className="text-green-600 mr-3">•</span> Scalable and predictable cash flow</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4: Current Progress
    {
      title: 'Current Progress - Live Products',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Execution Already Underway</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <p className="text-xl">✅ Multiple software products currently under development</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl">
              <p className="text-xl">✅ Proven product roadmap and execution strategy</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl">
              <p className="text-xl">✅ High-demand, scalable industry focus</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl">
              <p className="text-xl">✅ Strong technical foundation established</p>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-gray-800 mb-4">Live Projects - Click to View</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectLinks.map((project, idx) => (
              <a
                key={idx}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-between group"
              >
                <div>
                  <h4 className="text-2xl font-bold mb-2">{project.name}</h4>
                  <p className="text-sm opacity-90">Click to view live demo</p>
                </div>
                <ExternalLink className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      )
    },

    // Slide 5: EduStream ERP
    {
      title: 'Flagship Product: EduStream ERP',
      content: (
        <div className="space-y-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-4xl font-bold text-blue-600 mb-2">EduStream ERP</h2>
              <p className="text-2xl text-gray-700">Smart ERP for Study Abroad Agencies</p>
            </div>
            <a
              href="https://edu-stream-erp.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-all"
            >
              <span>View Live</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xl text-gray-600 mb-8">
            A complete ERP solution designed specifically for study abroad consultancies.
          </p>

          <h3 className="text-3xl font-bold mb-6">Core Features</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Student Management',
              'Lead Tracking',
              'Application Processing',
              'Document Management',
              'University Communication',
              'Agent Management',
              'Financial Reporting',
              'Team Collaboration',
              'Compliance Workflow'
            ].map((feature, idx) => (
              <div key={idx} className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-lg font-semibold text-blue-900">✓ {feature}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Revenue Model</h3>
            <div className="grid grid-cols-2 gap-4">
              <p className="text-lg">💳 Monthly Subscription</p>
              <p className="text-lg">🏢 Annual Enterprise Licensing</p>
              <p className="text-lg">⚙️ Setup & Customization Fees</p>
              <p className="text-lg">🎯 Premium Support Packages</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6: GKHIDMAH
    {
      title: 'Product Portfolio: GKHIDMAH',
      content: (
        <div className="space-y-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-4xl font-bold text-green-600 mb-2">GKHIDMAH</h2>
              <p className="text-2xl text-gray-700">All-in-One Daily Needs Platform</p>
            </div>
            <a
              href="https://g-khidmah.vercel.app/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-all"
            >
              <span>View Live</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xl text-gray-600 mb-8">
            A revolutionary super-app designed to fulfill all daily consumer needs through a single seamless ordering experience.
          </p>

          <h3 className="text-3xl font-bold mb-6">Unique Value Proposition</h3>
          <div className="space-y-4 mb-8">
            {[
              'One order for multiple categories',
              'Grocery, medicine, fashion, essentials, and more',
              'Simplified ordering workflow',
              'Single delivery fulfillment'
            ].map((point, idx) => (
              <div key={idx} className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                <p className="text-xl">✓ {point}</p>
              </div>
            ))}
          </div>

          <h3 className="text-3xl font-bold mb-6">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: '1', text: 'Enter Platform' },
              { step: '2', text: 'Create Shopping List' },
              { step: '3', text: 'Select Categories' },
              { step: '4', text: 'One Delivery' }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-green-100 to-blue-100 p-6 rounded-xl text-center">
                <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <p className="text-lg font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },

    // Slide 7: GORUN
    {
      title: 'Product Portfolio: GORUN',
      content: (
        <div className="space-y-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-4xl font-bold text-purple-600 mb-2">GORUN</h2>
              <p className="text-2xl text-gray-700">B2B Expert Outsourcing & Staff Management Platform</p>
            </div>
            <a
              href="https://gorun-partner-ecosystem.vercel.app/expert/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-purple-700 transition-all"
            >
              <span>View Live</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xl text-gray-600 mb-8">
            A corporate-grade on-demand workforce management solution.
          </p>

          <h3 className="text-3xl font-bold mb-6">Key Features</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🎯', text: 'Smart Job Placement' },
              { icon: '📍', text: 'Geo-fenced Attendance' },
              { icon: '📲', text: 'QR Check-in' },
              { icon: '👁️', text: 'Live Task Tracking' },
              { icon: '💰', text: 'Automated Billing' },
              { icon: '💸', text: 'Commission Mgmt' },
              { icon: '👛', text: 'Staff Wallet' },
              { icon: '✅', text: 'KYC Verification' }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-all">
                <div className="text-5xl mb-3">{item.icon}</div>
                <p className="text-base font-semibold text-gray-800">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-purple-50 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Target Market</h3>
            <div className="grid grid-cols-2 gap-4 text-lg">
              <p>• Corporate staff outsourcing</p>
              <p>• Temporary workforce deployment</p>
              <p>• Event staffing solutions</p>
              <p>• On-demand expertise hiring</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 8: GNEXT/GLOOK
    {
      title: 'Product Portfolio: GNEXT/GLOOK',
      content: (
        <div className="space-y-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-4xl font-bold text-orange-600 mb-2">GNEXT / GLOOK</h2>
              <p className="text-2xl text-gray-700">Next-Generation Commerce Ecosystem</p>
            </div>
            <a
              href="https://gnext-ecosystem.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-orange-700 transition-all"
            >
              <span>View Live</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xl text-gray-600 mb-8">
            A modern digital marketplace enhanced with AI and AR technologies.
          </p>

          <h3 className="text-3xl font-bold mb-6">Standout Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: '👕', title: 'Virtual Try-On Experience', color: 'blue' },
              { icon: '📏', title: 'AI Body Measurement', color: 'green' },
              { icon: '🥽', title: 'AR Product Visualization', color: 'purple' },
              { icon: '🎯', title: 'Smart Size Recommendation', color: 'pink' },
              { icon: '🏪', title: 'Online & Offline Integration', color: 'orange' },
              { icon: '📱', title: 'Showroom QR Ordering', color: 'teal' }
            ].map((item, idx) => (
              <div key={idx} className={`bg-${item.color}-50 border-l-4 border-${item.color}-600 p-6 rounded-xl`}>
                <div className="flex items-center space-x-4">
                  <div className="text-5xl">{item.icon}</div>
                  <h4 className="text-xl font-bold">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-3xl font-bold mb-6 mt-8">Product Categories</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {['Fashion', 'Cosmetics', 'Eyewear', 'Jewelry', 'Watches', 'Footwear', 'Electronics', 'Furniture', 'Home Decor', 'Bags'].map((cat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-orange-100 to-pink-50 p-4 rounded-lg text-center font-semibold">
                {cat}
              </div>
            ))}
          </div>
        </div>
      )
    },

    // Slide 9: Financial Projections
    {
      title: 'Financial Projections',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-blue-600 mb-6 flex items-center">
            <DollarSign className="w-10 h-10 mr-3" />
            Revenue & Profit Projections
          </h2>

          <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Projected Earnings (in thousands BDT)</h3>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={financialProjectionsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#3b82f6" fill="#3b82f6" name="Revenue" />
                <Area type="monotone" dataKey="profit" stackId="2" stroke="#10b981" fill="#10b981" name="Profit" />
                <Area type="monotone" dataKey="costs" stackId="3" stroke="#ef4444" fill="#ef4444" name="Costs" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
              <p className="text-sm text-gray-600 mb-2">Year 1 Revenue</p>
              <p className="text-4xl font-bold text-blue-600">৳600K</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
              <p className="text-sm text-gray-600 mb-2">Year 2 Revenue</p>
              <p className="text-4xl font-bold text-green-600">৳1.2M</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-600">
              <p className="text-sm text-gray-600 mb-2">Year 3 Revenue</p>
              <p className="text-4xl font-bold text-purple-600">৳2.5M</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-400 p-6 rounded-xl mt-6">
            <p className="text-lg font-bold text-yellow-900">
              💡 Projections based on conservative estimates with proven market demand
            </p>
          </div>
        </div>
      )
    },

    // Slide 10: Monthly Costs
    {
      title: 'Monthly Cost Structure',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Operating Costs Breakdown</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Monthly Cost Distribution</h3>
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={monthlyCostsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ category, amount }) => `${category}: ${amount}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="amount"
                  >
                    {monthlyCostsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Estimated Monthly Costs</h3>
              {[
                { category: 'Team Salaries', amount: '৳80,000', note: 'Investor-dependent', icon: '👥' },
                { category: 'Digital Marketing', amount: '৳40,000', note: 'Campaigns & Ads', icon: '📢' },
                { category: 'Workspace Rent', amount: '৳25,000', note: 'Office space', icon: '🏢' },
                { category: 'Development Tools', amount: '৳15,000', note: 'Software & licenses', icon: '⚙️' },
                { category: 'Operations & Misc', amount: '৳10,000', note: 'Utilities & others', icon: '💼' }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-5 rounded-xl border-l-4 border-blue-500">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <p className="text-xl font-bold">{item.category}</p>
                        <p className="text-sm text-gray-600">{item.note}</p>
                      </div>
                    </div>
                    <p className="text-xl font-bold text-blue-600">{item.amount}</p>
                  </div>
                </div>
              ))}

              <div className="bg-blue-50 border-2 border-blue-400 p-5 rounded-xl mt-6">
                <p className="text-lg font-bold text-center">Total Monthly: ৳170,000</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border-2 border-orange-400 p-6 rounded-xl">
            <p className="text-lg font-bold text-orange-900">
              ⚠️ Note: Salary structure will be finalized based on investor agreement and equity distribution
            </p>
          </div>
        </div>
      )
    },

    // Slide 11: What Investor Gets
    {
      title: 'What Investor Receives',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Investor Benefits Package</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl border-l-4 border-blue-600">
              <div className="flex items-start space-x-6">
                <div className="text-6xl">👨‍💻</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Full Development Support with Expert Team</h3>
                  <ul className="space-y-2 text-lg text-gray-700">
                    <li>• Dedicated software development team</li>
                    <li>• Technical leadership and architecture</li>
                    <li>• Product ideation and innovation</li>
                    <li>• Continuous R&D and maintenance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-xl border-l-4 border-green-600">
              <div className="flex items-start space-x-6">
                <div className="text-6xl">📞</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">IP Call Portal for Marketing</h3>
                  <ul className="space-y-2 text-lg text-gray-700">
                    <li>• Advanced IP-based calling system</li>
                    <li>• Built-in CRM integration</li>
                    <li>• Call tracking and analytics</li>
                    <li>• Perfect for outbound marketing campaigns</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-xl border-l-4 border-purple-600">
              <div className="flex items-start space-x-6">
                <div className="text-6xl">🎯</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">100,000 Effective Leads for E-commerce Entrepreneurs</h3>
                  <ul className="space-y-2 text-lg text-gray-700">
                    <li>• Pre-qualified business leads database</li>
                    <li>• Targeted e-commerce prospects</li>
                    <li>• Ready for immediate outreach</li>
                    <li>• High conversion potential contacts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-8 rounded-xl border-l-4 border-orange-600">
              <div className="flex items-start space-x-6">
                <div className="text-6xl">💎</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Equity & Long-term Value</h3>
                  <ul className="space-y-2 text-lg text-gray-700">
                    <li>• Ownership stake in multiple products</li>
                    <li>• Recurring revenue share</li>
                    <li>• Intellectual property ownership</li>
                    <li>• High valuation potential</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 12: What We Need
    {
      title: 'What We Need from Investor',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Investment Requirements</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl border-l-4 border-blue-600">
              <div className="flex items-start space-x-6">
                <div className="text-6xl">📢</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Marketing Support</h3>
                  <ul className="space-y-2 text-lg text-gray-700">
                    <li>• Digital marketing campaigns (SEO, SEM, Social Media)</li>
                    <li>• Brand development and positioning</li>
                    <li>• Content marketing and lead generation</li>
                    <li>• Performance marketing budget</li>
                  </ul>
                  <p className="mt-4 text-xl font-bold text-blue-600">Estimated: ৳40,000/month</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-xl border-l-4 border-green-600">
              <div className="flex items-start space-x-6">
                <div className="text-6xl">🏢</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Workspace</h3>
                  <ul className="space-y-2 text-lg text-gray-700">
                    <li>• Professional office space</li>
                    <li>• Meeting rooms and collaboration areas</li>
                    <li>• Infrastructure and utilities</li>
                    <li>• Conducive work environment for team</li>
                  </ul>
                  <p className="mt-4 text-xl font-bold text-green-600">Estimated: ৳25,000/month</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-xl border-l-4 border-purple-600">
              <div className="flex items-start space-x-6">
                <div className="text-6xl">⚙️</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Development Tools Cost</h3>
                  <ul className="space-y-2 text-lg text-gray-700">
                    <li>• Cloud hosting and server infrastructure</li>
                    <li>• Software licenses and subscriptions</li>
                    <li>• Development and design tools</li>
                    <li>• API integrations and third-party services</li>
                  </ul>
                  <p className="mt-4 text-xl font-bold text-purple-600">Estimated: ৳15,000/month</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center">
            <p className="text-3xl font-bold mb-2">Total Monthly Investment Required</p>
            <p className="text-5xl font-bold">৳80,000</p>
            <p className="text-lg mt-3 opacity-90">(Plus team salaries based on agreement)</p>
          </div>
        </div>
      )
    },

    // Slide 13: Revenue Streams
    {
      title: 'Revenue Streams',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Multiple Monetization Channels</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                'Software Development Fees',
                'Product Licensing',
                'SaaS Subscription Revenue',
                'Enterprise Contracts',
                'Commission Income',
                'Marketplace Fees',
                'White-Label Licensing',
                'Technical Support Retainers'
              ].map((stream, idx) => (
                <div key={idx} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                  <p className="text-lg font-semibold">💰 {stream}</p>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Revenue Distribution</h3>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={revenueStreamsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={120}
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
            </div>
          </div>
        </div>
      )
    },

    // Slide 14: Growth Roadmap
    {
      title: 'Growth Roadmap',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Strategic Expansion Plan</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3">Phase 1 (Q1-Q2)</h3>
                <ul className="space-y-2 text-lg">
                  <li>• Launch EduStream ERP</li>
                  <li>• Acquire initial B2B clients</li>
                  <li>• Establish market presence</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3">Phase 2 (Q3-Q4)</h3>
                <ul className="space-y-2 text-lg">
                  <li>• Expand GORUN and GKHIDMAH</li>
                  <li>• Scale subscription base</li>
                  <li>• Optimize operations</li>
                </ul>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3">Phase 3 (Year 2)</h3>
                <ul className="space-y-2 text-lg">
                  <li>• Launch GNEXT/GLOOK ecosystem</li>
                  <li>• Regional market expansion</li>
                  <li>• Strategic partnerships</li>
                </ul>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-3">Phase 4 (Year 3)</h3>
                <ul className="space-y-2 text-lg">
                  <li>• International scaling</li>
                  <li>• Investment rounds</li>
                  <li>• Enterprise partnerships</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-center">Revenue Growth</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={growthRoadmapData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="phase" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={3} name="Revenue (%)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-center">Client Growth</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={growthRoadmapData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="phase" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="clients" fill="#10b981" name="Clients" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 15: Why Now
    {
      title: 'Why Now',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Timing Is Critical</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: '📈',
                title: 'Market demand is rapidly increasing',
                desc: 'Digital solution demand at all-time high',
                color: 'blue'
              },
              {
                icon: '⚡',
                title: 'Technology adoption is accelerating',
                desc: 'Businesses quickly moving to automation',
                color: 'purple'
              },
              {
                icon: '🚀',
                title: 'Multiple products already in development',
                desc: 'We are ready and moving forward',
                color: 'green'
              },
              {
                icon: '🏆',
                title: 'First-mover advantage is available',
                desc: 'Perfect time to enter the market',
                color: 'orange'
              }
            ].map((point, idx) => (
              <div key={idx} className={`bg-gradient-to-br from-${point.color}-50 to-${point.color}-100 p-8 rounded-2xl border-2 border-${point.color}-300 shadow-xl hover:shadow-2xl transition-all`}>
                <div className="text-7xl mb-4 text-center">{point.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-center">{point.title}</h3>
                <p className="text-lg text-gray-700 text-center">{point.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center mt-12">
            <p className="text-3xl font-bold">This is the ideal time to build together.</p>
          </div>
        </div>
      )
    },

    // Slide 16: Closing
    {
      title: 'Closing Statement',
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-center px-8">
          <h2 className="text-5xl font-bold text-blue-600 mb-6">Building the Future Together</h2>

          <div className="max-w-4xl space-y-6">
            <p className="text-2xl text-gray-700 leading-relaxed">
              I am committed to creating scalable software businesses that deliver real value, sustainable revenue, and long-term market leadership.
            </p>

            <p className="text-2xl text-gray-700 leading-relaxed">
              With the right strategic partner, we can transform these ideas into industry-leading ventures.
            </p>

            <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 p-10 rounded-2xl text-white">
              <p className="text-4xl font-bold">Let's build something extraordinary together.</p>
            </div>
          </div>

          <div className="mt-12 flex items-center space-x-8">
            <div className="text-6xl">🚀</div>
            <div className="text-6xl">💡</div>
            <div className="text-6xl">🤝</div>
            <div className="text-6xl">📈</div>
          </div>
        </div>
      )
    },

    // Slide 17: Contact
    {
      title: 'Contact Information',
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-12 text-center">
          <h2 className="text-5xl font-bold text-blue-600">Thank You</h2>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-12 rounded-2xl shadow-2xl max-w-2xl">
            <div className="text-7xl mb-6">👨‍💼</div>
            <h3 className="text-3xl font-bold mb-4">Mobashir Ahmed Nasrullah</h3>
            <p className="text-2xl text-gray-700 mb-8">Founder & Software Strategist</p>

            <div className="space-y-4 text-xl text-gray-600">
              <div className="flex items-center justify-center space-x-3">
                <span className="text-2xl">📧</span>
                <p>Email: [Your Email]</p>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="text-2xl">📱</span>
                <p>Phone: [Your Number]</p>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="text-2xl">💼</span>
                <p>LinkedIn: [Your Profile]</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 text-white px-12 py-6 rounded-xl text-2xl font-bold">
            Ready to Discuss Partnership Opportunities
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col">
      <div className="bg-white shadow-md py-4 px-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Briefcase className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Business Proposal Presentation</h1>
        </div>
        <div className="flex items-center space-x-4">
          <BarChart3 className="w-6 h-6 text-blue-600" />
          <span className="text-lg font-semibold text-gray-700">
            Slide {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>

      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl p-12 h-full overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-500 mb-8 border-b-2 border-blue-200 pb-4">
            {slides[currentSlide].title}
          </h2>
          <div className="mt-6">
            {slides[currentSlide].content}
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-gray-200 py-6 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              currentSlide === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
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
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              currentSlide === slides.length - 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
            }`}
          >
            <span>Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
