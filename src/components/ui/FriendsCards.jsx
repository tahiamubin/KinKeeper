import { Link } from "react-router";
// "id": 1,
//     "name": "John Doe",
//     "picture": "/src/assets/image/Ellipse 1 (1).png",
//     "email": "john@example.com",
//     "days_since_contact": 12,
//     "status": "overdue",
//     "tags": ["college", "close friend"],
//     "bio": "Met in university. Love hiking together.",
//     "goal": 14,
//     "next_due_date": "2025-07-20"

const FriendsCards = ({ friend }) => {
  const colors = friend.status === "on_track" 
  ? "bg-[#244D3F]" 
  : friend.status === "almost_due" 
    ? "bg-[#EFAD44]" 
    : "bg-red-600";
  return (
    <div>
        <Link to={`/friends/${friend.id}`}>
          <div className="mb-20  transition-all duration-300 ease-in-out
          hover:-translate-y-2 hover:shadow-xl hover:shadow-green-100
          cursor-pointer ">
            <div className="flex flex-col items-center justify-between w-70 
             h-70 p-4 bg-white rounded-2xl shadow">
              <div className="card-body text-center items-center p-2">
                <img className="w-[270 px]"  src={friend.picture} alt="" />
                <h2 className="card-title text-2xl font-bold text-center">{friend.name}</h2>
                <p className="text- center font-bold text-xl text-center">{friend.days_since_contact}d</p>
              </div>
              <div className="flex flex-col gap-2 ">
                <div
                  className="bg-[#CBFADB] text-[#244D3F] 
                text-center font-semibold rounded-xl"
                >
                  {friend.tags}
                </div>
                <div className={`badge  ${colors} text-white`}>{friend.status}</div>
              </div>
            </div>
          </div>
        </Link>
    </div>
  );
};

export default FriendsCards;
