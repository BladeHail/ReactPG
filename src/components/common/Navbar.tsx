import { useNavigate } from "react-router-dom";
import { Dropdown } from "./Dropdown";

export function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-base-200 shadow relative">

      {/* Hover 메뉴 그룹 */}
      <div className="flex-1">
        <div className="mx-4 relative inline-block rounded-md bg-base-300 group">
        {/* Anchor 역할 */}
        <a className="text-xl cursor-pointer">☰ </a>
        <a
          className="font-bold text-xl cursor-pointer hover:font-"
          onClick={() => navigate("/")}
        >
          Paralympic Studio
        </a>
        {/* Hover Dropdown */}
        <Dropdown />
        </div>
      </div>

      {/* 로그인 / 로그아웃 영역 */}
      <div className="flex-none gap-3">
        {localStorage.getItem('token') ? (
          <>
            <span className="font-semibold">{localStorage.getItem('username')} 님</span>
          </>
        ) : (
          <>
            <span className="font-semibold">Guest 님</span>
          </>
        )}
      </div>
    </div>
  );
}
