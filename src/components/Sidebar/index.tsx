import {
  SidebarContainer,
  SideContent,
  DashboradIcon,
  HomeIcon,
  StarIcon,
  UserIcon,
  Create,
  PlusIcon,
} from "./style";

interface User {
  user_id: string;
}

export default function Sidebar({ user_id }: User) {
  function changeClass(pathname: string) {
    return window.location.pathname === pathname ? "active" : "";
  }

  return (
    <SidebarContainer>
      <img src="/icons/logo.svg" alt="logomarca" />
      <div className="space">
        <SideContent to="/dashboard" className={changeClass("/dashboard")}>
          <DashboradIcon />
          <span>Dashboard</span>
        </SideContent>
        <SideContent to="/announce">
          <HomeIcon />
          <span>Meus anúncios</span>
        </SideContent>

        <SideContent to="/favorite">
          <StarIcon />
          <span>Meus favoritos</span>
        </SideContent>

        <SideContent to="/profile">
          <UserIcon />
          <span>Meu perfil</span>
        </SideContent>

        <Create to={`/create-post/${user_id}`}>
          <PlusIcon /> Criar um novo anúncio
        </Create>
      </div>
    </SidebarContainer>
  );
}
