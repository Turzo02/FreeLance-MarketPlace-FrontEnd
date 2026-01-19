import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router"; // Adjust based on your router version
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import ThemeToggle from "./ThemeToggle/ThemeToggle";
import Logo from "./Logo/Logo";
import { Menu, X, LogOut, LayoutDashboard, User, ChevronDown } from "lucide-react";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProfileOpen(false);
  }, [navigate]);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Signed Out",
          text: "See you next time!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
          background: "hsl(var(--card))",
          color: "hsl(var(--foreground))"
        });
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Jobs", path: "/allJobs" },
    { name: "How It Works", path: "/how-it-works" },
  ];

  return (
    <>
      <nav
        className={`fixed z-50 transition-all duration-600 ease-in-out border-border/40
        ${
          scrolled
            ? "top-0 inset-x-0 max-w-7xl mx-auto rounded-b-2xl  border-b bg-background/80 shadow-md backdrop-blur-xl"
            : "top-4 inset-x-4 max-w-7xl  mx-auto rounded-2xl border bg-background/70 shadow-md backdrop-blur-md"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* --- LEFT: Logo --- */}
            <div className="shrink">
              <Logo />
            </div>

            {/* --- CENTER: Desktop Navigation --- */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition-colors duration-300 hover:text-primary
                    ${isActive ? "text-primary" : "text-muted-foreground"}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[0_0_8px_currentColor]" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
              
              {/* Dashboard Link (Protected) */}
              {user && (
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-300 hover:text-primary ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`
                  }
                >
                  Dashboard
                </NavLink>
              )}
            </div>

            {/* --- RIGHT: Actions --- */}
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />

              {user ? (
                // Logged In State
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full border border-border bg-card hover:bg-accent transition-all duration-200"
                  >
                    <img
                      src={user.photoURL || "https://api.dicebear.com/7.x/notionists/svg?seed=User"}
                      alt="User"
                      className="w-8 h-8 rounded-full object-cover border border-border"
                    />
                    <ChevronDown size={14} className={`text-muted-foreground transition-transform duration-200 ${isProfileOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-56 rounded-xl border border-border bg-card shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top-right">
                      <div className="p-4 border-b border-border bg-muted/30">
                        <p className="text-sm font-bold text-foreground truncate">{user.displayName}</p>
                        <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                      </div>
                      <div className="p-2">
                        <Link 
                           to="/dashboard"
                           className="flex items-center gap-2 px-3 py-2 text-sm text-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                          <LayoutDashboard size={16} /> Dashboard
                        </Link>
                        <button
                          onClick={handleSignOut}
                          className="w-full flex items-center gap-2 px-3 py-2 text-sm text-destructive hover:bg-destructive/10 rounded-lg transition-colors text-left"
                        >
                          <LogOut size={16} /> Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                // Guest State
                <div className="flex items-center gap-3">
                  <Link to="/login">
                    <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                      Login
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="px-5 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-0.5">
                      Register
                    </button>
                  </Link>
                </div>
              )}
            </div>

            {/* --- MOBILE: Toggle Button --- */}
            <div className="flex lg:hidden items-center gap-4">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-foreground hover:bg-accent transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* --- MOBILE MENU (Overlay) --- */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-in slide-in-from-top-5">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive 
                        ? "bg-primary/10 text-primary border border-primary/20" 
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              
              {user && (
                 <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive 
                        ? "bg-primary/10 text-primary border border-primary/20" 
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    }`
                  }
                >
                  Dashboard
                </NavLink>
              )}

              <div className="border-t border-border my-4 pt-4">
                {user ? (
                  <div className="space-y-4 px-2">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.photoURL || "https://api.dicebear.com/7.x/notionists/svg?seed=User"}
                        alt="Profile"
                        className="w-10 h-10 rounded-full object-cover border border-border"
                      />
                      <div>
                         <p className="font-semibold text-foreground">{user.displayName}</p>
                         <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-destructive/30 text-destructive bg-destructive/5 hover:bg-destructive/10 transition-colors"
                    >
                      <LogOut size={18} /> Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4 px-2">
                    <Link to="/login" className="w-full">
                      <button className="w-full px-4 py-2.5 rounded-lg border border-border text-foreground font-medium hover:bg-accent transition-colors">
                        Login
                      </button>
                    </Link>
                    <Link to="/register" className="w-full">
                      <button className="w-full px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium shadow-lg hover:bg-primary/90 transition-colors">
                        Register
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
      
    </>
  );
};

export default Navbar;
