import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { User, Mail, Calendar, ShieldCheck, ShieldAlert, Edit3 } from "lucide-react";

export default function Profile() {
  const { user } = useContext(AuthContext);

  // Helper to format date nicely
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      {/* --- Page Header --- */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">My Profile</h2>
        {/* Optional Edit Button */}
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
          <Edit3 size={16} />
          <span>Edit Profile</span>
        </button>
      </div>

      {/* --- Main Profile Card --- */}
      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
        
        {/* Banner Background */}
        <div className="h-32 bg-linear-to-r from-primary/20 via-primary/10 to-secondary/50"></div>

        <div className="px-8 pb-8">
          
          {/* Avatar & Header Info */}
          <div className="relative flex flex-col sm:flex-row items-start sm:items-end gap-6 -mt-12 mb-8">
            
            {/* Avatar */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full p-1.5 bg-card ring-4 ring-background shadow-xl">
                <img
                  src={user?.photoURL || "https://api.dicebear.com/7.x/notionists/svg?seed=Data_User_006"}
                  alt="User Avatar"
                  className="w-full h-full rounded-full object-cover bg-muted"
                />
              </div>
              {/* Verification Badge (Absolute) */}
              <div className="absolute bottom-2 right-2 bg-card rounded-full p-1 shadow-sm">
                {user?.emailVerified ? (
                  <ShieldCheck className="w-6 h-6 text-green-500 fill-green-500/20" />
                ) : (
                  <ShieldAlert className="w-6 h-6 text-yellow-500 fill-yellow-500/20" />
                )}
              </div>
            </div>

            {/* Name & Email */}
            <div className="flex-1 space-y-1 pb-2">
              <h1 className="text-3xl font-bold text-foreground">
                {user?.displayName || "User"}
              </h1>
              <p className="text-muted-foreground flex items-center gap-2">
                <Mail size={16} />
                {user?.email}
              </p>
            </div>
          </div>

          {/* --- Details Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border">
            
            {/* Field 1: Full Name */}
            <div className="p-4 rounded-xl bg-secondary/30 border border-border/50 flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-background text-primary shadow-sm">
                <User size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Display Name
                </p>
                <p className="text-base font-medium text-foreground mt-0.5">
                  {user?.displayName || "Not provided"}
                </p>
              </div>
            </div>

            {/* Field 2: Email Status */}
            <div className="p-4 rounded-xl bg-secondary/30 border border-border/50 flex items-start gap-4">
              <div className={`p-2.5 rounded-lg bg-background shadow-sm ${user?.emailVerified ? "text-green-500" : "text-yellow-500"}`}>
                {user?.emailVerified ? <ShieldCheck size={20} /> : <ShieldAlert size={20} />}
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Account Status
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold
                    ${user?.emailVerified 
                      ? "bg-green-500/10 text-green-600 border border-green-500/20" 
                      : "bg-yellow-500/10 text-yellow-600 border border-yellow-500/20"
                    }`}
                  >
                    {user?.emailVerified ? "Verified Identity" : "Unverified"}
                  </span>
                </div>
              </div>
            </div>

            {/* Field 3: Join Date */}
            <div className="p-4 rounded-xl bg-secondary/30 border border-border/50 flex items-start gap-4 md:col-span-2">
              <div className="p-2.5 rounded-lg bg-background text-primary shadow-sm">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Member Since
                </p>
                <p className="text-base font-medium text-foreground mt-0.5">
                  {formatDate(user?.metadata?.creationTime)}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
