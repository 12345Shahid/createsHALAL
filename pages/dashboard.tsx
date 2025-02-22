// File: pages/dashboard.tsx
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from "../config/database";
import Head from "next/head";
import {
  Moon,
  Sun,
  MoreVertical,
  CreditCard,
  PlayCircle,
  ChevronRight,
  Home,
  User,
  FileText,
  Bell,
  DollarSign,
  Mail,
  Info,
  Clock,
} from "lucide-react";
import { format } from "date-fns";

const menuItems = [
  { id: 1, icon: Home, label: "Homepage", href: "/" },
  { id: 2, icon: User, label: "Profile", href: "/profile" },
  { id: 3, icon: FileText, label: "File Manager", href: "/files" },
  { id: 4, icon: Bell, label: "Notifications", href: "/notifications" },
  { id: 5, icon: Clock, label: "History", href: "/history" },
  { id: 6, icon: DollarSign, label: "Pricing", href: "/pricing" },
  { id: 7, icon: Mail, label: "Contact Us", href: "/contact" },
  { id: 8, icon: Info, label: "About Us", href: "/about" },
];

export default function Dashboard() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [credits, setCredits] = useState(0);
  const [activities, setActivities] = useState([]);
  const [expandedActivity, setExpandedActivity] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchUserData() {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        router.push("/login"); // Redirect if not logged in
        return;
      }
      setUser(data.user);

      const { data: creditData } = await supabase
        .from("users")
        .select("credits")
        .eq("id", data.user.id)
        .single();

      setCredits(creditData?.credits || 0);

      const { data: activityData } = await supabase
        .from("activity")
        .select("*")
        .eq("user_id", data.user.id)
        .order("date", { ascending: false })
        .limit(5);

      setActivities(activityData || []);
    }

    fetchUserData();
  }, [router]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  if (!user) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Head>
        <title>Dashboard - {user?.email}</title>
      </Head>

      <div className="p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              {isDarkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-500" />}
            </button>

            {/* Menu Button */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <MoreVertical className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </button>

              {/* Menu Dropdown */}
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 py-1">
                  {menuItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {item.icon && <item.icon className="h-4 w-4 mr-3" />} {/* Ensures icons are properly displayed */}
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Credits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <CreditCardStat title="Total Credits" value={credits} icon={CreditCard} color="blue" />
          <CreditCardStat title="Ad Credits" value="Coming Soon" icon={PlayCircle} color="purple" />
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Your last 5 content generations</p>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700">
            {activities.length === 0 ? (
              <p className="text-center p-4 text-gray-500 dark:text-gray-400">No recent activity</p>
            ) : (
              activities.map((activity) => (
                <div key={activity.id}>
                  <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{activity.tool_name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{activity.description}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {format(new Date(activity.date), "MMM d, yyyy")}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {activity.credits_used} credits
                        </p>
                      </div>
                      <button
                        onClick={() => setExpandedActivity(expandedActivity === activity.id ? null : activity.id)}
                        className="transform transition-transform duration-200 hover:scale-110"
                      >
                        <ChevronRight
                          className={`h-5 w-5 text-gray-400 transition-transform ${
                            expandedActivity === activity.id ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const CreditCardStat = ({ title, value, icon: Icon, color }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
      </div>
      <Icon className="h-6 w-6 text-gray-500 dark:text-gray-400" /> {/* Fixed the icon rendering issue */}
    </div>
  </div>
);