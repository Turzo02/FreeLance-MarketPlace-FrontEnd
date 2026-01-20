import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { 
  User, 
  PlusCircle, 
  List, 
  CheckSquare, 
  BarChart2, 
  Menu, 
  X, 
  LayoutDashboard
} from "lucide-react";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const navItems = [
    { to: "/dashboard/profile", label: "Profile", icon: User },
    { to: `/dashboard/myaddedjobs/${user?.email}`, label: "My Added Jobs", icon: List },
    { to: "/dashboard/addAJob", label: "Add a Job", icon: PlusCircle },
    { to: "/dashboard/acceptedTasks", label: "Accepted Tasks", icon: CheckSquare }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      
      {/* 
        1. MAIN WRAPPER PADDING 
      */}
      <div className="pt-24 lg:pt-28 max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 px-4 sm:px-6">

        {/* --- MOBILE: Dashboard Menu Toggle (Visible < lg) --- */}

        <div className="lg:hidden flex items-center justify-between p-4 bg-card border border-border rounded-xl shadow-sm mb-4">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="text-primary size-5" />
            <span className="font-bold text-sm uppercase tracking-wide">Dashboard Menu</span>
          </div>
          <button 
            onClick={() => setOpen(true)} 
            className="p-2 bg-secondary rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* --- SIDEBAR (Desktop: Sticky, Mobile: Drawer) --- */}
        <aside
          className={`
            fixed inset-y-0 left-0 z-60 w-72 bg-card border-r border-border p-4 shadow-2xl transform transition-transform duration-300 ease-in-out
            lg:translate-x-0 lg:static lg:z-auto lg:w-64 lg:shadow-none lg:border-none lg:bg-transparent lg:p-0
            ${open ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          {/* Mobile Close Button */}
          <div className="lg:hidden flex justify-end mb-4">
            <button onClick={() => setOpen(false)} className="p-2 bg-muted rounded-full">
              <X size={20} />
            </button>
          </div>

          {/* Navigation Card (Glassy on Desktop) */}
          <div className="lg:sticky lg:top-28 bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            

            {/* Links */}
            <nav className="p-3 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`
                  }
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </aside>

        {/* --- MOBILE OVERLAY --- */}
        {open && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-55 lg:hidden animate-in fade-in"
            onClick={() => setOpen(false)}
          />
        )}

        {/* --- MAIN CONTENT --- */}
        <main className="flex-1 w-full min-w-0">
          <div className="bg-card border border-border rounded-2xl shadow-sm min-h-[600px] p-6 sm:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
}
