import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";

export default function Profile() {
  const { user } = use(AuthContext);

  return (
    <div className="max-w-2xl">
      <h2 className="   text-xl mb-6">My Profile</h2>

      <div className="flex flex-col sm:flex-row gap-6 border     rounded-lg p-4">
        
        {/* Avatar */}
        <div className="shrink-0">
          <img
            src={user?.photoURL || "https://api.dicebear.com/7.x/notionists/svg?seed=Data_User_006"}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border     object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 space-y-3">
          <div>
            <p className="  text-sm">Full Name</p>
            <p className="  ">
              {user?.displayName || "Not provided"}
            </p>
          </div>

          <div>
            <p className="  text-sm">Email</p>
            <p className="  ">{user?.email}</p>
          </div>

          <div>
            <p className="  text-sm">Email Status</p>
            <p
              className={`${
                user?.emailVerified ? "  " : " "
              }`}
            >
              {user?.emailVerified ? "Verified" : "Not verified"}
            </p>
          </div>

          <div>
            <p className="  text-sm">Account Created</p>
            <p className=" ">
              {user?.metadata?.creationTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
